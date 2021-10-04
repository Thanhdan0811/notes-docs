- quantifier sẽ khá là tricky.
- Ta sẽ cần phải hiểu cách mà search hoạt động để thực hiện các complex hơn so với /\d+/
- Ta sẽ xem xét các ví dụ sau :
- Ta có 1 text và cần thay thế tất cả các quotes "..." thành guillemet marks : <<>>

=>  "Hello world!" => <<Hello world!>>

- Đầu tiên ta cần xác định vị trí của quotes và sau đó thay thế nó.
- regular expression : /".+"/g => tuy nhìn thì sẽ hợp lý nhưng cùng xem nào :

>   let regexp = /".+"/g;
>   let str = 'a "witch" and her "broom" is one';
>   alert( str.match(regexp) ); // "witch" and her "broom"

=> Ta thấy nó sẽ ko hoạt động như dự định, lỗi này được gọi là : greediness is the cause of all evil (tham lam là nguồn gốc của mọi tội ác.)

# =========================== Greedy search ==================================
- Để tìm ra match, regular expression sẽ dùng các thuật toán sau :

    => Đối với từng vị trí trong string.
    + sẽ cố gắng match pattern tại vị trí đó.
    + Nếu ko có match, đi đến vị trí tiếp theo.

- Dù chưa rõ ràng, nhưng ta sẽ xem xét ví dụ ".+" như sau :

1. ký tự pattern đầu tiên là " , regexp sẽ tìm nó ở vị trí zero của string lúc này là "a" => ko match
- Sau đó đi đến vị trí tiếp theo, và cố gắng tìm ký tự pattern đầu tiên ở đó nhưng fail, sau đó tại vị trí thứ 3 (index là 2)
- ở index 2 ta có ký tự lúc này là ", lúc này match với ký tự đầu của pattern.
- Sau đó, engine sẽ cố gắng tìm 1 match cho phần còn lại của pattern. xem xét phần còn lại của substring có phù hợp với .+"
- ký tự tiếp theo trong pattern là . => nghĩa là bất cứ ký tự nào.
- nên ký tự tiếp theo trong substring là 'w' match
- Nhưng sau đó dot (.) sẽ tiếp tục lặp lại do special + trong pattern
- Lúc này câu hỏi là lặp lại cho đến khi nào.
- Vì tất cả ký tự đều match nên nó sẽ dừng ở cuối string. => "witch" and her "broom" is one
- engine sẽ kết thúc lặp .+
- Engine xem xét ký tự tiếp theo trong pattern là "
- Nhưng lúc này string đã kết thúc và ko còn character nào nữa.
- Engine lúc nãy sẽ hiểu là nó đã lặp quá nhiều và nó bắt đầu ktra ngc trở lại. (backtrack)
- Nói cách khác, nó sẽ rút ngắn phần match của quantifier xuống 1 character : "witch" and her "broom" is on
- Lúc này, engine sẽ giả sử là .+ đã end tại đây và cố gắng match với pattern còn lại . Nếu đúng thì dừng search, sai thì tiếp tục.
- Đến khi gặp : "witch" and her "broom"
- Match => dừng lại .

=> do đó kq sẽ là : "witch" and her "broom"
- Nếu có flag g, thì engine sẽ tiếp tục tìm từ vị trí nơi mà first match ends, vì sau đó chỉ còn là is one nên ko còn match.

=> Trong greedy mode (mặc định) 1 quantifiers characters sẽ lặp lại càng nhiều càng có thể.
- regexp sẽ add các characters match mà nó có thể, sau đó cắt ngắn từng character nếu phần còn lại của pattern ko match.
- Lúc này lazymode sẽ đến giúp


# =========================== Lazy mode ==================================
- Lazy mode sẽ ngc lại với greedy mode, nó có nghĩa là tối thiểu số lần lặp.
- Ta có thể kích hoạt lazy mode bằng cách thêm question mark '?' theo sau 1 quantifier => *? hoặc +? hoặc ?? cho '?'
- Thường thi question mark ? bản thân nó là 1 quantifier (zero hoặc one), nhưng khi thêm nó vào sau 1 quantifier khác kể cả chính nó.
- Thí sẽ có ý nghĩa là : nó sẽ switch matching mode từ greddy thành lazy.
- regexp : /".+?"/g sẽ hoạt động đúng dự kiến :

