let mix = require("laravel-mix");
const devUrl = "http://laravel-mix-demo.test";

mix.scripts("src/js", "dist/js/all.js");

// localhost:3000
mix.browserSync({
  proxy: "http://laravel-mix-demo.test",
  files: [
    //Files for watching
    "./index.html",
    "./src/**/*",
  ],
});

mix
  .sass("src/sass/home.scss", "css", {
    sassOptions: {
      // processCssUrls: false,
      outputStyle: "compressed",
    },
  })
  .setPublicPath("dist")
  .version();
// .browserSync(devUrl);
// .browserSync({
//   proxy: devUrl,
// });

mix
  .sass("src/sass/styles.scss", "css", {
    sassOptions: {
      // processCssUrls: false,
      outputStyle: "compressed",
    },
  })
  .setPublicPath("dist")
  .version();
// .browserSync(devUrl);
// .browserSync({
//   proxy: devUrl,
// });

// ------------------------------------------------------
// let fs = require("fs");
// let path = require("path");
// Multi JS
//fs.readdirSync("src/js/").forEach((fileName) => mix.js(`src/js/${fileName}`, "dist/js"));
//mix.scripts(["src/js/app.js", "src/js/app-home.js"], "dist/js/all.js");

// Multi SASS
// var files = fs.readdirSync("src/sass");
// for (var i = 0; i < files.length; i++) {
//   if (path.extname(files[i]) == ".scss") {
//     mix.sass("src/sass/" + files[i], "dist/css", {
//       sassOptions: {
//         outputStyle: "compressed",
//       },
//     });
//   }
// }
