- điểm bắt đầu để tạo dependency graph, webpack sẽ tìm ra các modules và libraries mà entry point phụ thuộc vào.
- Mặc định value sẽ là .src/index.js
- file webpack.config.js

> module.exports = {
>   entry : './path/to/my/entry/file.js'
> }

* Có nhiều cách để định nghĩa entry property trong webpack configuration.

# Single Entry Syntax.
- Cách dùng => entry : string | [string]
- Ví dụ ở trên là shorthand cho : 

>   module.exports = {
>       entry : {
>           main : './path/to/my/entry/file.js',
>       },
>   }

- Ta có thể sử dụng array các file path, tạo ra cái được gọi là "multi-main entry". Phù hợp với việc ghép nhiều file phụ thuộc lại và graph lại thành 1 chunk.

>   module.exports = {
>       entry : ['path-1', "path-2"],
>       output : {
>           filename : "bundle.js",
>       }
>   }

- Single syntax sẽ tốt cho việc quick setup nhưng lại không flexibility trong việc mở rộng.

# OBJECT SYNTAX
* entry => {<entryChunkName> string | [string]} | {},

>   module.exports = {
>       entry : {
>           app : "./src/app.js",
>           adminApp :  "./src/adminApp.js",
>       }
>   }

# ENTRYDESCRIPTION OBJECT.
- 1 object với entry point description , có các property sau :

* dependOn : entry points mà entry point hiện tại phụ thuộc vào. chúng phải được loaded trước khi entry point này được load.
* filename : specifies name của mỗi output file trên disk.
* import : modules được loaded dựa trên startup.(upon startup)
* library : xác định library option để bundle 1 library từ entry hiện tại.
* runtime : Tên của runtime chunk, khi được set, 1 new runtime chunk sẽ được tạo, có thể set false để ko cho tạo mới từ version 5.43.0.
* publicPath : xác định public URL address cho output files của entry này khi nó được tham chiếu trong browser.

VD : 

>   module.exports = {
>       entry : {
>           a2 : "dependingfile.js",
>           b2 : {
>               dependOn : "a2",
>               import : "./src/app.js",
>           } 
>       }
>   }

- runtime và dependOn không nên được dùng cùng nhau trong 1 single entry, ví dụ sau sẽ báo lỗi.

>   module.exports = {
>       entry : {
>           a2 : "./a",
>           b2 : {
>               runtime : "x2",
>               dependOn : "a2",
>               import : "./b2",
>           },
>       }
>   }

- Đảm bảo rằng runtime không point đến tên entry point có sẵn,  ví dụ sau sẽ báo lỗi :

>   module.exports = {
>       entry : {
>           a1 : "./a",
>           b1 : {
>               runtime : "a1",
>               import : "./b1",
>           },
>       },
>   }

- dependOn phải ko bị circular , ví dụ lỗi sau :

>   module.exports = {
>       entry : {
>           a3 : {
>               import : "./a",
>               dependOn : "b3",
>           },
>           b3 : {
>               import : "./b",
>               dependOn : "a3",
>           },
>       },
>   }


# Các trường hợp :
## Seperate App and Vendor Entries :
- webpack.config.js

module.exports = {
    entry : {
        main : "./src/app.js",
        vendor : "./src/vendor.js",
    },
}

- webpack.prod.js

module.exports = {
    output : {
        filename : "[name].[contenthash].bundle.js",
    },
}

- webpack.dev.js

module.exports = {
    output : {
        filename : "[name].bundle.js",
    },
}

=> Ở đây ta muốn webpack chia ra thành 2 entry point.
=> Với cách này ta có thể import libraries hoặc file ko đổi như boostrap, jquery, images,... vào trong vendor.js và chúng sẽ được bundle lại với nhau trong chunk riêng của nó. Content hash vẫn như cũ, cho phép browser cache chúng 1 cách riêng biệt từ đó giảm thời gian load.

## MULTI PAGE APPLICATION.
- webpack.config.js

>   module.exports = {
>       entry : {
>           pageOne : "./src/pageOne/index.js",
>           pageTwo : "./src/pageTwo/index.js",
>           pageThree : "./src/pageThree/index.js",
>       }
>   }

=> yêu cầu webpack chia 3 dependency graphs 
=> trong ứng dụng multi page application, server sẽ fetch 1 HTML mới. page sẽ reload document mới này và assests sẽ được download lại. 