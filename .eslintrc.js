module.exports = {
  extends: ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {
    "no-console": 0,
    "react/no-did-mount-set-state": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"]
      }
    ],
    "jsx-a11y/label-has-for": [0],
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: "es5"
      }
    ]
  }
};
