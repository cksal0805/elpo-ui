import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");
const extentions = ["js", "jsx", "ts", "tsx"];
const external = ["react", "react-dom", "styled-components"];

process.env.BABEL_ENV = "production";

export default {
  input: "packages/src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extentions }),
    babel({
      extentions,
      include: ['packages/src/**/*'],
      exclude: /node_modules/,
      babelHelpers: 'runtime',
    }),
    commonjs({ 
      include: /node_modules/
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    image(),
  ],
  external
}