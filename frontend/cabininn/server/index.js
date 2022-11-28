const express = require("express");
/* libreria para stripe en lado del backend */
const Stripe = require("stripe");
/* Clave secreta de stripe */
const stripe = new Stripe(
  "sk_test_51M8kC0F6A2nlaX7cTFwJfrApAApf8W8IEYWdLGIZC5DK5h88GtTEJgSLAueVRMlRGXYuGItLHIhPhL5JTWjDXrxK007aglkg7A"
);

/* Dependencia que permite conectar servidor de front con backend */
const cors = require("cors");

/* ejecucion de expres */
const app = express();

/* conexion */
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  // you can get more data to find in a database, and so on
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});
