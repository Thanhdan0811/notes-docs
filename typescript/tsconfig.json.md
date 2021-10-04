* Đôi khi ta lại ko muốn typescript quản lí ta quá chặt , do đó ta sẽ cần đến file tsconfig.json.
* tsconfig.json sẽ luôn nằm ở root của project và ta có thể customize what rules nào mà ta muốn typescript compiler chấp hành.

>   {
>     "compilerOptions": {
>       "target": "es2017",
>       "module": "commonjs",
>       "strictNullChecks": true
>     },
>     "include": ["**/*.ts"]
>   }

* Giải thích :
- "compilerOptions" : là 1 nested object chứa các rules cho TypeScript compiler.
- "target" : với value "es2017" có nghĩa là project sẽ dùng EcmaScript chuẩn 2017 cho JS.
- "module" : project này sẽ dùng "commonjs (https://nodejs.org/docs/latest/api/modules.html)" syntax cho import và export.
- "include" : Xác định loại file mà compiler sẽ áp dụng rules, ["**/*.ts"] có nghĩa là compiler nên check mỗi file có .ts extension.


- Lệnh tsc mà ko có argument thì nó sẽ tự động tìm tsconfig.json , ta có thể chỉ định tên file để chỉ định compiler áp dụng vào file bất kỳ.

- Tham khảo thêm ở đây : https://www.typescriptlang.org/docs/handbook/compiler-options.html
