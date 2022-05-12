const express = require("express");
const router = express.Router();

const auth = require("../auth/auth");
const errorValidator = require("../validator/error.validator");
const roomValidator = require("../validator/room.validator");

router.get(
    "/",
    (req, res, next) => {
        res.send("Room Home");
    }
);

/* below is auth routers */
// router.use(auth);
router.post(
    "/",
    auth,
    roomValidator.create,
    errorValidator,
    (req, res, next) => {
        res.send("Room Home Post");
    }
);

module.exports = router;