module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
  },
};
