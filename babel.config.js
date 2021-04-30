module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset"
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ],
  "env": {
    "utils": {
      "presets": [
        [
          "env",
          {
            "loose": true,
            "modules": "commonjs",
            "targets": {
              "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
          }
        ]
      ]
    }
  }
}
