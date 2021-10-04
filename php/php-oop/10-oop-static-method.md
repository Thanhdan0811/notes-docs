# PHP - Static Methods
* Gọi trực tiếp ko cần tạo instance.
* dùng static keyword.
* Để dùng static method ta sẽ dùng ::

>   class greeting {
>     public static function welcome() {
>       echo "Hello World!";
>     }
>   }
>   
>   // Call static method
>   greeting::welcome();

# PHP - More on Static Methods
* 1 class có thể có cả static và non-static methods. 1 static có thể được accessed trong cùng 1 class bằng cách dùng self keyword và "::" .

>   class greeting {
>     public static function welcome() {
>       echo "Hello World!";
>     }   
>     public function __construct() {
>       self::welcome();
>     }
>   }
>   
>   new greeting(); => Hello World!

* static method còn có thể được gọi từ methods trong các class khác. Ta phải dùng public

>   class greeting {
>     public static function welcome() {
>       echo "Hello World!";
>     }
>   }
>   
>   class SomeOtherClass {
>     public function message() {
>       greeting::welcome();
>     }
>   }

* Để gọi static method từ child class , use parent keyword bên trong child class. Ở đây, static có thể là public hoặc protected.

>   class domain {
>     protected static function getWebsiteName() {
>       return "W3Schools.com";
>     }
>   }
>   
>   class domainW3 extends domain {
>     public $websiteName;
>     public function __construct() {
>       $this->websiteName = parent::getWebsiteName();
>     }
>   }
>   
>   $domainW3 = new domainW3;
>   echo $domainW3 -> websiteName; => W3Schools.com



