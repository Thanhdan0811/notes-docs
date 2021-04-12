- Trong lập trình web, phần lớn thời gian ta sẽ gặp binary data khi làm việc với files (create, upload, download). trường hợp sử dụng cụ thể khác là xử lý image.
- Có rất nhiều class về binary nên có thể gây nhầm lẫn. ví dụ như :
    + ArrayBuffer
    + Unit8Array
    + DataView 
    + Blob
    + File....

- __binary object cơ bản là ArrayBuffer - 1 tham chiếu đến 1 vùng nhớ liền kề nhau có độ dài cố định__. Ta sẽ tạo như sau 
 
    +   let buffer = new ArrayBuffer(16);
    +   console.log(buffer.byteLength) => // 16

- phân bố trong bộ nhớ là 16 byte và điền vào giá trị là zeros.
- NOTE phân biệt các nhầm lẫn, ArrayBuffer không có điểm chung gì với Array :
    + Nó có fixed length, ta không thể tăng hay giảm nó.
    + Nó sẽ nhận chính xác lượng bộ nhớ trong memory.
    + Để access từng bytes, 1 object là "view" sẽ được đề cập, chứ ko phải là buffer[index].

- ArrayBuffer là 1 vùng memory.
- Để sử dụng hay thao tác với ArrayBuffer, ta cần dùng đến object "view".
- 1 view object sẽ không store bất cứ thứ gì trong nó. Nó giồng như là 1 cặp mắt kính dùng để giải thích về các bytes stored trong ArrayBuffer. Ví dụ :
    
    + Uint8Array : xem mỗi byte trong AB như là các số riêng biệt. Với range số từ 0 đến 255. Các value này được gọi là "8-bit unsigned integer".
    + Unit16Array: xem mỗi 2 byte là 1 integer, với range từ 0 đén 65535. Được gọi là "16-bit unsigned interger"
    + Uint32Array : xem mỗi 4 byte là 1 integer, với range từ 0 đến 4294967295. Được gọi là "32-bit unsigned integer"
    + FLoat64Array : xem mỗi 8 bytes là floating point number, với range tự xem dài quá.

- Do đó, AB với 16 bytes có thể là 16 số, 8 số, 4 sô hoặc là 2 số. AB là core của tất cả mọi thứ. Nhưng nếu ta muốn viết vào đó, lặp trong nó hay bất cứ operation nào thì ta phải dùng object view.

    + let buf = new ArrayBuffer(16); // tạo buffer có độ dài 16
    + let view = new Uint32Array(buffer); // xem buffer là chuỗi 32 bit integer.
    + Uint32Array.BYTES_PER_ELEMENT // 4 bytes / 1 integer.
    + view.length // 4, lưu 4 số integer.
    + view.byteLength // 16, là size của byte.
    + view[0] = 12345;
    + for(let num of view) {console.log(num)} => 12345, 0,0,0;

# TypedArray
- Thuật ngữ chung cho tất cả views object này là TypedArray. chúng chia sẽ với nhau cùng thiết lập methods và properties. Không có constructor nào là TypedArray. Đây chỉ là thuật ngữ diễn tả các view object.
- Typed Array sẽ behave như array thông thường : có index và iterable.
- 1 typed array constructor (Int8Array,...) sẽ behave khác nhau tùy thuộc vào argument types.
- Có 5 loại arguments khác nhau :

    __+ new TypedArray(buffer, [byteOffset], [length]);__
    __+ new TypedArray(object);__
    __+ new TypedArray(typedArray);__
    __+ new TypedArray(length);__
    __+ new TypedArray();__

- Nếu là ArrayBuffer argument, view sẽ được tạo thông qua nó. Option byteOffset xác định vị trí bắt đầu (mặc định là 0) và length (mặc định đến cuối buffer), view sẽ chỉ là 1 phần của buffer.
- Nếu là 1 Array hoặc array-like object argument, nó sẽ tạo 1 typed array với cùng length và copies content. Ta có thể dùng để gán pre-fill array với data.

    + let arr = new Unit8Array([0,1,2,3]);
    arr.length => 4 // cùng length
    arr[1] => 1 // ghi vào 4 byte các giá trị tương ứng.

- Nếu 1 TypedArray khác là argument, nó sẽ tạo 1 typed array với same length và copies values. Values sẽ được chuyển đổi thành new type trong quá trình process nếu cần.

    + let arr16 = new Uint16Array([1, 1000]);
    + let arr8 = new Uint8Array(ar16);
    + arr8[0] => 1
    + arr8[1] => 232 // copy 1000, nhưng 8 bit 

- Nếu là 1 length argument, tạo typed array để chứa số element tương ứng. byte length của nó sẽ là length * số byte trong 1 single item TypedArray.BYTES_PER_ELEMENT.

    + let arr = new Uint16Array(4); // tạo typed array với 4 integers
    + Uint16Array.BYTES_PER_ELEMENT => 2 bytes per integer.
    + arr.byteLength => 8 (size in bytes)

- Nếu không có arguments, tạo zero-length typed array. Ta có thể tạo 1 TypedArray 1 cách trực tiếp mà không cần ArrayBuffer, nhưng view sẽ ko thể tồn tại nếu không có ArrayBuffer nên sẽ được tạo 1 cách tự động trong 4 trường hợp trên trừ trường hợp đầu tiên do đã có.

- Để access ArrayBuffer, có các properties sau :
    + arr.buffer - tham chiếu đến ArrayBuffer.
    + arr.byteLength - length của ArrayBuffer.

- List các typed arrays: 

    + Uint8Array, Uint16Array, Uint32Array - cho integer number là 8,16,32 bits.
    + Uint8ClampedArray - 8 bit integers. "clamp"(kẹp) them on assignment
    + Int8Array, Int16Array, Int32Array - cho singed integer numbers (có thể số âm)
    + Float32Array, Float64Array - 