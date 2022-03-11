import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import del from 'rollup-plugin-delete'
import babel from '@rollup/plugin-babel'
import copy from "rollup-plugin-copy"
import { visualizer } from "rollup-plugin-visualizer";

const packageJson = require("./package.json")

export default [
  {
    input: [
      './components/index.js'
    ],
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
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      peerDepsExternal(),
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      copy({
        targets: [
          {
            src: './components/fonts',
            dest: './dist'
          }
        ]
      }),
      visualizer() // has to be the last one
    ],
  }
];
