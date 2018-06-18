var concat = require('concat');

const files = [
    './dist/ng6-element/runtime.js',
    './dist/ng6-element/polyfills.js',
    './dist/ng6-element/scripts.js',
    './dist/ng6-element/main.js'
]

concat(files, './dist/gif-engine.js')
console.info('Elements created successfully!')
