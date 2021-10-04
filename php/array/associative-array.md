- fundamental concept trong computer science - map .
- 1 map sẽ nối key với value.
- key là 1 string hoặc integer mà ta dùng để access value(bất cứ type nào).
- PHP array type cho phép ta gán key có nghĩa tới value, ta gọi data structure này là associative arrays.

- Associative keys là collections của các cặp key=>value.
- Ta dùng => operator để kết hơp(associative) với value.

>   $my_array = ["panda" => "very cute", "lizard" => "cute", "cockroach" => "not very cute"];

=> key "panda" sẽ trỏ đến "very cute".

- Với array() function .

>   $about_me = array(
>       "fullname" => "Aisle Nevertell",
>       "social" => 123456789
>   );

# Printing Associative Arrays

- cách nối thành string : echo implode(", ", $grades); => sẽ chỉ show ra value.

- Ta sẽ dùng print_r($arr);

# Accessing and Adding Elements
- ta có thể access element : []

>   $my_array = ["panda"=>"very cute", "lizard"=>"cute", "cockroach"=>"not very cute"];
>   echo $my_array["panda"];

- Để add element ta dùng = ;

>   $my_array["capybara"] = "cutest";
>   echo $my_array["capybara"]; // Prints: cutest

- Computer sẽ xem code giữa 2 dấu [] là 1 an expression , và sẽ được thực thi trước.Từ đây ta có thể dùng biến hay function.

>   favorites = ["favorite_food"=>"pizza", "favorite_place"=>"my dreams", "FAVORITE_CASE"=>"CAPS", "favorite_person"=>"myself"];
>    
>   echo  $favorites["favorite" . "_" . "food"]; 
>   // Prints: pizza
>    
>   $key =  "favorite_place";
>   echo  $favorites[$key];  
>   // Prints: my dreams
>    
>   echo $favorites[strtoupper("favorite_case")];
>   // Prints: CAPS

# Changing and Removing Elements
- Thay đổi và thêm là giống nhau :

>   $new_arr = ["first" => "I am first!", "second" => "I am second!"]; 
>   $new_arr["third"] = "I am third!";
>   echo $new_arr["third"]; // Prints: I am third!
>   $new_arr["third"] = "I am the *NEW* third!";
>   echo $new_arr["third"]; // Prints: I am the *NEW* third!

- Để an toàn ta cần cẩn thận không ghi đè cái cũ.
- Ta dùng hàm unset() để remove cặp key=> value. nếu key ko tồn tại thì sẽ ko có việc gì xảy ra.

>   $nums = ["one" => 1,"two"=> 2];
>   echo implode(", ", $nums); // Prints: 1, 2
>   unset($nums["one"]);
>   echo implode(", ", $nums); // Prints: 2

# Numerical Keys.
- associative array có thể dùng integers như là key.
- Với array bth thì việc đánh số là tự động. 
- Nhưng array bth vẫn có cấu trúc giống với associative arrays. 
- Ví dụ :

>   $ordered = [99, 1, 7, 8];
>   $ordered["special"] = "Cool!";
>   echo $ordered[3]; // Prints: 8
>   echo $ordered["special"]; // Prints: Cool!

- Khi ta thêm 1 element vào array mà ko xác định key thì PHP sẽ liên kết nó với "next" integer key tiếp theo. Nếu ko có integer key nào được dùng thì key sẽ được xem là 1 , nếu có thì sẽ là key lớn nhất đã được dùng. Điều này đúng với tất cả array.
- Ví dụ :

>   $num_array = [1000 => "one thousand", 100 => "one hundred", 600 => "six hundred"];
>   $num_array[] = "New Element in \$num_array";
>   echo $num_array[1001]; // Prints: New Element in $num_array
>    
>   $animals_array = ["panda"=>"very cute", "lizard"=>"cute", "cockroach"=>"not very cute"];
>   array_push($animals_array, "New Element in \$animals_array");
>   echo $animals_array[0]; // Prints: New Element in $animals_array

=> ta thấy sẽ tự động tìm key integer lớn nhất và add lên.

# Joining Arrays
- Để nối array với nhau ta dùng +. Sẽ trả về array mới với bất cứ unique key từ array 2 sẽ được nối vào array 1.
- Ví dự :

>   $my_array = ["panda" => "very cute", "lizard" => "cute", "cockroach" => "not very cute"];
>   $more_rankings = ["capybara" => "cutest", "lizard" => "not cute", "dog" => "max cuteness"];
>   $animal_rankings = $my_array + $more_rankings;

=> ở trên key "lizard" vẫn sẽ là "cute", vì không là duy nhất.

- union operator có thể khá tricky  :

>   $number_array = [8, 3, 7];
>   $string_array = ["first element", "second element", "third element"];
>   $union_array = $number_array + $string_array;

=> kết quả là : [8,3,7] => vì cả 2 array union đều có key là 0,1,2.

# Assign by Value or by Reference.
- Có 2 cách để assign 1 variable đến biến khác ;
+ Bằng Value : 2 biến chứa 2 value là copy của nhau và ko lq gì nhau.
+ Băng Reference : 2 biến cùng trỏ đến 1 bộ nhớ trong memory.

>   $favorites = ["food"=>"pizza", "person"=>"myself", "dog"=>"Tadpole"];
>   $copy = $favorites;
>   $alias =& $favorites;
>   $favorites["food"] = "NEW!";
>    
>   echo $favorites["food"]; // Prints: NEW! => bản gốc
>   echo $copy["food"]; // Prints: pizza => bản copy
>   echo $alias["food"]; // Prints: NEW! => bản reference hay alias

- Khai pass arr vào function ta cũng cần xác định truyền vào value hay là reference.

>   function changeColor ($arr) 
>   {
>     $arr["color"] = "red";    
>   }
>   $object = ["shape"=>"square", "size"=>"small", "color"=>"green"];
>   changeColor ($object);
>   echo $object["color"]; // Prints: green => không thay đổi ở bên ngoài.


- truyền vào reference :

>   function reallyChangeColor (&$arr) 
>   {
>     $arr["color"] = "red";    
>   }
>   $object = ["shape"=>"square", "size"=>"small", "color"=>"green"];
>   reallyChangeColor ($object);
>   echo $object["color"]; // Prints: red => có thay đổi bên ngoài.

= Chạy thử đoạn code sau và in ra .

$arr = ["hello", "there"]; 
$arr["young"] = "wizard"; 
$arr[] = ["you", "have"]; 
$arr[0] = "careful"; 
$arr[4] = "power"; 
$arr[3] = "terrifying"; 
$arr[] = "!";