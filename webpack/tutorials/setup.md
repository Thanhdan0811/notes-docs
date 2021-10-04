- npm install webpack webpack-cli --save-dev
- cần có 2 thư mục là dist và src, src là nơi code và dist là nơi chưa file cuối.
- khi cài đặt npm cần lưu ý : --save-dev là sẽ dùng cho dev nên sẽ ko đc bundle và --save sẽ lưu lại và có thể được bundle.
- Để chạy ta gõ lệnh : npx webpack 

# MODULES
* webpack sẽ không thay đổi code trong file ngoài trừ import và export, nên nếu muốn polyfill ta sẽ cần dùng đến loaders của webpack và sử dụng babel..

# USING A CONFIGURATION.
* Mặc định từ webpack version 4 thì sẽ ko cần tạo file config.
- Tạo file : webpack.config.js cùng cấp với package.json
- Code mẫu như sau :

>   const path = require("path");
>   
>   module.exports = {
>       entry : "./src/index.js",
>       output : {
>           filename : "main.js",
>           path : path.resolve(__dirname, "dist"),
>       },
>   }

- Để chạy : npx webpack --config webpack.config.js