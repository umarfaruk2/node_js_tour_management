import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./config/dbConnection.js";
import { errorHandle } from "./utility/errorHandle.js";
import tourRouter from "./routes/tourRoute.js";
dotenv.config();
const port = process.env.PORT || 5000;
const mongodb_url = process.env.MONGODB_URL;
const app = express();

// cors middleware
app.use(cors());
app.use(express.json());

// db connection
dbConnection(mongodb_url);

// routers
app.get("/", (req, res, next) => {
  res.send('tour management');
});

app.use('/api/v1/addtour', tourRouter);

// 404 error handler
app.use((req, res, next) => {
  next("Request url was not found !");
});

// error handler
app.use((err, req, res, next) => {
  if (res.headersSend) {
    next("There was a problem!");
  } else {
    if (err.message) {
      res.status(500).json({
        status: "from error fail",
        err: err.message,
      });
    } else {
      res.status(500).json({
        status: "fail",
        err: "This was an error! or ulr not correct",
      });
    }
  }
});

app.listen(port, () => {
  console.log("app ruing...");
});
