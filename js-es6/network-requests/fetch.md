# fetch 
- Có nhiều cách để send 1 network request và get infomation từ server.
- fetch() là 1 method hiện đại.

    + let promise = fetch(url, [options]);
    + url : URL để access.
    + options : optional parameters : method, headers etc.

- Không có options, đây đơn giản chỉ là GET.
- Browser sẽ start request ngay lập tức và trả về 1 promise.
- Nhận 1 response thường là 1 two-stage process.

##  First, the promise trả về từ fetch, resolves với 1 object của built-in Response class mỗi khi server responds với headers.

- Ở stage này, ta có thể check HTTP status, để xem nó có successful hay ko, check headers nhưng chưa có body.
- Promise sẽ reject nếu fetch không thể tạo HTTP-request ví dụ lỗi mạng. Các HTTP-status như 404, 500 sẽ không dẫn đến error.
- Ta có thể xem HTTP-status trong response properties :

    + status : HTTP status code.
    + ok - boolean, true nếu HTTP status code là từ 200-299.

- Ví dụ :

    + let response = await fetch(url);
    + if (response.ok) { // if HTTP-status is 200-299
    +   // get the response body (the method explained below)
    +   let json = await response.json();
    + } else {
    +   alert("HTTP-Error: " + response.status);
    + }


## Second, nhận response body, ta cần dùng các method call.
- Response cung cấp nhiều promise-based methods để access body ở các format khác nhau.

    + response.text() - đọc response và trả về text.
    + response.json() - parse response thành JSON
    + response.formData - trả về responses là FormData object.
    + response.blob() - trả về response là Blob (binary data with type)
    + response.arrayBuffer() - trả về response là ArrayBuffer (low-level)
    + Ngoài ra, response.body là 1 ReadableStream object, cho phép ta đọc body chunk-by-chunk.

- Ví dụ, lấy JSON-object là comment cuối cùng từ GitHub : 
    
    + let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    + let response = await fetch(url);
    + let commits = await response.json(); // read response body and parse as JSON
    + alert(commits[0].author.login);

- hoặc dùng pure promises syntax :

    + fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    + .then(response => response.json())
    + .then(commits => alert(commits[0].author.login));

- nhận text :

    + let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
    + let text = await response.text(); // read response body as text
    + alert(text.slice(0, 80) + '...');

__NOTE__ : ta chỉ có thể chọn 1 body-reading method.

## Response Headers.
- response headers hiện diện trong 1 Map-like headers object trong __response.headers__.
- Nó không hẳn là 1 Map, nó có các methods để lấy các headers riêng biệt bởi name hoặc lặp qua nó.

    + let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
    + // get one header
    + alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
    + // iterate over all headers
    + for (let [key, value] of response.headers) {
    +   alert(`${key} = ${value}`);
    + }

## Request headers
- Để set request headers trong fetch, ta có thê dùng headers option

    + let response = fetch(protectedUrl, {
    +   headers: {
    +     Authentication: 'secret'
    +   }
    + });

- Có 1 list các HTTP header bị cấm set : https://fetch.spec.whatwg.org/#forbidden-header-name : ví dụ : Accept-Charset, Accept-Encoding, Access-Control-Request-Headers...

## POST request.
- Để tạo POST request hoặc với method khác, ta cần dùng fetch options :
    
    + method : HTTP-method như POST.
    + body - là request body, 1 trong các :

        * 1 string như JSON-encoded. dùng nhiều.
        * FormData object, để submit data như là form/multipart.
        * Blob/BufferSource để gửi binary data.
        * URLSearchParams : để submit data ở dạng x-www-form-urlencoded encoding, ít dùng.

- Ví dụ :

    + let user = {
    +   name: 'John',
    +   surname: 'Smith'
    + };
    + let response = await fetch('/article/fetch/post/user', {
    +   method: 'POST',
    +   headers: {
    +     'Content-Type': 'application/json;charset=utf-8'
    +   },
    +   body: JSON.stringify(user)
    + });
    + let result = await response.json();
    + alert(result.message);

__NOTE__ : nếu request body là 1 string, thì Content-type header sẽ set là __text/plain;charset=UTF-8__ là mặc định. Nhưng do ta gửi JSON,ta dùng headers option để send application/json, phù hợp với Content-type cho JSON-encoded data.

## Sending an image.
- Ta có thể submit binary data với fetch sử dụng Blob hoặc BufferSource.
- Ví dụ gửi canvas :

    + <body style="margin:0">
    +   <canvas id="canvasElem" width="100" height="80" style="border:1px solid"></canvas>
    + 
    +   <input type="button" value="Submit" onclick="submit()">
    + 
    +   <script>
    +     canvasElem.onmousemove = function(e) {
    +       let ctx = canvasElem.getContext('2d');
    +       ctx.lineTo(e.clientX, e.clientY);
    +       ctx.stroke();
    +     };
    + 
    +     async function submit() {
    +       let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
    +       let response = await fetch('/article/fetch/post/image', {
    +         method: 'POST',
    +         body: blob
    +       });
    + 
    +       // the server responds with confirmation and the image size
    +       let result = await response.json();
    +       alert(result.message);
    +     }
    + 
    +   </script>
    + </body>

- Ở đây ta ko set Content-type header vì Blob object có built-in type (ở đây là image/png, được tạo bởi toBlob). Với Blob object thì type của nó sẽ trở thành value của Content-type.
- Ta có thể viết lại như sau :

    + function submit() {
    +   canvasElem.toBlob(function(blob) {
    +     fetch('/article/fetch/post/image', {
    +       method: 'POST',
    +       body: blob
    +     })
    +       .then(response => response.json())
    +       .then(result => alert(JSON.stringify(result, null, 2)))
    +   }, 'image/png');
    + }