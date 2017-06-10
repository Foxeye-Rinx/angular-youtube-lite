import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import string from 'rollup-plugin-string';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
export default {
    entry: 'src/angular-youtube-lite.js',
    format: 'iife', 
    dest: 'docs/angular-youtube-lite.min.js',
    plugins: [
        eslint({
            exclude: [              
                '**/*.html'
            ]
        }),
        resolve(),
        string({
            include: '**/*.html'
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        uglify(),
  ]
};