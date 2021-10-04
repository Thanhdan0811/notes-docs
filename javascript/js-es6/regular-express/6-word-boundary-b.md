- 1 word boundary \b là 1 test giống như ^ và $.
- khi mà regexp engine đi đến \b nó sẽ check xem vị trí của string có phải là 1 word boundary.
- Có 3 vị trí khác nhau được xem là 1 word boundary.
    + tại vị trí string start, nếu character đàu tiên của string là 1 word character \w.
    + Giữa 2 characters trong string, tại đó có 1 là word character \w còn cái còn lại thì ko.
    + tại vị trí string end, nếu character cuối của string là word character \w.

- Ví dụ :

> alert( "Hello, Java!".match(/\bJava\b/) ); // Java
> alert( "Hello, JavaScript!".match(/\bJava\b/) ); // null

- trong string Hello, Java! \b sẽ xuất hiện như sau :

    => \bHello\b, \bJava\b!

- Do đó , \bHello\b sẽ match với string. Nhưng sẽ ko match với \bhell\b
- Java!\b cũng sẽ ko match với string, do ! ko phải là word boundary \w


> alert( "Hello, Java!".match(/\bHello\b/) ); // Hello
> alert( "Hello, Java!".match(/\bJava\b/) );  // Java
> alert( "Hello, Java!".match(/\bHell\b/) );  // null (no match)
> alert( "Hello, Java!".match(/\bJava!\b/) ); // null (no match)

- Ta còn có thể dùng \b với digits.
- Ví dụ : \b\d\d\b sẽ tìm số có 2 số độc lập. Nó sẽ tìm số có 2 chữ số sẽ được bao quanh bởi các ký tụ khác với \w

> alert( "1 23 456 78".match(/\b\d\d\b/g) ); // 23,78
> alert( "12,34,56".match(/\b\d\d\b/g) ); // 12,34,56

__NOTE__ : \w có nghĩa là các chữ cái latin a-z hoặc digit hoặc underscore. nên test sẽ ko hoạt động với các characters khác như cyrillic letters hoặc hieroglyphs.

- Ví dụ tìm thời gian trong string sau : Breakfast at 09:00 in the room 123:456.

=> alert( "Breakfast at 09:00 in the room 123:456.".match( /\b\d\d:\d\d\b/ ) ); // 09:00
