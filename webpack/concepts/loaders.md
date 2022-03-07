* Loaders là bộ chuyển đổi sẽ được appli vào source code của module. Cho phép ta pre-process files khi import hoặc "load" chúng. Do đó, loaders giống như các "tasks" trong các build tools.
* Loaders có thể transform files từ 1 ngôn ngữ khác như TypeScript thành js hoặc load inline images như data URLS. Còn cho phép ta thực hiện tác vụ như import CSS file trực tiếp từ JS modules.

# EX.
- Ta có thể dùng loaders để load CSS file hoặc convert TypeScript thành JS. Để làm điều này ta cần installing loaders mà ta cần.

=>      npm install --save-dev css-loader ts-loader

- Sau đó chỉ dẫn webpack dùng css-loader cho mỗi .css file và ts-loader cho .ts file.

- webpack.config.js

>   module.exports = {
>       modules : {
>           rules : [
>               {test : /\.css$/, use: "css-loader"},
>               {test : /\.ts$/, use : "ts-loader"}
>           ],
>       },
>   }

* Có 2 cách để dùng loaders trong application.

* Configuration (recommended) : Xác định chúng trong webpack.config.js file.
* Inline : Specify them explicity trong mỗi import statement.

# CONFIGURATION.
- module.rules cho phép xác định 1 vài loaders trong webpack configuration. Đây là cách ngắn gọn để display loaders, và giúp bảo trì code.
- Loaders được thực thi từ phải qua trái hoặc từ bottom to top. 
- VD :

>   module.exports = {
>     module: {
>       rules: [
>         {
>           test: /\.css$/,
>           use: [
>             // [style-loader](/loaders/style-loader)
>             { loader: 'style-loader' },
>             // [css-loader](/loaders/css-loader)
>             {
>               loader: 'css-loader',
>               options: {
>                 modules: true
>               }
>             },
>             // [sass-loader](/loaders/sass-loader)
>             { loader: 'sass-loader' }
>           ]
>         }
>       ]
>     }
>   };

=> Thực thi sẽ bắt đầu với sass-loader, tiếp tục với css-loader và cuối cùng là kết thúc tại style-loader.

# INLINE.
* Ta có thể định nghĩa loaders trong 1 import statement, hoặc bất cứ method import tương tự nào.
* Tách loaders ra với resources với =>  ! 
* Mỗi part sẽ được resolve tương ứng với current directory.

=> import Style from "style-loader!css-loader?modules!./styles.css;

- Điều này có thể ghi đè bất kỳ loaders, preLoaders, postLoaders khỏi configuration.
- Prefix với ! : sẽ disable tất cả normal loaders configuration.
=> import Styles from '!style-loader!css-loader?modules!./styles.css';
- Prefix với !! : sẽ disable tất cả loaders configurations (preLoaders, loaders, postLoaders);
=> import Styles from '!!style-loader!css-loader?modules!./styles.css';
- Prefix với -! : Sẽ disable tất cả trừ postLoaders.
=> import Styles from '-!style-loader!css-loader?modules!./styles.css';

# LOADERS FEATURES.

* Loaders có thể chained. 1 chain sẽ được thực thi theo thứ tự ngược. Loader đầu tiên sẽ pass kết quả của nó đến cái tiếp theo.
* Loaders có thể là asynchronous hoặc synchronous
* Loaders run với Nodejs và có thể làm mọi thứ nó có thể ở đây.
* Loaders có thể được configuration với options object.
* Normal module có thể export loader thông qua package.json với loader field.
* Plugins có thể give loader có thểm features.
* Loaders 