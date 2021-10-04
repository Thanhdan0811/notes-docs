- Ta thấy rằng dấu \ được dùng để thể hiện 1 character classes ví dụ \d là digit.
- Ngoài ra còn có các special characters khác có ý nghĩa special với regexp.
- Đầy là các character đó : [ \ ^ $ . | ? * + ( )


# =========================== Escaping ==================================
- Nếu ta muốn tìm ký tự . , nhưng . lại có ý nghĩa đặc biệt trong regexp.
- Ta sẽ dùng \ :

>   alert( "Chapter 5.1".match(/\d\.\d/) ); // 5.1 (match!)
>   alert( "Chapter 511".match(/\d\.\d/) ); // null (looking for a real dot \.)
>   alert( "function g()".match(/g\(\)/) ); // "g()"
>   alert( "1\\2".match(/\\/) ); // '\'

- Vì () cũng là các ký tự đặc biệt.


# =========================== A slash ==================================
- slash : / không phải là 1 special character.
- nhưng trong javascript thì // sẽ là đóng mở regexp.

>   alert( "/".match(/\//) ); // '/'
>   alert( "/".match(new RegExp("/")) ); // finds / => sẽ ko cần dùng escaping.


# =========================== new RegExp ==================================
- Nếu ta tạo regular expression với new RegExp thì ta ko cần phải escaping /. Nhưng sẽ cần escaping những ký tự khác.
- Ví dụ :

>   let regexp = new RegExp("\d\.\d");
>   alert( "Chapter 5.1".match(regexp) ); // null
=> Tại sao lại null.

- Vì với regular string thì ký tự \ sẽ được xem là đặc biêt. ví dụ \n là xuống hàng, \u1234 là unicode.
- Còn với các \d, \z thì \ sẽ bị loại bỏ và chỉ còn ký tự thường

>   alert("\d\.\d"); // d.d

- Do đó ta có thể hiểu là new RegExp sẽ nhận vào string ko có dâu \
- Để fix nó thì ta cần phải sử dụng 2 ký tự \ để escaping \ 

>   let regStr = "\\d\\.\\d";
>   alert(regStr); // \d\.\d (correct now)
>   let regexp = new RegExp(regStr);
>   alert( "Chapter 5.1".match(regexp) ); // 5.1

