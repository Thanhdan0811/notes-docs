* Constants có thể được dùng để định nghĩa 1 constants data là class.
* 1 class contants được định nghĩa bên trong 1 class, vói keyword là  const.
* class contants là case-sensitive nhưng thướng sẽ dùng UPPERCASE.
* Ta có thể dùng :: để access constants bên ngoài class. Hoặc self keyword bên trong class.

VD :

> class Goodbye {
>   const LEAVING_MESSAGE = "Thank you for visiting W3Schools.com!";
> }
> 
> echo Goodbye::LEAVING_MESSAGE;

* Bên trong class

>   class Goodbye {
>     const LEAVING_MESSAGE = "Thank you for visiting W3Schools.com!";
>     public function byebye() {
>       echo self::LEAVING_MESSAGE;
>     }
>   }
>   
>   $goodbye = new Goodbye();
>   $goodbye->byebye();

