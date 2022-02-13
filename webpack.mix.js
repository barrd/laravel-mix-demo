let mix = require("laravel-mix");

mix
  .js("src/js/app.js", "js")
  .sass("src/sass/styles.scss", "css", {
    sassOptions: {
      outputStyle: "compressed",
    },
  })
  .setPublicPath("dist")
  .version()
  .browserSync("http://laravel-mix-demo.test");
