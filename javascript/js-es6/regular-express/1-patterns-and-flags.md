# Regular Expressions
- 1 regular expression hay regexp hoặc reg bao gồm 2 phần là pattern và optional flags.
- Syntax :

    + regexp = new RegExp("pattern", "flags");
    + regexp = /pattern/ ; không có flags.
    + regexp = /pattern/gmi; với flags là g,m,i.

- // hiểu là khởi tạo 1 regular expression.
- ở cả 2 cách , regexp đều là instance của built-in RegExp class.
- // thường được dùng khi đã biết chuỗi string và khác với new ở chỗ nó sẽ không cho chèn string vào 1 cách tự động như string template.

# Flags 
- flags sẽ tác động đến search.

    + i : search với case-insensitive , không phân biệt hoa thường.
    + g : search với tất cả matches, không có g thì sẽ chỉ trả về match đầu tiên.
    + m : multiline mode.
    + s : kích hoạt "dotall" mode, cho phép 1 dot(.) match với newline character \n. 
    + u : kích hoạt full Unicode hỗ trợ.
    + y : "sticky" mode: searching tại vị trí chính xác trong string.

# Searching : str.match
- regular expression được tích hợp với string methods.
- method : str.match(regexp) tìm tất cả matches của regexp trong str.
- Nó có 3 mode :

1. Nếu có thêm flag g, sẽ trả về 1 array của tất cả matches.
2. Nếu không có flags thì sẽ trả về cái match đầu tiên trong array và 1 số thuộc tính khác.
3. Nếu không có match, sẽ trả về null dù có g hay ko.

    + let str = "We will, we will rock you";
    + let result = str.match(/we/gi);
    + let result = str.match(/we/i);
    + let result = str.match(/HTML/);
    + let result = str.match(/HTML/) || []; nếu trả về null và muốn mặc định là array.

# Replacing: str.replace
- method str.replace(regexp, replacement) thay thế matches sử dụng regexp trong str với replacement, sẽ thay thế tất cả nếu có g còn không thì chỉ là cái đầu tiên.

    + "We will, we will".replace(/we/ig, "I"). => "I will, I will".

- Về replacement string, ta có thể dùng 1 số ký tự đặc biệt sau :

    + $& : chèn toàn bộ string.
    + $` : chèn 1 phần của string trước match.
    + $' : chèn 1 phẩn của string sau match.
    + $n : nếu n là số có 1 đến 2 số, nó sẽ chèn contents của n-th ngoặc đơn.
    + $<name> : chèn nội dung của () với name được cung cấp.
    + $$ : thêm vào $.

    + "I love HTML".replace(/HTML/, "$& and JavaScript") => I love HTML and JavaScript
    +  "I love HTML hello".replace(/HTML/, "and JavaScript $'")  => "I love and JavaScript  hello hello"

# Testing : regexp.test.
- regexp.test(str) tìm ít nhất 1 match nếu có , trả về true, ngược lại thì false.

    + let str = "I love JavaScript";
    + let regexp = /LOVE/i;
    + alert( regexp.test(str) ); // true