>   let regexp = /".+?"/g;
>   let str = 'a "witch" and her "broom" is one';
>   alert( str.match(regexp) ); // "witch", "broom"

- đầu tiền cũng sẽ là pattern đầu tiên đó là  '"' : đúng với ký tự đầu.
- Tiếp theo của pattern là dot(.), engine sẽ tìm match với pattern. lúc này là w
- Từ đây mọi cn sẽ khác, vì ta có lazy mode +? , nên engine sẽ ko cố gắng match ký tự này với dot(.)
- Mà nó sẽ stop và cố gắng match với phần pattern còn lại là '"' (quotes) : "."  
- nếu ký tự tiếp theo là " thì search sẽ end nhưng ký tự tiếp theo lại là "i"
- Nên sẽ tiếp tục search, tiếp tục repeat dot.
- cho đến khi gặp ký tự ", match và dừng.
- search tiếp theo sẽ tiếp tục tại ví trí tiếp theo.

__NOTE__ : lazly load sẽ chỉ đươc enable khi quatifier với ?

- Ví dụ :

>   alert( "123 456".match(/\d+ \d+?/) ); // 123 4
- đoán xem tại s ???


# =========================== Alternative approach ==================================
- Các cách tiếp cận khác mà ko cần tới lazy mode.

- Ta sẽ dùng : "[^"]+"

>   let regexp = /"[^"]+"/g;
>   let str = 'a "witch" and her "broom" is one';
>   alert( str.match(regexp) ); // "witch", "broom"

- "[^]"]+" : sẽ cho ta kết quả đúng , vì nó sẽ tìm " và theo sau nó là 1 hoặc nhiều quotes : [^"] và sau đó là " đóng.
- Dấu ^ ở đây có nghĩa là ngược lại.
- Chú ý là logic này sẽ ko thể thay thế lazy quantifier.
- Cần xem xét r dùng cho hợp lý.
- Ta sẽ xem xét trường hợp nó quantifier sai và logic này đúng.
- Giả sử ta muốn tìm link có dạng sau : <a href="..." class="doc"> với href bất kỳ.
- Ta sẽ dùng mẫu sau test trước :

  + /<a href=".*" class="doc">/g

> let str = '...<a href="link" class="doc">...';
> let regexp = /<a href=".*" class="doc">/g;
> // Works!
> alert( str.match(regexp) ); // <a href="link" class="doc">

- ở trên vẫn sẽ hoạt động bth. Ta hãy cùng xem vd khác :

> let str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
> let regexp = /<a href=".*" class="doc">/g;
> // Whoops! Two links in one match!
> alert( str.match(regexp) ); // <a href="link1" class="doc">... <a href="link2" class="doc">

- kết quả lúc này trả về sẽ là 1 chuỗi chứa 2 kết quả cần lấy ra. chưa đúng yêu cầu.
- Là do .* nhận quá nhiều ký tự và khi quay lại sẽ chỉ có 1 chuỗi.
- Giờ ta sẽ dùng lazy như sau :

> let str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
> let regexp = /<a href=".*?" class="doc">/g;
> // Works!
> alert( str.match(regexp) ); // <a href="link1" class="doc">, <a href="link2" class="doc">

- Lúc này thì trả về đúng, nhưng nếu str thay đổi 1 tý thì sẽ sai :

> let str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
> let regexp = /<a href=".*?" class="doc">/g;
> // Wrong match!
> alert( str.match(regexp) ); // <a href="link1" class="wrong">... <p style="" class="doc">

- Giờ thì nó fail.
- Đầu tiên regexp tìm được <a href="
- sau đó nó sẽ tìm .*? và check match cho " class="doc">
- Cuối cùng nó match ở cuối string và trả về.
- Do đó ta cần 1 pattern để tìm : <a href="...something..." class="doc"> mà ko gặp các lỗi trên.
- Đó là : href="[^"]*"

> let str1 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
> let str2 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
> let regexp = /<a href="[^"]*" class="doc">/g;
> // Works!
> alert( str1.match(regexp) ); // null, no matches, that's correct
> alert( str2.match(regexp) ); // <a href="link1" class="doc">, <a href="link2" class="doc">
