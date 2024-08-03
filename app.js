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
app.use(express.urlencoded({ extended: true }));

//routes
const renderHome = (req, res) => {
  res.render("home");
};

const renderAddProject = (req, res) => {
  res.render("project");
};

const renderContactMe = (req, res) => {
  res.render("contact");
};

app.get("/", renderHome);
app.get("/home", renderHome);
app.get("/project", renderAddProject);
app.get("/contact", renderContactMe);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
