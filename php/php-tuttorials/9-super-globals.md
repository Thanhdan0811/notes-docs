# PHP Global Variables - Superglobals
- các variables có thể được truy cập từ bất cứ đâu, được gọi là "superglobals".

    + $GLOBALS
    + $_SERVER
    + $_REQUEST
    + $_POST
    + $_GET
    + $_FILES
    + $_ENV
    + $_COOKIE
    + $_SESSION

# PHP $GLOBALS
- là super global variable, được dùng để truy cập mọi biến từ bất cứ đâu trong php script.
- PHP store tất cả global variables vào array được gọi là $GLOBALS[index], index là tên biến.

    $x = 75;
    $y = 25;
    
    function addition() {
        $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
    }
    
    addition();
    echo $z;

In the example above, since z is a variable present within the $GLOBALS array, it is also accessible from outside the function!


# PHP $_SERVER
- là super global variables, lưu giữ thông tin về headers, paths, script locations.

    echo $_SERVER['PHP_SELF']; => Returns the filename of the currently executing script
    
    echo $_SERVER['SERVER_NAME']; => Returns the name of the host server (such as www.w3schools.com)
    
    echo $_SERVER['HTTP_HOST']; => Returns the Host header from the current request
    
    echo $_SERVER['HTTP_REFERER']; => Returns the complete URL of the current page (not reliable because not all user-agents support it)

    
    echo $_SERVER['HTTP_USER_AGENT']; => thông tn browser
    
    echo $_SERVER['SCRIPT_NAME']; => Returns the path of the current script


# PHP $_REQUEST
- là super global variables, được dùng để thu thập data sau khi submitting 1 HTML form.
-
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>"> => trỏ đén file php này
        Name: <input type="text" name="fname">
        <input type="submit">
    </form>
-
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // collect value of input field
            $name = $_REQUEST['fname'];
            if (empty($name)) {
                echo "Name is empty";
            } else {
                echo $name;
            }
        }
    ?>

# PHP $_POST
- là super global variable, collect form data sau khi submiiting form HTML với method là post.

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // collect value of input field
            $name = $_POST['fname'];
            if (empty($name)) {
                echo "Name is empty";
            } else {
                echo $name;
            }
        }
    ?>

# PHP $_GET
- PHP $_GET is a PHP super global variable which is used to collect form data after submitting an HTML form with method="get".

- $_GET can also collect data sent in the URL.