- flasy 

+   Empty strings
+   null
+   an undefined or undeclared variable
+   an empty array
+   the number 0
+   the string "0"

>   if ("") {
>     echo "this will not print";
>   } elseif (null) {
>     echo "this will not print";
>   } elseif ([]) {
>     echo "this will not print";
>   } elseif (0) {
>     echo "this will not print";
>   } elseif ("0") {
>     echo "this will not print";
>   } else {
>     echo "Finally!"; => this is result
>   }

# User Input: readline().
- function readlint($str) : nhận vào 1 string sẽ promp tới user và chờ user nhập vào terminal và trả về text đó dưới dạng string. đọc single line từ terminal.
- Vid dụ :

>   echo "Hi, I'm Aisle Nevertell. What's your name?\n";
>   $name = readline(">> ");
>   echo "\nNice to meet you, $name";

