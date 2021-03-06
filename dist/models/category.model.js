"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    category: { type: String, trim: true, required: true },
});
const Category = mongoose.model("Category", categorySchema);
exports.Category = Category;
//# sourceMappingURL=category.model.js.map