const production = process.env.HUGO_ENV === "production";

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    production &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./layouts/**/*.html", "./content/**/*.html"],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        whitelistPatternsChildren: [/markup/, /pagination/, /carbon/]
      }),
    production && require("cssnano")
  ]
};
