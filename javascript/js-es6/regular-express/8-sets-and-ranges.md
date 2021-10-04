- 1 số character hoặc character classes ở trong cặp dấu [...] có nghĩa là search bất cứ ký tự nào ở giữa chúng.

# =========================== Sets ==================================
- Ví dụ, [eao] có nghĩa là bất cứ ký tự nào là 'a', 'e', 'o'.
- Đây gọi là set, set có thể được dùng chung với regular character.
- Ví dụ :

>   // find [t or m], and then "op"
>   alert( "Mop top".match(/[tm]op/gi) ); // "Mop", "top"

- NOTE : tuy là nhiều ký tự bên trong [], nhưng sẽ chỉ có 1 ký tự match.

>   // find "V", then [o or i], then "la"
>   alert( "Voila".match(/V[oi]la/) ); // null, no matches


# =========================== Ranges ==================================
- [] còn có thể chứa range character.
- Ví dụ, [a-z] là ký tự trong range từ a đến z, [0-5] là từ 0 đến 5.
- Ví dụ : tìm 'x' theo sau là 2 số digit hoặc letter A đến F

>   alert( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); // xAF

- Ta còn có thể dùng character classes trong [...].
- Ví dụ : [\w-] sẽ tìm 1 từ hoặc -; [\s\d] sẽ tìm 1 space hoặc digit.

__NOTE__ : character classes là viết tắt của 1 số character sets như sau :
+ \d => [0-9]
+ \w => [a-zA-Z0-9_]
+ \s => [\t\n\v\f\r], ngoài ra còn có 1 vài Unicode space character ít gặp khác.


# =========================== Example: multi-language \w ==================================
- Vì \w là [a-zA-Z0-9_] nên nó sẽ ko tìm được chinese hay cyrillic letter...
- Ta có thể viết thêm các universal pattern để tìm các word characters ở bất cứ ngôn ngữ nào.
- Unicode properties : [\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]
- Ý nghĩa như sau :

    + Alphabetic (Alpha) : cho letters
    + Mark (M) : cho accents (điểm nhấn)
    + Decimal_Number (Nd) : cho digits.
    + Connector_Punctuation (Pc) : cho underscore _ và các character tương tự.
    + Join_Control (Join_C) : 2 code đặc biệt đó là 200c và 200d dùng trong ligatures trong Arabic.

- ví dụ :

>   let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;
>   let str = `Hi 你好 12`;
>   // finds all letters and digits:
>   alert( str.match(regexp) ); // H,i,你,好,1,2

- Unicode sẽ ko hỗ trợ với IE, nếu muốn hỗ trợ ta có thể sử dụng thư viện https://xregexp.com/.




# =========================== Excluding ranges ==================================
- Ngoài việc sử dụng range thông thường, thì còn có thể dùng dưới dạng là loại trừ range : 

    => [^...]

- chúng đc mô tả bới dấu ^, lúc này sẽ match tất cả trừ những điều kiện đc cấp trong [^].
- Ví dụ :

    + [^aeyo] : sẽ ko nhận các ký tự a,e,y,o
    + [^0-9]  : ko nhận số.
    + [^\s]   : ko nhận space.
    + alert( "alice15@gmail.com".match(/[^\d\sA-Z]/gi) ); // @ and



# =========================== Escaping in […] ==================================
- Nếu ta muốn ktra 1 ký tự special như \ thì ta sẽ dùng \\.
- Trong [] ta có thể dùng các ký tự đặc biệt mà ko cần phải dùng escaping.

    + Symbols . + () sẽ ko cấn escaping.
    + - (hyphen): sẽ ko được escaped ở đầu và cuối nơi mà nó ko định nghĩa 1 range.
    + ^ (caret) : chỉ được escaped ở begin có nghĩa là loại trừ.
    + ] : sẽ luôn được escaped 

- 1 dot (.) sẽ có nghĩa đơn giản là 1 dot, [.,] sẽ tìm . hoặc ,
- Ví dụ : [-().^+] sẽ tìm 1 trong các characters là -().^+ 

>   // No need to escape
>   let regexp = /[-().^+]/g;
>   alert( "1 + 2 - 3".match(regexp) ); // Matches +, -

- Nếu ta muốn escape, thì vẫn sẽ hoạt động bth.

>   // Escaped everything
>   let regexp = /[\-\(\)\.\^\+]/g;
>   alert( "1 + 2 - 3".match(regexp) ); // also works: +, -


# =========================== Ranges and flag “u” ==================================
- Nếu có surrogate pairs trong set thì flag u sẽ là yêu cầu bắt buộc để hoạt động chính xác.
- Ví dụ :

>   alert( '𝒳'.match(/[𝒳𝒴]/) ); // shows a strange character, like [?]
>   // (the search was performed incorrectly, half-character returned)

- ví dụ trên sẽ hoạt động sai, vì mặc định regular expressions sẽ ko biết về surrogate pairs.
- Regular expression sẽ nghĩ rằng [𝒳𝒴] ko phải là 2 ký tự mà là 4 ký tự.

    + nửa bên trái của 𝒳 là 1
    + nửa bên phải của 𝒳 là 2
    + nửa bên trái của 𝒴 là 3
    + nửa bên phải của 𝒴 là 4

- Kiểm chứng như sau :

>   for(let i=0; i<'𝒳𝒴'.length; i++) {
>     alert('𝒳𝒴'.charCodeAt(i)); // 55349, 56499, 55349, 56500
>   };

- Do đó ta cần thêm flag u để nó hoạt động đúng.

=>  alert( '𝒳'.match(/[𝒳𝒴]/u) ); // 𝒳

- Tương tự với [𝒳-𝒴] => [<55349><56499>-<55349><56500>] nên ta sẽ cần flag u.

=>  alert( '𝒴'.match(/[𝒳-𝒵]/u) ); // 𝒴

- Ví dụ tìm hh:mm hoặc hh-mm

>   let regexp = /\d\d[-:]\d\d/g;
>   alert( "Breakfast at 09:00. Dinner at 21-30".match(regexp) ); // 09:00, 21-30

