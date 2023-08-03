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
exports.hello = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const hello = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(process.env);
    try {
        console.log(process.env);
        const connection = yield promise_1.default.createConnection({
            socketPath: process.env.INSTANCE_UNIX_SOCKET,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        yield connection.connect();
        const result = yield connection.query("select * from User");
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
    return res.send("Hello!");
});
exports.hello = hello;
