"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express = require("express");
const router = express.Router();
exports.usersRouter = router;
router.get("/", (req, res) => {
    res.send("Get all users");
});
//# sourceMappingURL=users.js.map