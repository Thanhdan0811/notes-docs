# The Xor Operator

TRUE xor TRUE;   // Evaluates to: FALSE
 
FALSE xor TRUE;  // Evaluates to: TRUE
 
TRUE xor FALSE;  // Evaluates to: TRUE
 
FALSE xor FALSE; // Evaluates to: FALSE

- Ví dụ :

>   $is_wearing_glasses = TRUE;
>   $is_wearing_contacts = TRUE;
>    
>   if ($is_wearing_glasses xor $is_wearing_contacts){
>       echo "Your vision is corrected!";
>   } else {
>       echo "Your vision is impaired.";
>   }

# Alternate Syntax
- Ta có operators thay thế như sau : or, and
- giống như || và &&.
- chỉ khác là or, and sẽ có ưu tiên thấp hơn ||, &&.

# Multi-File Programs: include.
- dùng inclue để nối file .

>   // index.php
>   echo "Hello! ";
>   include "one.php";
>   include "two.php";
>   // Prints: Hello! How are you?

# foreach

>   $counting_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
>   foreach ($counting_array as $count) {
>     echo "The count is: " . $count . "\n";
>   }

>   $details_array = ["color" => "blue", "shape" => "square"];
>   foreach ($details_array as $detail) {
>     echo "The detail is: " . $detail . "\n";
>   }

=> The detail is: blue
=> The detail is: square

## access keys

>   foreach ($details_array as $attribute => $detail) {
>     echo "The " . $attribute . " is: " . $detail . "\n";
>   }

=>  The color is: blue
=>  The shape is: square

- https://www.php.net/manual/en/control-structures.foreach.php