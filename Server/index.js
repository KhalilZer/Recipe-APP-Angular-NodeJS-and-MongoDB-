const connectDB = require("./db");
const express = require("express");
const userRoutes = require("./Routes/User-route");
const recipeRoutes = require("./Routes/Receipe-route");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authMiddleware = require("./Middlewares/jwtMdlwr");
connectDB();

app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/recipe", recipeRoutes);

const port = 3000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
