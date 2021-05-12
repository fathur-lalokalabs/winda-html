let mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js');

// windmill custom js

mix.combine([
    'src/js/init-alpine.js',
    // 'src/js/charts-bars.js',
    // 'src/js/charts-lines.js',
    // 'src/js/charts-pie.js',
], 'public/js/admin.js');

// tailwindCSS

mix.postCss('src/css/app.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer'),
]);

// copy other assets

mix.copy('src/img', 'public/img');