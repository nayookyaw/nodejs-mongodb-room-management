const express = require("express");
const router = express.Router();

const auth = require("../auth/auth");

router.get("/", (req, res, next) => {
    res.send("Room Home");
});

/* below is auth routers */
// router.use(auth);
router.post("/", auth, (req, res, next) => {
    res.send("Room Home Post");
});

module.exports = router;