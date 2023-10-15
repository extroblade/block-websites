export default {
  main: {
    input: "./src/shared/api/schema.yaml",
    prettier: true,
    eslint: true,
    output: {
      target: "./src/shared/api/generated.ts",
      override: {
        mutator: {
          path: "./src/shared/api/api-instance.ts",
          name: "createInstance",
        },
      },
    },
  },
};
