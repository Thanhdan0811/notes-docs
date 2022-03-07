# Custom Validations
- Cách ta hay dùng để validate dữ liệu là sẽ so sánh với 1 regular expression pattern.
- https://www.php.net/manual/en/function.preg-match.php
- Ta có thể dùng hàm : preg_match()
- Hàm sẽ nhận vào 2 string : 1 pattern string để làm gốc và 1 subject string đê check
- hàm trả về 1 nếu trùng , 0 nếu ko trùng và FALSE nếu có lỗi.
- Ví dự : pattern sau có thể được dùng để test 10 số :

=> /^[(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4}$/

- ví dụ :

>   $pattern = '/^[(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4}$/';
>   preg_match($pattern, "(999)-555-2222"); // Returns: 1
>   preg_match($pattern, "555-2222"); // Returns: 0

- Ta có thể kiểm tra độ dài của value với hàm :
- strlen($value);

>   $name = "Aisle Nevertell";
>   $length = strlen($name);
>   if ($length > 2 && $length < 100){
>     echo "That seems like a reasonable name to me...";
>   } 

# Validating Against Back-end Data
- Ta sẽ cần phải check input và contetn từ database.

- Ví dụ


$users = ["coolBro123" => "password123!", "coderKid" => "pa55w0rd*", "dogWalker" => "ais1eofdog$"];
 
>   function isUsernameAvailable ($username){
>     global $users;
>     if (isset($users[$username])){
>       echo "That username is already taken.";
>     } else {
>       echo "${username} is available.";
>     }
>   }
>    
>   isUsernameAvailable("coolBro123"); // Prints: That username is already taken. 
>   isUsernameAvailable("aisleOfPHP"); // Prints: aisleOfPHP is available.


# Sanitizing for Back-end Storage
- Để lm data formatting , ta sẽ dùng hàm :
- preg_replace() function : sẽ nhận vào regex, replacement text và subject string. trả về bản copy.
- Ví dụ :

>   $one = "codeacademy";
>   $two = "CodeAcademy";
>   $three = "code academy";
>   $four = "Code Academy";
>    
>   $pattern = "/[cC]ode\s*[aA]cademy/";
>   $codecademy = "Codecademy";
>    
>   echo preg_replace($pattern, $codecademy, $one); // Prints: Codecademy
>   echo preg_replace($pattern, $codecademy, $two); // Prints: Codecademy
>   echo preg_replace($pattern, $codecademy, $three); // Prints: Codecademy 
>   echo preg_replace($pattern, $codecademy, $four); // Prints: Codecademy

# Rerouting
- Sau khi đăng nhập ta sẽ làm gì ?
- Ta có thể dùng hàm :
- header() : để thực hiện redirect 
- Ta sẽ truyền vào 1 string bắt đầu với : "Location: " 
- Theo sau sẽ là url :

=> "Location: https://www.best-puppy-pix.com/"

- __Sau đó ta sẽ dùng lệnh : exit__
- để đóng script hiện tại.

>   if (/* Is the submission data validated? */) {
>     header("Location: https://www.best-puppy-pix.com/");
>     exit;
>   }

