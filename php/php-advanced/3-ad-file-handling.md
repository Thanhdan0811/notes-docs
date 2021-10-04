# PHP Manipulating Files
# PHP readfile() Function.
* readfile() function đọc 1 file và write nó ra output buffer.

* Ta sẽ lấy ví dụ về file là webdictionary.txt có content như sau :

AJAX = Asynchronous JavaScript and XML
CSS = Cascading Style Sheets
HTML = Hyper Text Markup Language
PHP = PHP Hypertext Preprocessor
SQL = Structured Query Language
SVG = Scalable Vector Graphics
XML = EXtensible Markup Language

# PHP File Open/Read/Close.
* 1 method tốt hơn để open files đó là fopen() function, function này sẽ có nhiều options hơn readfile().

* parameter đầu tiên của fopen() là tên file, thứ 2 là để xác định mode của file nên mở.

>   <?php
>       $myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
>       echo fread($myfile,filesize("webdictionary.txt"));
>       fclose($myfile);
>   ?>

* File sẽ được open thành 1 trong các mode sau :

*.  r : mở file với read only, pointer bắt đầu ở beginning của file.
*.  w : mở file với write only, xóa nội dung file hoặc tạo file mới nếu ko tồn tại, pointer bắt đầu ở đầu file.
*.  a : mở file với write only, nội dung file vẫn giữ nguyên và pointer sẽ ở cuối file. tạo nếu file ko tồn tại.
*.  x : Tạo file mới cho write only, trả về false và error nếu file đã tồn tại.
*.  r+ : mở file cho việc read/write. pointer sẽ ở đầu file.
*.  w+ : mở file cho việc read/write. xóa nội dung của file hoặc tạo file mới nếu ko tồn tại, pointer ở đầu file.
*.  a+ :  mở file cho việc read/write, nội dung sẽ được giữ nguyên , pointer ở cuối file, tạo file mới nếu ko tồn tại.
*.  x+ : Tạo file mới cho việc read/write, trả về false và error nếu file tồn tại.

# PHP Read File - fread().
* fread(), đọc 1 file được mở.
* first parameter là tên file, second sẽ là xác định số byte tối đa để read.

>   fread($myfile,filesize("webdictionary.txt"));


# PHP Close File - fclose()
* fclose() được dùng để close file được open.
* fclose() sẽ yêu cầu tên của file cần đóng.

>   $myfile = fopen("webdictionary.txt", "r");
>   // some code to be executed....
>   fclose($myfile);

# PHP Read Single Line - fgets().
* được dùng để đọc 1 line trong file.

>   $myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
>   echo fgets($myfile); => AJAX = Asynchronous JavaScript and XML
>   fclose($myfile);

* sau khi gọi fgets() , pointer sẽ di chuyển đến hàng tiếp theo.

# PHP Check End-Of-File - feof().
* Kiểm tra xem đã ở "end-of-file" chưa.

Vd : in ra từng line trong file.
>   $myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
>   // Output one line until end-of-file
>   while(!feof($myfile)) {
>     echo fgets($myfile) . "<br>";
>   }
>   fclose($myfile);

# PHP Read Single Character - fgetc()
* được dùng để đọc từng ký tự trong file.
* Sau mỗi lần gọi thì pointer sẽ được di chuyển đến ký tự tiếp theo.

>   $myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
>   // Output one character until end-of-file
>   while(!feof($myfile)) {
>     echo fgetc($myfile);
>   }
>   fclose($myfile);

https://www.w3schools.com/php/php_ref_filesystem.asp

