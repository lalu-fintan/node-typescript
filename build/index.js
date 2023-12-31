"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const dbConfig_1 = require("./config/dbConfig");
const mainRouter_1 = require("./routes/mainRouter");
const mainConfig_1 = require("./config/mainConfig");
const app = (0, express_1.default)();
(0, dbConfig_1.connectDB)();
(0, mainConfig_1.mainConfig)(app);
(0, mainRouter_1.mainRoutes)(app);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
//# sourceMappingURL=index.js.map