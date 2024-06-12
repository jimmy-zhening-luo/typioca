import Lint from "@jimbojet/lint";

export default [
  ...new Lint(
    {
      js: [
        // "*.config.js",
        "eslint.config.js",
      ],
      ts: [
        // "*.config.ts",
        "src/**/*.ts",
        "types/**/*.d.ts",
      ],
      jsonc: ["tsconfig.json"],
      json: [
        // "*.json",
        "package.json",
      ],
      yml: [".github/workflows/*.yml"],
    },
  )
    .configs,
];
