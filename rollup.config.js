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
    input: './src/index.ts',
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
    input: './src/components/icons/index.ts',
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
    input: 'dist/esm/src/types/index.d.ts',
    output: [{ file: './index.d.ts', format: 'esm' }],
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
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/__test__/*', '**/__mocks__/*', '**/stories/*'],
    }),
    copy({
      targets: [
        {
          src: './src/fonts',
          dest: './dist',
        },
      ],
    }),
    terser(),
    filesize(),
    visualizer(),
  ]
}
