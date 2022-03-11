import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import del from 'rollup-plugin-delete'
import babel from '@rollup/plugin-babel'
import copy from "rollup-plugin-copy"

const packageJson = require("./package.json")

const outputPlugins = [
  // terser()
]

export default [
  {
    input: './components/index.js',
    output: [
      {
        dir: './dist/cjs',
        // file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        plugins: outputPlugins
      },
      {
        dir: './dist/esm',
        // file: packageJson.module,
        format: "esm",
        sourcemap: true,
        plugins: outputPlugins
      },
    ],
    preserveModules: true,
    plugins: [
      del({ targets: 'dist/*' }),
      babel({ babelHelpers: 'runtime' }),
      resolve(),
      commonjs(),
      copy({
        targets: [
          {
            src: './components/fonts',
            dest: './dist'
          }
        ]
      }),
    ],
  }
];
