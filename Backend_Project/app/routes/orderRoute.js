const { v4: uuidv4 } = require("uuid");  //unique ids

const express = require("express");
const router = express.Router();

const stripe = require('stripe')('sk_test_51KTPofSBrNqb5kEYNy8HI1pCgaWA2UYGbUY9J7GqVRo0g5idkoHLGCdeWt31WyMiityeN5Xfn19sSFK6rgMXA3Rx00QxNusr99')
"use strict";
router.post("/placeorder", async(req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;

  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  const payment = await stripe.charges.create(
    {
      amount: subtotal*100 ,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email,
    },
    {
      idempotencyKey: uuidv4(),
    }
  );

  if(payment){

    res.send('Payment SuccessFull')

  }else{
      res.send('Payment Failed')
  }
});

module.exports = router
