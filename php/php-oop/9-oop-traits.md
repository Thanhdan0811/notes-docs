# PHP - What are Traits?.
* PHP chỉ hỗ trợ 1 interface đơn : 1 child class chỉ có thể kế thừa 1 single parent.
* Nếu 1 class càn kế thừa nhiều hành vi thì OOP traits sẽ giải quyết vấn đề này.
* Traits được dùng để định nghĩa các methods có thể được dùng trong nhiều classes. 
* Traits có thể có methods và abstract methods có thể được dùng trong nhiều class và method có thể có bất cứ access modifiers nào.
* Ta sẽ dùng keyword trait.

>   trait TraitName {
>     // some code...
>   }

* Để dùng trait trong 1 class , ta sẽ dùng use keyword.

>   class MyClass {
>     use TraitName;
>   }

VD : 

>   trait message1 {
>       public function msg1() {
>           echo "OOP is fun! ";
>       }
>   }
>   
>   class Welcome {
>     use message1;
>   }
>   
>   $obj = new Welcome();
>   $obj->msg1();

# PHP - Using Multiple Traits.

>   trait message1 {
>     public function msg1() {
>       echo "OOP is fun! ";
>     }
>   }
>   
>   trait message2 {
>     public function msg2() {
>       echo "OOP reduces code duplication!";
>     }
>   }
>   
>   class Welcome {
>     use message1;
>   }
>   
>   class Welcome2 {
>     use message1, message2;
>   }
>   
>   $obj = new Welcome();
>   $obj->msg1();
>   echo "<br>";
>   
>   $obj2 = new Welcome2();
>   $obj2->msg1();
>   $obj2->msg2();