const express = require("express");
app = express();
PORT = 3000;
app.use(express.json());
products = [
  { name: "iphone12", price: "$1099" },
  { name: "iphone13", price: "$1199" },
  { name: "iphone14", price: "$1299" },
];

app.post("/products/add", (req, res) => {
  console.log(req.body);
  const{name, price} = req.body;
  if(!name || !price){
    res.send("Validation Failed")
  }
  else{
  
  products.push({name, price});
  res.send(products);
}});


app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log("Yay server is running"));
