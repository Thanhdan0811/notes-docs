# Loading CSS.
- Để import 1 file css từ js module, ta cần install style-loader và css-loader vào module configuration.
- npm install --save-dev style-loader css-loader

>   const path = require('path');
>   
>   module.exports = {
>       entry: './src/index.js',
>       output: {
>           filename: 'bundle.js',
>           path: path.resolve(__dirname, 'dist'),
>       },
>       module: {
>           rules: [
>               {
>               test: /\.css$/i,
>               use: ['style-loader', 'css-loader'],
>               },
>           ],
>       },
>   };


- Module loaders có thể được chain, mỗi loader sẽ thực hiện transformation. 1  chain sẽ được thực thi theo thứ tự đảo ngược.
- loader đầu sẽ pass kết quả của nó cho loader tiếp theo
- Ở ví dụ trên, loader sẽ theo thứ tự : "style-loader" trước và sau đó là "css-loader" 
- Sau đó trong file js ta sẽ import : import "./style.css"

- chạy lại webpack, nếu xem source ta sẽ ko thấy được style , webpack sẽ tự động thêm thẻ style khi load page.
- Các loader cho việc minimize css : postcss, sass, less 
+ https://webpack.js.org/loaders/postcss-loader/
+ https://webpack.js.org/loaders/sass-loader/
+ https://webpack.js.org/loaders/less-loader/


# Loading Images : 

>   rules : [
>               {
>                   test : /\.css$/i,
>                   use : ['style-loader', 'css-loader'],
>               },
>               {
>                   test : /\.(png|svg|jpg|jpeg|gif)$/i,
>                   type : 'asset/resource'
>               },
>           ],

- Khi ta dùng import MyImage from "./my-image.jpg", img sẽ được xử lý và add vào ouput folder và MyImage variable sẽ chứ đường dẫn url cuối cùng của image sau xử lý. tên file sẽ bị thay đổi tại output.

# Loading fonts.

>   {
>       test: /\.(png|svg|jpg|jpeg|gif)$/i,
>       type: 'asset/resource',
>   },
>   {
>       test: /\.(woff|woff2|eot|ttf|otf)$/i,
>       type: 'asset/resource',
>   },

# Loading data.
- Ta có thể load các data như JSON(hỗ trợ mặc định trong nodejs), CSV, TSV, XML.
- Ta cần cài : csv-loader, xml-loader : npm install --save-dev csv-loader xml-loader

>   {
>       test: /\.(csv|tsv)$/i,
>       use: ['csv-loader'],
>   },
>   {
>       test: /\.xml$/i,
>       use: ['xml-loader'],
>   },

__NOTE__ với JSON thì chỉ có export default mới không có cảnh báo.

// No warning
import data from './data.json';

// Warning shown, this is not allowed by the spec.
import { foo } from './data.json';
Customize parser of JSON 

# Customize parser of JSON modules.
* Có khả năng ta sẽ import các file như toml, yaml, json5 là các file dạng JSON module bằng các dùng custom parser thay vì xác định trong webpack.
- Ta sẽ cần install : npm install toml yamljs json5 --save-dev
- và configuration trong webpack :

const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

>   const toml = require('toml');
>   const yaml = require('yamljs');
>   const json5 = require('json5');

>    {
>      test: /\.toml$/i,
>      type: 'json',
>      parser: {
>        parse: toml.parse,
>      },
>    },
>    {
>      test: /\.yaml$/i,
>      type: 'json',
>      parser: {
>        parse: yaml.parse,
>      },
>    },
>    {
>      test: /\.json5$/i,
>      type: 'json',
>      parser: {
>        parse: json5.parse,
>      },
>    },


