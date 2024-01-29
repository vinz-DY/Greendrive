const { verifyToken } = require("../services/jwt");

const checkCredentials = (req, res, next) => {
  try {
    const decode = verifyToken(req.cookies.auth);
    if (decode.role === 1) {
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.error("Échec de la vérification du token :", error);
    res.sendStatus(401);
  }
};
module.exports = checkCredentials;