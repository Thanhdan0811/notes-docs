# FIle Object
- 1 File object inherits từ Blob và được mở rộng với filesystem-related capabilities.
- Có 2 cách để làm :

    + new File(fileParts, filename, [options]);
    + fileParts : là 1 array của Blob/BufferSource/String values.
    + fileName : file name string;
    + options : 
        * lastModified : the timestamp (integer date) of last modification.

- Cách thứ 2 là nhận file từ input file hoặc drag'n'drop hoặc other browser interfaces.
- Vì File inherits từ Blob, File objects có cùng properties:
    + name : file name
    + lastModified : the timestamp of last modification.
- Ví dụ :

    + <input type="file" onchange="showFile(this)">
    + <script>
    + function showFile(input) {
    + let file = input.files[0];
    + alert(`File name: ${file.name}`); // e.g my.png
    + alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
    + }
    + </script>

- input.files là 1 array-like object.

# FileReader

- Là 1 object với mục đích reading data từ Blob (cũng có thể là file) objects.

    + let reader = new FileReader()// no arguments;

- Các method chính :

    + readAsArrayBuffer(blob) - read data trong binary format ArrayBuffer. Cho binary file, thực hiện các low-level binary operation. Với các high-level, như slicing, File kế thừa từ Blob nên ta có thể gọi trực tiếp mà không cần đọc.
    + readAsText(blob, [encoding]) - read data as a text string với encoding (mặc định là utf-8). Cho text file, ta mong muốn nhận 1 string.
    + readAsDataURL(blob) - read binary data và encode it như base64 data url. Ta sẽ dùng kiểu data này trong src cho img hay tag khác. Có 1 cách thay thế cho reading file như trong chapter Blob là : URL.createObjectURL(file).
    + abort() - cancel the operation.

- Khi reading procceed, sẽ có các events :

    + loadstart - loading started.
    + progress - xảy ra trong quá trình reading.
    + load - no errors, quá trình đọc hoàn thành.
    + abort - abort()được gọi.
    + error - có xảy ra error.
    + loadend - reading finished cho dù success hay failure.

- Sử dụng nhiều là load và error.

- Khi reading finished, ta có thể access result như sau :

    + reader.result : là result nếu successful
    + reader.error : là error if failed.

- Ví dụ :

    + <input type="file" onchange="readFile(this)">
    + <script>
    + function readFile(input) {
    +   let file = input.files[0];
    +   let reader = new FileReader();
    +   reader.readAsText(file);
    +   reader.onload = function() {
    +     console.log(reader.result);
    +   };
    +   reader.onerror = function() {
    +     console.log(reader.error);
    +   };
    + }
    + </script>

- NOTE : FileReader ngoài việc có thể đọc file, mà còn có thể là blobs.
