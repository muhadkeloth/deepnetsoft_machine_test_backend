"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerhttp = void 0;
const pino_1 = __importDefault(require("pino"));
exports.loggerhttp = (0, pino_1.default)({
    transport: {
        target: "pino-http-print",
        options: {
            destination: 1,
            all: true,
            translateTime: 'SYS:HH:MM:ss dd-mm-yyyy',
            ignore: "pid,hostname",
        }
    }
});
const logger = (0, pino_1.default)({
    transport: {
        target: 'pino-pretty',
        options: {
            translateTime: 'SYS:HH:MM:ss dd-mm-yyyy',
            ignore: "pid,hostname",
        }
    }
});
exports.default = logger;
