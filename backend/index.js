import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from './routes/booksRoute.js'

import cors from 'cors'

const app = express();

//Middleware for parsing request body
app.use(express.json());


//Middleware for handling CORS POLICY
/* app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders:  ['Content-Type']
})) */
app.use(cors())

// 
app.get("/", (request, respond) => {
  console.log(request);
  return respond.status(234).send("Welcome to MERN stack tutorial");
});

app.use('/books', booksRoute)

mongoose
  .connect(mongoDBURL)
  .then((result) => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("Everything is okey, running in", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
