# Configure The "php.ini" File
* Đầu tiên ta cần đảm bảo PHP đc điều chỉnh để upfile.
* Trong php.ini , tìm php_uploads và set là On.

>   file_uploads = On

# Create The HTML Form.
* VD :

>   <!DOCTYPE html>
>   <html>
>   <body>
>    <form action="upload.php" method="post" enctype="multipart/form-data">
>    Select image to upload:
>    <input type="file" name="fileToUpload" id="fileToUpload">
>    <input type="submit" value="Upload Image" name="submit">
>    </form>
>   </body>
>   </html>

* Các luật của HTML form.
- Đảm bảo form sử dụng method="post".
- form cần có attribute : enctype="multipart/form-data", sẽ xác định loại content-type được dùng khi submitting form.


# Create The Upload File PHP Script

- Tạo file upload.php

>   $target_dir = "uploads/";
>   $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
>   $uploadOk = 1;
>   $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
>   // Check if image file is a actual image or fake image
>   if(isset($_POST["submit"])) {
>     $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
>     if($check !== false) {
>       echo "File is an image - " . $check["mime"] . ".";
>       $uploadOk = 1;
>     } else {
>       echo "File is not an image.";
>       $uploadOk = 0;
>     }
>   }


