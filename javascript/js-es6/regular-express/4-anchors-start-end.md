# Anchors: string start ^ and end $
- dấu ^ và $ có ý nghĩa đặc biệt trong regexp.
- chúng được gọi là anchors.
- __^__ sẽ match tại bắt đầu của string, và __$__ sẽ là cuối của string

- Ví dụ :

>   let str1 = "Mary had a little lamb";
>   alert( /^Mary/.test(str1) ); // true

=> ^Mary có nghĩa là bắt đầu của string và sau đố là chuỗi Mary.

>   let str1 = "it's fleece was white as snow";
>   alert( /snow$/.test(str1) ); // true

# Testing for a full match
- Kết hợp cả 2 anchor thường được dùng để test fully match với pattern.

>   let goodInput = "12:34";
>   let badInput = "12:345";
>   
>   let regexp = /^\d\d:\d\d$/;
>   alert( regexp.test(goodInput) ); // true
>   alert( regexp.test(badInput) ); // false


__NOTE__ : 2 cái này ko thể dùng với match

