import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'
const packageJson = require('./package.json')

export default [
  {
    input: './components/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: rollupPlugins(),
  },
  {
    input: './components/icons/index.ts',
    output: [
      {
        file: 'dist/icons/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: rollupPlugins(),
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
]

function rollupPlugins() {
  return [
    url(),
    svgr(),
    json(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    copy({
      targets: [
        {
          src: './components/fonts',
          dest: './dist',
        },
        {
          src: './components/animations',
          dest: './dist',
        },
        {
          src: './components/svgs',
          dest: './dist',
        },
      ],
    }),
    terser(),
    filesize(),
    visualizer(),
  ]
}
