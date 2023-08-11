import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { financials } from "./data";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
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
        financials,
    })
})

//get financail data by id 
app.get("/financials/:id", (req, res) => {
  const financial = financials.filter((item: any) => {
    return item.id == req.params.id
  })

  if (financial.length != 0) {
    res.json({
      message: "Success get financial data by id",
      financial
    })
  }else {
    res.json({
      message: "Failed to get financial data by id"
    })
  }
})

//post financial tracking data
app.post("/financials", (req, res) => {
  financials.push(req.body)
  res.json({
    message: "Success adding data",
    financials
  })
})

//put financial tracking data
app.put("/financials/:id", (req, res) => {
  const financial = financials.filter((item: any) => {
    return item.id == req.params.id
  })

  financials.push(req.body)
  res.json({
    message: "Success update data",
    financials
  })

})

//patch financial tracking data
app.patch("/financials/:id", (req, res) => {
  const findId = parseInt(req.params.id)
  const {name, type, details, amount} = req.body

  const test: any = financials.find(test => test.id === findId)

  if (name) {
    test.name = name
  } 
  if (type) {
    test.type = type
  }
  if (details) {
    test.details = details
  }
  if (amount) {
    test.amount = amount
  }
  res.json({
    message: "Success update data",
    financials
  })
})

//delete financial data tracking
app.delete("/financials/:id", (req, res) => {
  const findId = parseInt(req.params.id)
  // console.log(typeof(findId));
  // console.log(typeof(req.params.id))
  const y = financials.findIndex(x => x.id === findId)

  const del = financials.splice(y,1)

  res.json({
    message: "Success update data",
    financials
  })
})

