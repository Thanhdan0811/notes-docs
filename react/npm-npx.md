- npm : node package manager là công cụ quản lý các thư viện mà ta có khi cải đặt nodejs.
- npm sẽ có sẵn khi cài nodejs.
- npm bao gồm 3 thành phần : 
    + website : hiển thị 1 cách chi tiết nhất những thư viên được chia sẻ.
    + Command Line Interface (CLI) : Công cụ để quản lý lấy thư viện về.
    + Registry : Lưu trữ thư viện javascript và thông tin về thư viện đó.

- npx : npm package executor : cài đặt và chạy luôn package
- Cài react : 

    + npm uninstall -g create-react-app
    + npx create-react-app myfirstreactapp

- Ta sẽ uninstall ra trước và cái lại bằng npx
- Trong file packege.json :

    + name : là tên của app.
    + version : version hiện tại.
    + "private" : true : là 1 settting an toàn để tránh các tai nạn publishing app của ta như là public package lên npm ecosystem.
    + dependencies  : Chứa tất cả các Node module và phiên bản yêu cầu cho app.Thường sẽ có 6 dependencies.
    + Trong các dependencies có react-scripts cung cấp các development scripts để làm việc với react.
    + scripts  : định nghĩa các aliases mà ta có thể dùng để access  react-scripts commands 1 cách nhanh hơn.
    + Ví dụ : npm test sẽ là tahy thế của react-scripts test --env=jsdom 
    + eslintConfig : sẽ lo phần code linting : https://stackoverflow.com/questions/8503559/what-is-linting
    + browserslist : cung cấp thông tin về khả năng tương thích của app với các browser 
    + package-lock.json : file này chứa chính xác các dependency tree được installed trong node_modules/
    + Nó còn chứa thông tin lịch sử thay đổi của package.json 
    + public : là thư mục chứa assets sẽ được sử dụng trực tiếp mà ko cần thông qua xử lý của webpack.
    + public/index.html là entry point hay điểm khởi đầu của web app.
    + public/manifest.json : cấu hình cách mà web app sẽ hiển thị nếu nó được thêm vào android user home screen
    + Đọc thêm về manifest.json ở đây : https://web.dev/add-manifest/
    + src : thư mục chính của app, https://developers.google.com/web/fundamentals/primers/service-workers