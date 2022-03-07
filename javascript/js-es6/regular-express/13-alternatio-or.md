- Alternation  là thuật ngữ trong regexp đó đơn giản là "OR".
- Nó được hiển thị là : |
- Ví dụ :

> let regexp = /html|php|css|java(script)?/gi;
> let str = "First HTML appeared, then CSS, then JavaScript";
> alert( str.match(regexp) ); // 'HTML', 'CSS', 'JavaScript'

- [] cũng có chức năng tương tự, nhưng [] sẽ chỉ cho phép characters hoặc characters classes.
- Alternation cho phép bất cứ expression nào.

  + gr(a|e)y means exactly the same as gr[ae]y.
  + gra|ey means gra or ey.


# ================================= Example: regexp for time ==========================
- 
