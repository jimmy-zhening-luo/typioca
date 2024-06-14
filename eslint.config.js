import Lint from "@jimbojet/lint";

export default [
  ...new Lint(
    {
      js: ["eslint.config.js"],
      ts: ["src/**/*.ts"],
      jsonc: ["tsconfig.json"],
      json: ["package.json"],
    },
  )
    .configs,
];
