const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const fs = require("fs").promises
const path = require("path")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err))

const User = require("./models/User")
const Cart = require("./models/Cart")
const Order = require("./models/Order")

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://divi-luxe.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
)

app.use(express.json())


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

let products = []
const loadProducts = async () => {
  try {
    console.log("Loading products...")
    const data = await fs.readFile(path.join(__dirname, "products.json"), "utf8")
    products = JSON.parse(data)
    products = products.map((product, index) => ({ ...product, id: index + 1 }))
    console.log("Products loaded successfully")
  } catch (err) {
    console.error("Error loading products:", err)
  }
}

// Routes
app.get("/api/products", async (req, res) => {
  try {
    console.log("Fetching products...")
    if (products.length === 0) {
      await loadProducts()
    }
    if (products.length === 0) {
      return res.status(500).json({ message: "No products available" })
    }
    console.log("Products fetched successfully")
    res.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.get("/api/category/:slug", async (req, res) => {
  try {
    console.log(`Fetching category: ${req.params.slug}`)
    if (products.length === 0) {
      await loadProducts()
    }

    const { slug } = req.params
    const categoryProducts = products.filter((p) => p.category.toLowerCase() === slug.toLowerCase())

    if (categoryProducts.length === 0) {
      console.log(`No products found in category: ${slug}`)
      return res.status(404).json({ message: `No products found in category: ${slug}` })
    }

    res.json(categoryProducts)
  } catch (error) {
    console.error("Error fetching category products:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.get("/api/product/:id", async (req, res) => {
  try {
    console.log(`Fetching product with ID: ${req.params.id}`)
    if (products.length === 0) {
      await loadProducts()
    }
    const { id } = req.params
    const product = products.find((p) => p.id === Number(id))
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: "Product not found" })
    }
  } catch (error) {
    console.error("Error fetching product:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// New search endpoint
app.get("/api/search", async (req, res) => {
  try {
    console.log("Searching products...")
    if (products.length === 0) {
      await loadProducts()
    }

    const { query } = req.query
    if (!query) {
      return res.status(400).json({ message: "Search query is required" })
    }

    const searchResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()),
    )

    console.log(`Found ${searchResults.length} results for query: ${query}`)
    res.json(searchResults)
  } catch (error) {
    console.error("Error searching products:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ email, password: hashedPassword })
    await user.save()
    res.status(201).json({ message: "User registered successfully" })
  } catch (error) {
    console.error("Error registering user:", error)
    res.status(500).json({ message: "Error registering user" })
  }
})

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
    res.json({ token, userId: user._id })
  } catch (error) {
    console.error("Error logging in:", error)
    res.status(500).json({ message: "Error logging in" })
  }
})

app.get("/api/user", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    res.json(user)
  } catch (error) {
    console.error("Error fetching user:", error)
    res.status(500).json({ message: "Error fetching user" })
  }
})


// Start server after loading products
loadProducts().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

