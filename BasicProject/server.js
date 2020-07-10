const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: "false",
  noCache: true
});

server.get("/", function (req, res) {
  const about = {
      avatar_url: "https://avatars1.githubusercontent.com/u/38770562?s=400&u=fe73494f860728d325a0abf511b94259ac783de6&v=4",
      name: "Arthur Meireles",
      role: "Desenvolvedor Full-stack",
      description: "Evoluindo cada dia mais na stack javascript.",
      links: [
        { name: "Github", url: "https://github.com/arthur-meireles"},
        { name: "Linkedin", url: "https://www.linkedin.com/in/o-arthur-meireles/"}
      ]
  }

  return res.render("about", {about});
});

server.get("/portfolio", function (req, res) {
  return res.render("portfolio",{items: videos});
});

server.listen(5000, function () {
  console.log("Server is running");
});
