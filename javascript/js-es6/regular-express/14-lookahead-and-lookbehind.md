- Đôi khi ta chỉ cần tìm các matches cho pattern mà pattern này được phụ thuộc bởi 1 pattern khác.
- Ta có special syntax cho nó được gọi là "lookhead" và "lookbehind", kết hợp được gọi là "lookaround"
- Ví dụ ta sẽ tìm giá trong "1 turkey costs 30€" theo sau là €


# ========================== Lookahead ==============================
- Syntax là : X(?=Y)
- điều này có nghĩa là tìm X nhưng sẽ chỉ match khi theo sau nó là Y
- X, Y có thể là bất cứ pattern nào.
- Ví dụ :

> let str = "1 turkey costs 30€";
> alert( str.match(/\d+(?=€)/) ); // 30, the number 1 is ignored, as it's not followed by €

- NOTE : Lookahead đơn giản chỉ là test, content của (?=...) sẽ ko được included trong result.
- Test phức tạp hơn : X(?=Y)(?=Z)

  + TÌm X,
  + Kiểm tra Y ngay sau X , skip nếu ko có.
  + Kiểm tra Z cũng ngay sau X , skip nếu ko có.
  + Nếu cả 2 test passed thì X match , ko passed thì tìm tiếp.

- Có nghĩa là ta tìm X theo sau là Y và Z cùng lúc.
- Điều này sẽ khả thi khi mà Y và Z ko triệt tiêu lẫn nhau.

> let str = "1 turkey costs 30€";
> alert( str.match(/\d+(?=\s)(?=.*30)/) ); // 1





# ========================== Negative lookahead ==============================
- Syntax : X(?!Y)
- Tìm X và theo sau nó ko phải là Y

> let str = "2 turkeys cost 60€";
> alert( str.match(/\d+\b(?!€)/g) ); // 2 (the price is not matche



# ========================== Lookbehind ==============================
- Syntax :
  + positive => (?<=Y)X : TÌm X chỉ khi có Y ở trước
  + negative => (?<!Y)X : TÌm X chỉ khi ko có Y ở trước.

- Ví dụ

> let str = "1 turkey costs $30";
> // the dollar sign is escaped \$
> alert( str.match(/(?<=\$)\d+/) ); // 30 (skipped the sole number)

- Ví dụ ngược lại :

> alert( str.match(/(?<!\$)\b\d+/g) ); // 2 (the price is not matched)
> let str = "2 turkeys cost $60";



# ========================== Capturing groups ==============================
- Thường thì content bên trong lookaround parentheses sẽ ko trở thành 1 phần của result.
- Ta có thể thêm vào bằng cách add thêm 1 cặp ()

> let str = "1 turkey costs 30€";
> let regexp = /\d+(?=(€|kr))/; // extra parentheses around €|kr
> alert( str.match(regexp) ); // 30, €

- Lookbehind

> let str = "1 turkey costs $30";
> let regexp = /(?<=(\$|£))\d+/;
> alert( str.match(regexp) ); // 30, $
