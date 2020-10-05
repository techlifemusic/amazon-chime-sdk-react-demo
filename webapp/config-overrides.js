const { override, addPostcssPlugins } = require("customize-cra")

// :: ---

// :: PostCSS plugins for TailwindCSS
const tailwindcssPlugins = addPostcssPlugins([
  require("tailwindcss"),
  require("autoprefixer"),
])

// :: ---

module.exports = override(tailwindcssPlugins)
