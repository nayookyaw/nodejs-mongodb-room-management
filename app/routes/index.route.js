const express = require("express");
const router = express.Router();

const roomRoute = require("./room.route");

router.use((req, res, next) => {
    console.log ("Time : " + Date.now());
    next();
});

router.use("/room", roomRoute);

module.exports = router;