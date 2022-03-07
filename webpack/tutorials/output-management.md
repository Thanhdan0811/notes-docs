>  module.exports = {
>   entry: './src/index.js',
>   entry: {
>     index: './src/index.js',
>     print: './src/print.js',
>   },
>    output: {
>     filename: 'bundle.js',
>     filename: '[name].bundle.js',
>      path: path.resolve(__dirname, 'dist'),
>    },
>  };

- Nếu ta build và chạy sẽ tạo ra 2 file trong dist là print.bundle.js và index.bundle.js
- Nhưng nếu ta thay đổi tên entry point thì nó sẽ nó sẽ đổi tên, nhưng trong file index.html sẽ ko có sự thay đổi tên src.

# Setting up HtmlWebpackPlugin
- install : npm install --save-dev html-webpack-plugin

>   const HtmlWebpackPlugin = require('html-webpack-plugin');

>  module.exports = {
>    entry: {
>      index: './src/index.js',
>      print: './src/print.js',
>    },
>   plugins: [
>     new HtmlWebpackPlugin({
>       title: 'Output Management',
>     }),
>   ],
>    output: {
>      filename: '[name].bundle.js',
>      path: path.resolve(__dirname, 'dist'),
>    },
>  };

=> HtmlWebpackPlugin về mặc định sẽ tạo ra file html riêng của nó là index.html, và nó sẽ thay thế file cũ nếu có trong dist

https://github.com/jantimon/html-webpack-plugin

# Cleaning up the /dist folder
- Sử dụng output.clear option để dọn các file ko dùng trong dist folder.

>   output: {
>       filename: '[name].bundle.js',
>       path: path.resolve(__dirname, 'dist'),
>       clean: true,
>   },

