import {terser} from 'rollup-plugin-terser'

export default {
  input: './src/index.js',
  output: [
    {
      file: 'lib/pigeon.development.js',
      name: 'Pigeon',
      format: 'umd',
      interop: false,
    },
    {
      file: 'lib/pigeon.min.production.js',
      name: 'Pigeon',
      interop: false,
      plugins: [
        terser(),
      ],
      format: 'umd',
    },
  ]
}