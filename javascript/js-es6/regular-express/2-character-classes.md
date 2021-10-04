- 1 character class là 1 ký hiệu đặc biệt, nó sẽ match bất cứ symbol từ 1 certain set.
- Ta sẽ xem xét "digit" class : \d tượng trưng cho "bất cứ single digit".

    + let str = "+7(903)-123-45-67";
    + let regexp = /\d/;
    + alert( str.match(regexp) ); // 7

- không có g nên chỉ trả về đúng ký tự số đầu tiên.

    + let regexp = /\d/g;
    + str.match(regexp);
    + str.match(regexp).join(''); => 79031234567

- Đó là character class cho digit. Ngoài ra còn có các class khác :

    + \d : d là digit character từ 0 đến 9.
    + \s : s là space. bao gồm spaces, tabs \t, newlines \n và 1 vài character ít gặp khác như \v, \f, \r.
    + \w : w là word. là 1 "wordly" character. là letter của latin aplabet hoặc 1 digit hoặc 1 underscore "_". Non-letter không thuộc về \w. Ví dụ : \d\s\w có nghĩa là 1 "digit" theo sau bởi 1 "space character" theo sau là 1 từ như : 1 a.

- 1 regexp có thể chứa regular symbols và character classes.

    + let str = "Is there CSS4?";
    + let regexp = /CSS\d/
    + str.match(regexp); => CSS4

    + "I love HTML5!".match(/\s\w\w\w\w\d/)
    +        \s\w\w\w\w\d


# Inverse classes.
- Với mỗi character classes thì sẽ tồn tại 1 "inverse class" , là ký tự giống với class nhưng là uppercase.
- Inverse có nghĩa là nó sẽ matches all characters khác. Ví dụ :

    + \D : non-digit, bất cứ ký tự nào trừ \d ví dụ 1 letter.
    + \S : non-space, bất cứ ký tự nào trừ \s, ví dụ 1 letter.
    + W : non-wordly character : bất cứ trừ \w, ví dụ non-latin letter hay space.

    + let str = "+7(903)-123-45-67";
    + alert( str.replace(/\D/g, "") ); // 79031234567 => lấy tất cả ký tự không là số và loại bỏ nó.


# A dot is "any character".
- 1 "." là 1 character class đặc biệt, match bất cứ ký tự nào trừ newline.

    + "Z".match(/./); => Z

- Ví dụ khác :

    + let regexp = /CS.4/;
    + "CSS4".match(regexp); => CSS4
    + "CS-4".match(regexp); => CS-4
    + "CS 4".match(regexp); => CS 4 => space cũng là 1 character.

- NOTE : dot có nghĩa là bất cứ ký tự nào nhưng không có nghĩa là không có ký tự.

    + "CS4".match(/CS.4/) => null => vì không có match.

# Dot as literally any character with "s" flag.
- Về mặc định, dot sẽ không match newline character \n

    + "A\nB".match(/A.B/) => null

- Sẽ có trường hợp ta muốn thêm cả newline. Đây là lúc s flag làm việc.

    + "A\nB".match(/A.B/s) => A\nB

- NOTE : s flag không hỗ trợ IE. Thay vào đó ta có thể dùng [\s\S] để match "any character". space cũng là 1 ký tự quan trọng.

    + "A\nB".match(/A[\s\S]B/) => A\nB

__NOTE__ :
- s flag sẽ ko hỗ trợ với IE.
- Ta có 1 cách thay thế toàn diện như sau : [\s\S] để match bất cứ character nào 

=> alert( "A\nB".match(/A[\s\S]B/) ); // A\nB (match!)

- Và space cũng là character cần phải chú ý.
