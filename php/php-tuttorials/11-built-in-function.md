# Variables built-in
- gettype() : nhận vào biến trả về string là data type của biến. => chỉ in ra type.
- var_dump() : nhận vào biến và in ra detail về biến.

gettype() phải dùng với echo, var_dump thì ko.

# String Functions
- strrev() : nhân vào 1 string và trả về string ngược.
- strtolower() : nhận vào 1 string và trả về string toàn lowercase.
- str_repeat(str, num) : nhần vào string và số lần lặp, trả về string lặp.

# SUBString
- substr_count() : trả về số lần(number) string xuất hiện, nhận vào 2 tham số string search through và string search for được gọi là needle.

>   echo substr_count($story, "like");

# Number Functions
- abs() : trả về trị tuyệt đối.
- round() : làm tròn số gần nhất.
- rand() : trả về random interger, khi ko truyền tham số vào thì sẽ trả về 1 số từ 0 đến số lớn nhất mà môi trường hiện tại cho phép, nếu truyền vào 2 tham số sẽ trả về số giữa 2 tham số đó.
- getrandmax() : trả về số lớn nhất mà môi trường cho phép 

>   $max = getrandmax(); 
>   echo $max;
>   echo rand(); // Prints a number between 0 and $max
>   echo rand(1, 2); // Prints either 1 or 2

- 