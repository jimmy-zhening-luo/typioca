import Lint from "@jimbojet/lint";

export default [
  ...new Lint(
    {
      js: ["*.config.js"],
      ts: [
        "src/**/*.ts",
        "types/**/*.d.ts",
      ],
    },
  )
    .configs,
];
