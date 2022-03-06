const express = require("express");
const app = express();
const PORT = 3000;
const token = "TOP_SECRET";

app.use(express.json());

const isAuthorized = (req, res, next) => {
  if (req.headers.authorization === token) next();
  else res.send("ERROR");
};

products = [
  { name: "iphone12", price: "$1099" },
  { name: "iphone13", price: "$1199" },
  { name: "iphone14", price: "$1299" },
];

app.post("/products/add", isAuthorized, (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  if (!name || !price) {
    res.send("Validation Failed");
  } else {
    products.push({ name, price });
    res.send(products);
  }
});

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@mail.com" && password === "password") {
    res.send({ token });
  } else {
    res.send("UNAUTHORISED");
  }
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log("Yay server is running"));
