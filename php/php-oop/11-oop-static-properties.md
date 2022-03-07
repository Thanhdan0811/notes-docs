# PHP - Static Properties.
- Khá giống với static method.

>   class ClassName {
>     public static $staticProp = "W3Schools";
>   }
>   
>   class pi {
>     public static $value = 3.14159;
>   }
>   
>   // Get static property
>   echo pi::$value;

# PHP - More on Static Properties

>   class pi {
>     public static $value=3.14159;
>     public function staticValue() {
>       return self::$value;
>     }
>   }
>   
>   $pi = new pi();
>   echo $pi->staticValue();

* Call static from child class.


>   class pi {
>     public static $value=3.14159;
>   }
>   
>   class x extends pi {
>     public function xStatic() {
>       return parent::$value;
>     }
>   }
>   
>   // Get value of static property directly via child class
>   echo x::$value;
>   
>   // or get value of static property via xStatic() method
>   $x = new x();
>   echo $x->xStatic();

