- Sẽ ra sao nếu binary data thực chất là string. Ví dụ như ta nhận 1 file là textual data.
- build-in TextDecoder object cho phép đọc value thành JS string, cung cấp buffer và encoding (mã hóa).

    + let decoder = new TextDecoder([label],[options]);
    + label : là encoding hay loại mã hóa, utf-8 là mặc định, nhưng big5, windows-1251 and ......
    + options :     
        * fatal : boolean, nếu set true , ném ra các exception cho invalid characters, nếu ko (mặc định) sẽ được thay bằng ký tự "\\uFFFD"
        * ignoreBOM : boolean, nếu đúng bỏ qua BOM(1 optional byte-order Unicode mark), ít dùng.

- Và decode (giải mã) :

    + let str = decoder.decode([input], [options]);
    + input : BufferSource để decode.
    + options : 
        * stream : true cho decoding streams, khi decoder được gọi lặp lại với chunks of data gửi đến, trong trường hợp này 1 multi-byte ký tự có thể split giữa các chunks. option này nói TextDecoder nhớ "unfinished" characters và decode khi next chunk đến.

- Ví dụ :

    + let uint8Array = new Uint8Array([72,101, 108, 108, 111]);
    + console.log(new TextDecoder().decode(uint8Array)); // hello


    + let uint8Array = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);
    + // the string is in the middle
    + // create a new view over it, without copying anything
    + let binaryString = uint8Array.subarray(1, -1);
    + alert( new TextDecoder().decode(binaryString) ); // Hello


# TextEncoder: 
- thực hiện quá trình ngược lại - convert string thành bytes.
- syntax :

    + let encoder = new TextEncoder(); chỉ hỗ trợ utf-8, có 2 method
    + encode(str) ; trả về Uint8Array từ string 
    + encodeInto(str, destination) - encodes str thành destination sẽ phải là Uint8Array;

- Ví dụ :

    + let encoder = new TextEncoder();
    + let uint8Array = encoder.encode("Hello");
    + alert(uint8Array); // 72,101,108,108,111