let mix = require("laravel-mix");
const devUrl = "http://laravel-mix-demo.test";

mix.scripts("src/js", "dist/js/all.js");

// localhost:3000
mix.browserSync({
  proxy: devUrl,
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

mix
  .sass("src/sass/styles.scss", "css", {
    sassOptions: {
      // processCssUrls: false,
      outputStyle: "compressed",
    },
  })
  .setPublicPath("dist")
  .version();
