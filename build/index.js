"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = require("dotenv");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
//# sourceMappingURL=index.js.map