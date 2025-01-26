"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../middleware/logger"));
class MainController {
    constructor(repository) {
        this.repository = repository;
        this.menu = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { menu } = req.body;
                if (!menu)
                    throw new Error('menu is required');
                const response = yield this.repository.findbyCategory(menu);
                res.status(200).json({ response });
            }
            catch (error) {
                const err = error;
                logger_1.default.error(`error to find menus: ${err.message}`);
                res.status(500).json({ error });
            }
        });
    }
}
exports.default = MainController;
