const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));

// setGlobalOptions({maxInstances: 10}) Uncomment this line during deployment

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total); //query.total implies /payment/create?total, total is the query parameter
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

// // Import required modules
// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// // Load environment variables from .env file
// dotenv.config();

// // Initialize Stripe with the secret key from environment variables
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// // Create an Express application
// const app = express();

// // Use CORS to allow requests from any origin
// app.use(cors({ origin: true }));

// // Parse incoming JSON requests
// app.use(express.json());

// // Define a simple GET endpoint
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Success!",
//   });
// });

// // Define the POST endpoint for creating a payment intent
// app.post("/payment/create", async (req, res) => {
//   // Get the total amount from query parameters
//   const total = parseInt(req.query.total); // e.g., /payment/create?total=1000

//   // Validate the total amount
//   if (total > 0) {
//     try {
//       // Create a payment intent with Stripe
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: "USD",
//       });

//       // Respond with the client secret from the payment intent
//       res.status(201).json({
//         clientSecret: paymentIntent.client_secret,
//       });
//     } catch (error) {
//       // Log the error and respond with a 500 status code
//       logger.error("Error creating payment intent:", error);
//       res.status(500).json({
//         message: "Internal Server Error",
//         error: error.message,
//       });
//     }
//   } else {
//     // Respond with a 403 status if the total is not greater than 0
//     res.status(403).json({
//       message:
//         "The total payment should be greater than 0, please add some products to your cart",
//     });
//   }
// });

// // Export the API using onRequest
// exports.api = onRequest(app);