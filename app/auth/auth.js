const authMiddleware = (req, res, next) => {
    console.log ("inside middleware");
    next();
}

module.exports = authMiddleware;