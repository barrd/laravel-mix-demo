// ------------------------------------------------------
let fs = require("fs");
let path = require("path");
Multi JS
fs.readdirSync("src/js/").forEach((fileName) => mix.js(`src/js/${fileName}`, "dist/js"));
mix.scripts(["src/js/app.js", "src/js/app-home.js"], "dist/js/all.js");

// Multi SASS
var files = fs.readdirSync("src/sass");
for (var i = 0; i < files.length; i++) {
  if (path.extname(files[i]) == ".scss") {
    mix.sass("src/sass/" + files[i], "dist/css", {
      sassOptions: {
        outputStyle: "compressed",
      },
    });
  }
}
