# PHP Create File - fopen().
* Trong php, file được tạo và mở file sẽ dùng chung 1 hàm.

>   $myfile = fopen("testfile.txt", "w") => tạo file cùng directory nơi chứa php code.

# PHP File Permissions
* If you are having errors when trying to get this code to run, check that you have granted your PHP file access to write information to the hard drive.

# PHP Write to File - fwrite().
- function fwrite() được dùng để write nội dung vào file.
- first para sẽ là tên file, second sẽ là string được viết vào file.

>   <?php
>       $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
>       $txt = "John Doe\n";
>       fwrite($myfile, $txt);
>       $txt = "Jane Doe\n";
>       fwrite($myfile, $txt);
>       fclose($myfile);
>   ?>

file sẽ trông như thế này 

> John Doe
> Jane Doe

# PHP Overwriting.
* Now that "newfile.txt" contains some data we can show what happens when we open an existing file for writing. All the existing data will be ERASED and we start with an empty file.

>   $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
>   $txt = "Mickey Mouse\n";
>   fwrite($myfile, $txt);
>   $txt = "Minnie Mouse\n";
>   fwrite($myfile, $txt);
>   fclose($myfile);

* If we now open the "newfile.txt" file, both John and Jane have vanished, and only the data we just wrote is present:

Mickey Mouse
Minnie Mouse

https://www.w3schools.com/php/php_ref_filesystem.asp

