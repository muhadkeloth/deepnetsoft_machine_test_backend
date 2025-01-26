"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MainController_1 = __importDefault(require("../controllers/MainController"));
const MainRepository_1 = __importDefault(require("../repositories/MainRepository"));
const Menu_1 = __importDefault(require("../models/Menu"));
const router = (0, express_1.Router)();
const mainController = new MainController_1.default(new MainRepository_1.default(Menu_1.default));
router.post('/', mainController.menu);
exports.default = router;
