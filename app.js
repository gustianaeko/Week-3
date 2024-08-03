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

const projects = [];

//routes
const renderHome = (req, res) => {
  res.render("home", { data: [...projects] });
};

const renderProject = (req, res) => {
  res.render("project", { projects });
};

const createProject = (req, res) => {
  // console.log(req.body);
  projects.push(req.body);

  res.redirect("/home");
};

const renderContact = (req, res) => {
  res.render("contact");
};

app.get("/", renderHome);
app.get("/home", renderHome);
app.get("/project", renderProject);
app.post("/project", createProject);
app.get("/contact", renderContact);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
