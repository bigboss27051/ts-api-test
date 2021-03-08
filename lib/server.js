"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
const app = express_1.default();
const port = process.env.PORT || 3300;
app.use(body_parser_1.default.json());
app.use(cors_1.default({ origin: true }));
app.get('/', (req, res) => {
    res.status(200).json({
        response: "ok 200"
    });
});
app.listen(port, () => {
    console.log(`Start server at port ${port}.......`);
});
//# sourceMappingURL=server.js.map