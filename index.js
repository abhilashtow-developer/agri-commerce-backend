require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const productRoutes = require("./routes/product.routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test db connection
pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("DB connection error ❌", err);
  } else {
    console.log("PostgreSQL connected ✅", result.rows[0]);
  }
});

// routes
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
