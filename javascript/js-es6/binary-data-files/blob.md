- ArrayBuffer và views là 1 phần của ECMA standard, a part of Javascript.
- trong browser có thêm 1 high-level object mô tả trong File API là Blob.
- Blob bao gồm 1 optional string type(thường là MIME-type) cộng với blobParts - 1 chuỗi của các Blob objects, strings và BufferSource.

    + Blob = image/png(type) + (blobParts)blob1 | blob2 | ... | str | buffer;

- syntax :

    + new Blob(blobParts, options);
    + blobParts : là 1 array của Blob/BufferSource/String values.
    + options : 
        * type : Blob type, thường là MIME-type ví dụ image/png.
        * endings : nơi để chuyển đổi(transform) nơi kết thúc của line(end-of-line) để làm Blob tương ứng với OS newlines hiện tại (\r\n hoặc \n). mặc định là "transparent" không làm gì nhưng cũng có thể là "native" (transform).  
    
- Ví dụ :

    + // create Blob from a string
    + let blob = new Blob(["<html>…</html>"], {type: 'text/html'});
    + // please note: the first argument must be an array [...]

- ví dụ :

    + // create Blob from a typed array and strings
    + let hello = new Uint8Array([72, 101, 108, 108, 111]); // "Hello" in binary form
    + let blob = new Blob([hello, ' ', 'world'], {type: 'text/plain'});

- Ta có thế giải nén(extract) Blob với :

    + blob.slice([byteStart], [byteEnd], [contentType]);
    + byteStart : byte bắt đầu, default là 0.
    + byteEnd : byte cuối, default tới cuối.
    + contentByte : type của new blob, default sẽ giống như source.

- NOTE : blob là immutable, không thể thay đổi trực tiếp phải thông qua slice.

# Blob as URL.
- 1 Blob có thể được dùng như là URL cho <a>, <img> hoặc các tag khác.
- Nhờ có type, ta có thể download/upload Blob object và type tự nhiên sẽ trở thành Content-type trong network request.
- Ví dụ, khi click vào link, ta download và tự động tạo Blob với nội dung hello world là 1 file.

    + <!-- download attribute forces the browser to download instead of navigating -->
    + <a download="hello.txt" href='#' id="link">Download</a>
    + <script>
    + let blob = new Blob(["Hello, world!"], {type: 'text/plain'});
    + link.href = URL.createObjectURL(blob);
    + </script>

- Ta còn có thể tạo link dynamic 

    + let link = document.createElement('a');
    + link.download = 'hello.txt';
    +let blob = new Blob(['Hello, world!'], {type: 'text/plain'});
    +link.href = URL.createObjectURL(blob);
    +link.click();
    +URL.revokeObjectURL(link.href);

- URL.createObjectURL nhận 1 Blob và tạo 1 unique URL cho nó, vào form blob:<origin>/<uuid>;

    + blob:https://javascript.info/1e67e00e-860d-40a5-89ae-6ab0cbee6273;

- Cho mỗi URL được tạo bởi URL.createObjectURL, browser sẽ store 1 URL -> Blob map internally. Nên các URL sẽ ngắn nhưng cho phép access Blob.
- 1 generated URL (hay link with it) nó chỉ valid trong current document, khi nó open. Và nó cho phép tham chiếu đến Blob trong <img>, <a> và các object nhận URL.
- Có 1 side-effect, trong khi có mapping cho Blob, bản thân Blob lại chiếm memory. browser không thể free nó.
- mapping sẽ tự động cleared khi document unload, khi đó Blob sẽ freed.

- Do đó, ta tạo 1 URL, Blob sẽ giữ memory ở đó dù nó không cần đến nữa.

- URL.revokeObjectURL(URL) removes tham chiếu từ intenal mapping, từ đó cho phép BLob bị deleted và memory free.
- Xem xét lại 2 ví dụ trên.

# Blob to base64.

- 1 sự thay thế cho URL.createObjectURL là convert Blob thành base64-encoded string.
- Chuỗi mã hóa biểu diễn binary-data như 1 string ultra-safe "readable" characters với ASCII-codes từ 0 đến 64. Ta có thể dùng chuỗi mã hòa này trong "data-urls".
- data url có form dạng :

    + data:[<mediatype>][;base64],<data>

- ví dụ :

    + <img src="data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7">

- browser sẽ decode string và hiển thị img.
- Để chuyển đổi Blob thành base64 ta dùng built-in FileReader object. ví dụ :

    + let link = document.createElement('a');
    + link.download = 'hello.txt';
    + let blob = new Blob(['Hello, world!'], {type: 'text/plain'});
    + let reader = new FileReader();
    + reader.readAsDataURL(blob); // converts the blob to base64 and calls onload
    + reader.onload = function() {
    +   link.href = reader.result; // data url
    +   link.click();
    + };

- Cả 2 cách đều làm URL của Blob có thể dùng được. thường URL.createObjectURL(blob) dễ hơn.

- URL.createObjectURL(blob) : cần revoke chúng nếu quan tâm đến memory. access trực tiếp đến blob, không có "encoding/decoding".
- Blob to data url : không cần revoke, mất performance và memory với big Blob object cho encoding.

# Image to blob.
