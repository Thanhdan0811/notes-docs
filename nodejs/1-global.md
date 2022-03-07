- Trong nodejs ko có window global.
- Thay vào đó là globals variables.
- 1 Vài cái :
- __dirname : path của current directory.
- __filename : name của file.
- require : function để dùng modules
- module : thông tin về module(file)
- process : thông tin về môi trường máy đang chạy.

# MODULE
- Theo commonjs, mỗi file sẽ là 1 module
- modules : bao code lại.

- khi ta require 1 module ta có thể hiểu là nó sẽ bọc module trong 1 function,
- Nên nếu trong module có gọi 1 hàm thì khi require nó sẽ gọi hàm đó chạy.

# Built-in modules
- OS : chứa các thông tin về operating system.
- PATH
- FS
- HTTP : 

+   const http = require('http');
+   const server = http.createServer((req, res) => {
+       
+   })

- cần chạy hàm createServer để khởi tạo server.

# STREAMS 
- được dùng để đọc và ghi chuỗi liên tiếp.
- writeable
- readable
- duplex
- Transform
- Khi ta đọc file quá lớn thì việc lưu vào biến sẽ ko hợp lý, gây ảnh hưởng chương trình.
- Ta sẽ dùng stream để xử lý.
