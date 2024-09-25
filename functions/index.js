const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total; //query.total implies /payment/create?total, total is the query parameter
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "USD",
    });
    // console.log(paymentIntent);
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message:
        "The total payment should be greater than 0, please add some products to your cart",
    });
  }
});

// Exporting the API using onRequest
exports.api = onRequest(app);

//The above implementation is used when we actually have a credit card for payment...so for our case let's use Refactoring backend payment API without function:
// Create a new folder for the API?Backend case...ke client side folder wchi malet new
