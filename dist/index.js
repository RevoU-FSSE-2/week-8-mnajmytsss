"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_1 = require("./data");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5001;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Tugas Week 8 Rest API");
});
app.listen(port, () => {
    console.log(`server listen ${port}`);
});
//======================== financial tracker =============================
//get all the financial data
app.get("/financials", (req, res) => {
    res.status(200).json({
        message: "You get all the financial data",
        financials: data_1.financials,
    });
});
//get financail data by id 
app.get("/financials/:id", (req, res) => {
    const financial = data_1.financials.filter((item) => {
        return item.id == req.params.id;
    });
    if (financial.length != 0) {
        res.json({
            message: "Success get financial data by id",
            financial
        });
    }
    else {
        res.json({
            message: "Failed to get financial data by id"
        });
    }
});
//post financial tracking data
app.post("/financials", (req, res) => {
    data_1.financials.push(req.body);
    res.json({
        message: "Success adding data",
        financials: data_1.financials
    });
});
//put financial tracking data
app.put("/financials/:id", (req, res) => {
    const financial = data_1.financials.filter((item) => {
        return item.id == req.params.id;
    });
    data_1.financials.push(req.body);
    res.json({
        message: "Success update data",
        financials: data_1.financials
    });
});
//patch financial tracking data
app.patch("/financials/:id", (req, res) => {
    const findId = parseInt(req.params.id);
    const { name, type, details, amount } = req.body;
    const test = data_1.financials.find(test => test.id === findId);
    if (name) {
        test.name = name;
    }
    if (type) {
        test.type = type;
    }
    if (details) {
        test.details = details;
    }
    if (amount) {
        test.amount = amount;
    }
    res.json({
        message: "Success update data",
        financials: data_1.financials
    });
});
//delete financial data tracking
app.delete("/financials/:id", (req, res) => {
    const findId = parseInt(req.params.id);
    // console.log(typeof(findId));
    // console.log(typeof(req.params.id))
    const y = data_1.financials.findIndex(x => x.id === findId);
    const del = data_1.financials.splice(y, 1);
    res.json({
        message: "Success update data",
        financials: data_1.financials
    });
});
