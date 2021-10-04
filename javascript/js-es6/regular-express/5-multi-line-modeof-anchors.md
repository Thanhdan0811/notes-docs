- multiline mode được kích hoạt bởi cờ : m
- Nó sẽ chỉ tác động đến hoạt động của ^ và $.
- Với multiline mode nó ko chỉ match tại điểm bắt đầu và kết thúc của string mà còn bắt đầu / kết thúc của line.

# =========================  Searching tại line start ===============================
- Ví dụ text có nhiệu line, pattern /^\d/gm sẽ nhận 1 digit tại điểm bắt đàu của mỗi line.

> let str = `1st place: Winnie
>           2nd place: Piglet,
>           3rd place: Eeyore`;
> alert(str.match(/^\d/gm)); // 1,2,3

- Nếu ko có m thì sẽ chỉ có số đầu tiên sẽ match.
- Lưu ý : bắt đầu của line có thể hiểu là điểm break của line, có thể là \n.

# =========================  Searching tại line end ===============================
- dollar sign : $ sẽ tương tự.
- \d$ sẽ tìm digit tại điểm cuối của line.


> let str = `Winnie: 1
> Piglet: 2
> Eeyore: 3`;
> alert( str.match(/\d$/gm) ); // 1,2,3


# =========================  Searching với \n thay cho ^, $ ===============================
- Để tìm 1 new line , ngoài cách dùng ^, $ ta còn có thể dùng newline character \n.
- Ta lấy ví dụ : \d\n thay vì \d$

> let str = `Winnie: 1
> Piglet: 2
> Eeyore: 3`;
> alert( str.match(/\d\n/gm) ); // 1\n,2\n

- Ta thấy sẽ có 2 matches thay vì 3, đây là vì ko có newline ở sau số 3, 
- 1 sự khác biệt khác nữa là mỗi match ta nhận được sẽ có thêm ký tự newline \n, 
- không giống như ^, $ khi chỉ test điều kiện, \n lại là character nên nó sẽ trờ thành 1 phần của kết quả.

=> \n trong pattern được dùng khi ta cần newline character trong results, trong khi đó các anchors được dùng để tìm gì đó ở đầu hoặc cuối của 1 line.
