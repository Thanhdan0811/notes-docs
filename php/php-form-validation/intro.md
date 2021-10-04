# Form Handling.

>   <?php
>   $validation_error = "";
>   $user_language = "";
>    
>   if ($_SERVER["REQUEST_METHOD"] === "POST") {
>   $user_language = $_POST["language"];
>     if ($user_language != "PHP") {
>       $validation_error = "* Your favorite language must be PHP!";
>     } 
>   }
>   ?>
>    
>   <form method="post" action="">
>   Your Favorite Programming Language: <input type="text" name="language" value="<?php echo $user_language;?>">
>   <p class="error"><?= $validation_error;?></p>
>   <input type="submit" value="Submit Language">
>   </form>

- $_SERVER["REQUEST_METHOD"] === "POST" : đảm bảo rằng sẽ xử lý code khi form được submit.


====================================================================================================
# Basic Data Sanitizing : làm sạch value.
- PHP có hàm trim() : xóa khoảng trắng 2 đầu.
- Nếu ta muốn hiển thị input trong HTMl riêng , thì ta phải cho value chạy qua hàm :
+ htmlspecialchars() : hàm sẽ chuyển HMTL elements thành HTML entities là các ký tự mô tả HTML elements nhưng không hiển thị dưới dạng HTML.
- https://developer.mozilla.org/en-US/docs/Glossary/Entity.
- Như vậy sẽ ko dính mã độc do sử dụng HTMl.
- Ví dụ :'

>   $data = "<a href=\"https://www.evil-spam.biz/html/\">Your account has been compromised! Click here to get technical >  support!!</a>";
>   echo htmlspecialchars($data);    
>   => // Prints: &lt;a href=&quot;https://www.evil-spam.biz/html/&quot;&gt;Your account has been compromised! Click here to get technical support!&lt;/a&gt; 

- Ví dụ khác :

>  <div>
>    You entered:
>  	<?= htmlspecialchars($_POST["html"]) ?> 
>  </div>  


====================================================================================================
# Basic Sanitization with filter_var()
- Syntax :

    => filter_var(mixed $value, int $filter = FILTER_DEFAULT, array|int $options = 0): mixed

- Hàm sẽ nhận vào 1 variable và truyền nó qua 1 bộ filter mà sẽ tạo ra kết quả phù hợp.
- Tham số đầu tiên sẽ là variable truyền vào.
- Tham số thứ 2 sẽ là ID , ID này là type của filter mà nó sẽ thực hiện. như : 

    + FILTER_SANITIZE_EMAIL : có tên là "email" , Nó sẽ remove đi tất cả ký tự ngoại trừ chữ, số và !#$%&'*+-=?^_`{|}~@.[]
    + Tham khảo thêm tại đây : https://www.php.net/manual/en/filter.filters.sanitize

- Hàm sẽ trả về hoặc là value của input đã được làm sạch hoặc sẽ trả về FALSE.
- VÍ dụ :

>   $bad_email = '<a href="www.evil-spam.biz">@gmail.com';
>   echo filter_var($bad_email, FILTER_SANITIZE_EMAIL);

# Basic Validation with filter_var().
- Ta có thể dùng hàm filter_var để validate input 
- https://www.php.net/manual/en/filter.filters.validate.php.
- Nhưng nó sẽ hoạt động khác 1 tý đó là : nếu value được xem là hợp lý thì filter sẽ trả về nó, còn nếu ko sẽ trả về FALSE.
- Ví dụ :

>    $bad_email = 'fake - at - prank dot com';
>    if (filter_var($bad_email, FILTER_VALIDATE_EMAIL)){
>      echo "Valid email!";
>    } else {
>      echo "Invalid email!";
>    } 
>    // Prints: Invalid email!

- FILTER_VALIDATE_EMAIL : gắt hơn so với bình thường, nên sẽ ko hợp lý khi có các ký tự ko phải là latin.
- Ví dụ :

>   if($_SERVER["REQUEST_METHOD"] === "POST") {
>     $user_url = $_POST["url"];
>     if(filter_var($user_url, FILTER_VALIDATE_URL)) {
>       $form_message = "Thank you for your submission.";
>     } else {
>       $form_message = "Please retry and submit your form again.";
>       $validation_error = "* This is an invalid URL.";
>     }
>   }

# Using Options with filter_var().
- Nhìn lại syntax :

=> filter_var(mixed $value, int $filter = FILTER_DEFAULT, array|int $options = 0): mixed

- Hàm sẽ có thêm 1 tham số thứ 3 được dùng để tinh chỉnh hoạt động của filter được đưa vào.
- Tham số này thường được gọi  là $options có dạng là nested asscociative array.

- Ví dụ : $options có thể giúp ta validate 1 interger trong 1 khoảng cho trước khi dùng với filter FILTER_VALIDATE_INT.
- Lúc này ta sẽ set $options thành 1 nested array chứa : "min_range" và "max_range"

>   function validateAdult ($age){
>     $options = ["options" => ["min_range" => 18, "max_range" => 124]];  
>     if (filter_var($age, FILTER_VALIDATE_INT, $options)) {
>       echo("You are ${age} years old.");
>     } else {
>       echo("That is not a valid age.");
>     }
>   }
>    
>   validateAdult(18); // Prints: You are 18 years old.
>   validateAdult(124); // Prints: You are 124 years old.
>   validateAdult(8); // Prints: That is not a valid age.
>   validateAdult(200); // Prints: That is not a valid age. 


- Xem thêm ở đây : https://www.php.net/manual/en/filter.filters.php.

- Ví dụ chính :

__+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++__


<?php
$message = "";
$month_error = "";
$day_error = "";
$year_error = "";
  
// Create your variables here:
$month_options = ["options" =>["min_range"=>1,"max_range" => 12]];
$day_options = ["options" =>["min_range"=>1,"max_range"=>31]];
$year_options = ["options" => ["min_range"=>1903 ,"max_range"=> 2021 ]];

// Define your function here:
function validateInput($type, &$err, $options_arr) {
  if(filter_var($_POST[$type],FILTER_VALIDATE_INT,$options_arr)) {
    return true;
  } else {
    $err = "* Invalid ${type}";
     return false;
  }
  
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Uncomment the code below:
$test_month = validateInput("month", $month_error, $month_options);
$test_day = validateInput("day", $day_error, $day_options);
$test_year = validateInput("year", $year_error, $year_options);    
if ($test_month && $test_day && $test_year){
    $message = "Your birthday is: {$_POST["month"]}/{$_POST["day"]}/{$_POST["year"]}";
}  
}

?>

<form method="post" action="">
	Enter your birthday:
	<br>
	Month: <input type="number" name="month" value="<?= $_POST["month"];?>">
	<span class="error"><?= $month_error;?>		</span>
  <br>
	Day: <input type="number" name="day" value="<?= $_POST["day"];?>">
  <span class="error"><?= $day_error;?>		</span>
	<br>  
	Year: <input type="number" name="year" value="<?= $_POST["year"];?>">  
	<span class="error"><?= $year_error;?>		</span>
	<br>
	<input type="submit" value="Submit">
</form>
    <p><?= $message;?></p>


__+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++__
