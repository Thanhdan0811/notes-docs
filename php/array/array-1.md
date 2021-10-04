# Creating Arrays with array().
- Ta có thể construct ordered arrays với array();
=>  $my_array = array(0, 1, 2);
- php arrays có thể chứa elements của bất cứ data type nào.
- count() function sẽ trả về số phần tử của array.

>   $first_array = array("string", 2, "sting", 3, "str");
>   echo count($first_array);

# Creating Arrays with Short Syntax.

$number_array = [0,2,3,4];

# Printing Arrays
- Khi ta cố dùng echo để print array nó sẽ in ra "Array" thay vì details.
- Ta dùng print_r() : để in ra nội dung dể đọc.

print_r($number_array); 
=>  Array
>    (
>        [0] => 0
>        [1] => 1
>        [2] => 2
>   )

- Ta có thể dùng hàm implode để chuyền array thành string.

echo implode(", ", $number_array); => 0, 1, 2

# ACCESS ELEMENT

$num_var = 2;
$important_info = ["talking chicken", 181, "magnets?!", 99];
echo $important_info[$num_var]; // Prints: magnets?!

# Adding and Changing Elements.
- Để thêm element vào cuối array, ta có thể làm như sau :

$string_array[] = "new element"; => tên biến[] = new_value.

# Array methods : push và pop
- array_pop() : nhận vào 1 array và remove element cuối của array và trả về element đc remove.
- array_pop không chỉ sẽ element cuối là NULL mà còn xóa nó khỏi array và length giảm xuống 1.
- array_push() : nhần vào 1 arary và và các arguments sau sẽ lần lượt được thêm vào cuối array. return về length mới của array.
=> array_push($arr, element1, element2);
# Shifting and Unshifting
- array_shift() : như array_pop() nhưng là ở đầu element.
- array_unshift(); như array_push nhưng là ở đâu

# Nested Arrays.
- 

>   $nested_arr = [[2, 4], [3, 9], [4, 16]];
>   $first_el = $nested_arr[0][0];
>   echo $first_el; // Prints: 2



