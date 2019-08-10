import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    plugins: [typescript({ typescript: require("typescript") }), terser()],
    output: {
      file: "umd/index.js",
      format: "umd",
      name: "mathLib",
      esModule: false
    }
  },
  {
    input: "src/index.ts",
    plugins: [typescript({ typescript: require("typescript") })],
    output: {
      file: "esm/index.js",
      format: "esm"
    }
  }
];