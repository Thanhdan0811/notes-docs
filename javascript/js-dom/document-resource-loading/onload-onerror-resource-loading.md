- Browser cho phép track loading của external resouces như scripts, iframes, pictures....
- Có 2 event cho nó :

    + onload : successful load.
    + onerror : error xảy ra.

# Loading a script.
- Nếu ta muốn load 1 script ở bên thứ 3 và call function trong nó. ta có thể gọi : 

    + let script = document.createElement('script');
    + script.src = "my.js";
    + document.head.append(script);

- nhưng function sẽ được declare vào như thế nào ? ta cầ chờ nó load xong và gọi nó.

# script.onload.
- load event sẽ kích sau khi script được loaded và thực thi.

    + script.onload = function() {
    +   // the script creates a variable "_"
    +   alert( _.VERSION ); // shows library version
    + };

# script.onerror.
- error event sẽ theo dõi nếu script bị lỗi.

    + script.onerror = function() {
    +   alert("Error loading " + this.src); // Error loading https://example.com/404.js
    + };

- Ta không thể bắt các status HTTP như 404 hay  500 , ta chỉ biết nó fail.
__IMPORTANT__ : onload/onerror event sẽ chỉ theo dõi loading. nếu có lỗi trong quá trình xử lý hay thực thi thì các events này sẽ ko bắt. Tức là nếu load thành công cũng sẽ có thể có lỗi do xử lý. Để bắt script error ta có thể dùng window.onerror.

# Other resources.
- load và error events còn có thể hoạt động với các resources khác cụ thể là có src.

    + let img = document.createElement('img');
    + img.src = "https://js.cx/clipart/train.gif"; // (*)
    + 
    + img.onload = function() {
    +   alert(`Image loaded, size ${img.width}x${img.height}`);
    + };
    + 
    + img.onerror = function() {
    +   alert("Error occurred while loading image");
    + };

- 1 số chú ý :
    + Hầu hết các resources sẽ bắt đầu loading khi được thêm vào document. nhưng <img> là 1 ngoại lệ. Nó bắt đầu load khi nó nhận 1 src.
    + Với <iframe> , iframe.onload event kích khi iframe loading finished cho cả successful load và trường hợp error.

# Crossorigin policy.

__NOTE__ : có 1 luật là scripts từ 1 site sẽ không thể access nội dung của other site. Ví dụ script ở facebook không thể đọc user mail ở gmail.com
- Hay chính xác hơn : 1 origin (domain/port/protocol triplet) không thể access content từ chỗ khác.
- Luật này cũng áp dụng với resources từ other domains khác.
- Nếu ta dùng 1 script từ 1 domain khác và có error trong đó thì ta sẽ không thể get error details.
- Lúc này ta sẽ ko biết lỗi để sửa. 
- các resources khác cũng sẽ có luật này (CORS).

__Để cho phép cross-origin access, <script> tag sẽ cần có crossorigin attribute, và cộng thêm việc remote server phải cung cấp special headers__

- Có 3 cấp cho cross-origin access :

    + No crossorigin attribute : cấm access.
    + crossorigin="anonymous" : cho phép access nếu server response với header Access-Control-Allow-Origin với * hoặc origin của ta. Browsers sẽ không gửi authorization infomation và cookies đến remote server.
    + crossorigin="use-credentials" : cho phép access nếu server gửi lại header Access-Control-Allow-Origin với origin của ta và Access-Control-Allow-Credentials: true. Browsers sẽ gửi authorization infomation và cookies đến remote server.

- 