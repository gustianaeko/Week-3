const express = require("express");
const app = express();
const port = 3000;

//view engine
app.set("view engine", "hbs");
app.set("views", "views");

//static file access
app.use("/assets", express.static("assets"));

//body parser (parse from string to obj)
app.use(express.json());

//routes
const renderIndex = (req, res) => {
  res.render("index");
};

const renderAddProject = (req, res) => {
  res.render("addProject");
};

const renderContactMe = (req, res) => {
  res.render("contactMe");
};

app.get("/", renderIndex);
app.get("/addProject", renderAddProject);
app.get("/contactMe", renderContactMe);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
