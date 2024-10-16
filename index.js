const express = require("express");
const app = express();

// import ejs
const ejs = require("ejs");

let userArray = [];
let todo = [];
// TO RENDER EJS FILES
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.render("signup");
});

app.get("/signup", (request, response) => {
  response.render("signup");
});

app.post("/register", (request, response) => {
  userArray.push(request.body);
  console.log(userArray);
  response.redirect("/login");
});

app.post("/todo", (req, res) => {
  // console.log(req.body);
  todo.push(req.body);
  console.log(todo);
  res.redirect("/todo")
});

app.post("/todo/delete/:index", (req, res) => {
  console.log(req.params);
  const { index } = req.params;
  todo.splice(index, 1);
  res.redirect("/todo");
});
 
app.get("/todo/edit/:index", (req, res) => {
  const { index } = req.params;
  const editTodo = todo[index];
  res.render("todo", { todo, editTodo, editIndex: index });
});

 
app.post("/todo/update/:index", (req, res) => {
  const { index } = req.params;
  todo[index] = req.body;   
  res.redirect("/todo");
});
 
app.post("/todo/done/:index", (req, res) => {
  const { index } = req.params;
   
  todo[index].done = !todo[index].done;
  res.redirect("/todo");
});


app.get("/dashboard", (request, response) => {
  response.render("dashboard");
});

app.get("/todo", (req, res) => {
  res.render("todo", { todo });
});

app.get("/login", (request, response) => {
  response.render("login");
});

// TO RENDER HTML FILES
// app.get("/", (request, response) => {
// response.send([
//   { name: "Hero", food: "yam" },
//   { name: "Ayo", food: "rice" },
//   { name: "Demi", food: "beans" },
//   { name: "Dami", food: "rice" },
//   { name: "Sola", food: "beans" },
//   { name: "Bami", food: "yam" }
// ]);
// response.sendFile(__dirname + "/index.html");
// });

const port = 5000;
app.listen(port, () => {
  console.log("listening on port " + port);
});