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
  const newProject = {
    id: projects.length + 1,
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date().getFullYear(),
  };

  projects.push(newProject);
  res.redirect("/home");
};

const renderProjectDetail = (req, res) => {
  const id = req.params.projectId;
  const projectById = projects.find((project) => project.id == id);

  console.log(projectById);

  res.render("projectDetail", { projectById });
};

const renderContact = (req, res) => {
  res.render("contact");
};

app.get("/", renderHome);
app.get("/home", renderHome);
app.get("/project", renderProject);
app.post("/project", createProject);
app.get("/projectDetail/:projectId", renderProjectDetail);
app.get("/contact", renderContact);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
