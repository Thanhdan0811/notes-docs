* output configuration options sẽ yêu cầu webpack cách compiled files vào disk.
* Có thể có nhiều entry point nhưng chỉ có 1 output configuration được định nghĩa.

# USAGE.

>   module.exports = {
>       output : {
>           filename : "bundle.js",
>       },
>   }

- configurarion này sẽ output 1 single file là  bundle.js vào dist directory.

# MULTIPLE ENTRY POINTS.
* Nếu configuration có nhiều hơn 1 single "chunk" , ta nên dùng substitution để đảm bảo each file có 1 unique name.

>   module.exports = {
>       entry : {
>           app : "./src/app.js",
>           search : "./src/search.js",
>       },
>       output : {
>           filename : "[name].js",
>           path : __dirname + "/dist",
>       },
>   };

=> Ghi vào disk : ./dist/app.js và ./dist/search.js

# ADVANCED.
* VD phức tạp hơn sử dụng CDN và hashes cho assets.
- config.js

>   module.exports = {
>       //...
>       output : {
>           path : "./home/proj/cdn/assets/[fullhash]",
>           publicPath : "https://cdn.example.com/assests/[fullhash]",
>       },
>   },

- Trong trường hợp publicPath của output file không xác định được tại compile time. Nó sẽ được để trống và set tự động tại runtime thông qua __webpack_public_path__ variable trong entry point file :

__webpack_public_path__= myRuntimePublicPath;
