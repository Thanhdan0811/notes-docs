* Plugins là khung xương của webpack, bản thân webpack được xây dựng trên cùng 1 plugin system mà ta dùng trong webpack configuration.
* Tip : Khi sử dụng webpack-sources package trong plugins , hãy sử dụng require('webpack').sources thay vì là require('webpack-sources') để tránh xung đột phiên bản.

# ANATOMY.
- 1 webpack plugin là 1 javascript object có 1 method tên là apply. Method này sẽ được gọi bởi webpack compiler , cung cấp khả năng access toàn bộ compilation lifecycle.

- ConsoleLogOnBuildWebpackPlugin.js

>   const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

>   class ConsoleLogOnBuildWebpackPlugin {
>     apply(compiler) {
>       compiler.hooks.run.tap(pluginName, (compilation) => {
>         console.log('The webpack build process is starting!!!');
>       });
>     }
>   }
>   
>   module.exports = ConsoleLogOnBuildWebpackPlugin;


=> first parameter đầu tiên của map method của compiler hooks nên đặt tên theo camel và nên là constant để có thể dùng ở tất cả các hooks khác.

