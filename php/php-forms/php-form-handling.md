- PHP superglobals $_GET và $_POST được dùng để thu thập form-data.

# PHP - A Simple HTML Form
- Ta có thể thay <?php ?> thành <?= ?> khi muốn dùng với echo.

>    <?php echo "<p>Let's insert some text into our HTML using PHP!</p>";?>
>    <?= "<p>Let's insert some text into our HTML using PHP!</p>";?>

- Superglobals là các biến global tự động có mặt ở tất cả scopes trong script.
- Bao gồm :

+   $GLOBALS
+   $_SERVER
+   $_GET
+   $_POST
+   $_FILES
+   $_COOKIE
+   $_SESSION
+   $_REQUEST
+   $_ENV

- Ta sẽ tập trung vào 3 trong số này :

* $_GET :  chứa 1 associative array của các variables được passed vào script hiện tại sử dụng query parameters trong URL.

* $_POST : chứa 1 associative array của các variables được passed vào script hiện tại sử dụng form submitted sử dụng "POST" method.

* $_REQUEST : chứa contents của $_GET, $_POST, và $_COOKIE.

# CODE VÍ DỤ.
- Ta có form sau :

>   <form method="get">
>       GET Form: <input type="text" name="get_name">
>       <input type="submit" value="Submit GET">
>   </form>
>   <form method="post">
>       POST Form: <input type="text" name="post_name">
>       <input type="submit" value="Submit POST">
>   </form>

- Khi người dùng điền vào input ở get và ấn submit thì biến global sẽ thay đổi như sau :

>   $_REQUEST: Array ( [get_name] => value-input )
>   $_GET: Array ( [get_name] => value-input )

- Khi gửi tiếp post sẽ như sau :

>   $_REQUEST: Array ( [get_name] => value-input [post_name] => value-input )
>   $_POST: Array ( [post_name] => value-input )

# GET Form Handling.
- Khi dùng method GET thì các form entries sẽ được passed như là parameters trong URL query string.
- Ví dụ : 1 request đến www.codecademy.com với URL parameters first có value là "ellen", last có value là "richards".

=> www.codecademy.com/?first=ellen&last=richards

- parameters name hay tên của các parameters đền từ thuộc tính name của input.
- Ví dụ :

>   <form method="get">
>   First name: <input type="text" name="first">
>   <br>
>   Last name: <input type="text" name="last">
>   <br>
>   <input type="submit" value="Submit Name">
>   </form>

- Khi form được submitted , form data sẽ tồn tại trong $_GET superglobal array. data cũng có thể được accessible thông qua $_REQUEST nếu ta ko quan tâm đén method được client sử dụng.

- nếu ta dùng print_r($_GET) thì ta sẽ có kết quả sau :

=> Array ( [first] => ellen [last] => richards ).

# POST Form Handling.
- set attribute method là "POST" ám chỉ submit form bằng post method.
- Khi dùng POST ta sẽ không thấy URL thay đổi.
- form data được gửi bằng cách sử dụng headers của HTTP request thay vì URL parameters.
- Để dùng data từ form submit thì mỗi input cần có unique name attribute.
- Và khi submit thì mỗi input data sẽ có trong $_POST và $_REQUEST superglobals.

# Using the "action" Attribute.
- thẻ form có attribute là "action", nếu ta ko định nghĩa nó thì mặc định nó sẽ gửi data ngược lại chính page đó.
- action attribute sẽ chỉ định 1 relative URL,  nên ta có thể dùng tên file php để trong cùng 1 directory.
