const jwt = require("jsonwebtoken");
const JWT_SECRET = "YourCode";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    // Vérifie et décode le token JWT
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { id: decoded.user[0]._id };
    // Ajoute l'ID utilisateur dans req.user
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
