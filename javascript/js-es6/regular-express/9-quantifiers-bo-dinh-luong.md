- Ví dụ ta muốn lấy tất cả số trong dãy +7(903)-123-45-67
- só sẽ 1 chuối các số \d, để biết có bao nhiêu số ta sẽ thêm vào 1 quantifier là bộ định lượng.

# =========================== Quantify {n} ==================================
- quantifier đơn giản nhất là 1 số trong dấu {} : {n}
- 1 quantifier được thêm vào sau 1 character hoặc 1 character class hoặc [...] để xác định số lượng mà ta cần.

## The exact count {5}
- \d{5} diễn tả sẽ có chính xác là 5 con số <=> \d\d\d\d\d
- ví dụ :

>   alert( "I'm 12345 years old".match(/\d{5}/) ); //  "12345"

- Ta có thể thêm \b để loại trừ các số dài hơn : \b\d{5}\b

## the range , match 3,5 ký tự : {3,5}
- Để tìm số có 3 hoặc 5 chữ số ta có thể : \d{3,5}

>   alert( "I'm not 12, but 1234 years old".match(/\d{3,5}/) ); // "1234"

- Ta có thể bỏ đi số giới hạn trên để tìm từ 3 hoặc hơn.

>   alert( "I'm not 12, but 345678 years old".match(/\d{3,}/) ); // "345678"

- Ví dụ sdt :

>   let str = "+7(903)-123-45-67";
>   let numbers = str.match(/\d{1,}/g);
>   alert(numbers); // 7,903,123,45,67



# =========================== Shorthands ==================================
- Ta còn có shorthand cho các quantifier thường gặp.

## +
- nghĩa là 1 hoặc hơn <=> {1,}
- Ví dụ :

>   let str = "+7(903)-123-45-67";
>   alert( str.match(/\d+/g) ); // 7,903,123,45,67

## ?
- nghìa là zero hoặc 1 <=> {0,1}
- Ví dụ : ou?r có nghĩa là o sẽ theo sau là 1 ký tự u hoặc là ko có ký tự nào, sau đó là r.
- colou?r : sẽ có 2 kết quả là color hoặc colour.

>   let str = "Should I write color or colour?";
>   alert( str.match(/colou?r/g) ); // color, colour

## *
- có nghĩa là zero hoặc more <=> {0,} , ký tự sẽ có thể được lặp lại hoặc vắng mặt.
- \d* sẽ tìm các digit theo sau là number hoặc ko là gì.

>   alert( "100 10 1".match(/\d0*/g) ); // 100, 10, 1

- So sánh với + 

>   alert( "100 10 1".match(/\d0+/g) ); // 100, 10
>   // 1 not matched, as 0+ requires at least one zero



# =========================== More examples ==================================
- Regexp for decimal fractions (a number with a floating point): \d+\.\d+

>   alert( "0 1 12.345 7890".match(/\d+\.\d+/g) ); // 12.345

- Regexp for an “opening HTML-tag without attributes”, such as <span> or <p>.
    + /<[a-z]+>/i

>   alert( "<body> ... </body>".match(/<[a-z]+>/gi) ); // <body>

    + /<[a-z][a-z0-9]*>/i

>   alert( "<h1>Hi!</h1>".match(/<[a-z][a-z0-9]*>/gi) ); // <h1>

- Regexp “opening or closing HTML-tag without attributes”: /<\/?[a-z][a-z0-9]*>/i

>   alert( "<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi) ); // <h1>, </h1>

- Với regexp để càng chính xác thì sẽ càng viết phức tạp.

BT 

>   let regexp = /\.{3,}/g;
>   alert( "Hello!... How goes?.....".match(regexp) ); // ..., .....

