let mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js');

// admin js

mix.combine([
    'src/js/init-alpine.js',
    'src/js/init-bootstrap.js',
], 'public/js/admin.js');

// tailwindCSS

mix.postCss('src/css/app.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer'),
]);

// copy other assets

mix.copy('src/img', 'public/img');