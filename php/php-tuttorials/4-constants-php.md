- constants bắt đầu với letter hoặc _ (underscore);
- Không như variables, constants tự động sẽ truy cập từ global trong toàn bộ script.

# syntax : define(name, value, case-insensitive);
+ name: Specifies the name of the constant
+ value: Specifies the value of the constant
+ case-insensitive: Specifies whether the constant name should be case-insensitive. Default is false

    define("GREETING", "Welcome to W3Schools.com!");
    echo GREETING;

    define("GREETING", "Welcome to W3Schools.com!", true);
    echo greeting;  

# PHP Constant Arrays (PHP7)
- vd :
    define("cars", [
        "Alfa Romeo",
        "BMW",
        "Toyota"
    ]);
    echo cars[0];

# Constants are Global

    define("GREETING", "Welcome to W3Schools.com!");

    function myTest() {
    echo GREETING;
    }
    
    myTest();

