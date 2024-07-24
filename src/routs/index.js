const express = require("express");
const router = express.Router();
const authRouter = require("./auth/index");
const userRouter = require("./user/index");
const { isLoggined, isAdmin } = require("../middlewares/auth");
const adminRouter = require("./admin/index");
const error = require("../middlewares/errors");

router.use("/auth", authRouter);
router.use("/admin", isLoggined, adminRouter);
router.use("/user", isLoggined, isAdmin, userRouter);

router.use(error);
module.exports = router;
