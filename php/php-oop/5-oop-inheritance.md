# PHP - What is Inheritance?
* An inherited class is defined by using the extends keyword.

>   class Fruit {
>     public $name;
>     public $color;
>     public function __construct($name, $color) {
>       $this->name = $name;
>       $this->color = $color;
>     }
>     public function intro() {
>       echo "The fruit is {$this->name} and the color is {$this->color}.";
>     }
>   }
>   
>   // Strawberry is inherited from Fruit
>   class Strawberry extends Fruit {
>     public function message() {
>       echo "Am I a fruit or a berry? ";
>     }
>   }
>   $strawberry = new Strawberry("Strawberry", "red");
>   $strawberry->message(); => Am I a fruit or a berry?
>   $strawberry->intro(); => The fruit is Strawberry and the color is red.

# PHP - Inheritance and the Protected Access Modifier
* Ta sẽ xem xét lại protected access modifier.

>   class Fruit {
>     public $name;
>     public $color;
>     public function __construct($name, $color) {
>       $this->name = $name;
>       $this->color = $color;
>     }
>     protected function intro() {
>       echo "The fruit is {$this->name} and the color is {$this->color}.";
>     }
>   }
>   
>   class Strawberry extends Fruit {
>     public function message() {
>       echo "Am I a fruit or a berry? ";
>     }
>   }
>   
>   // Try to call all three methods from outside class
>   $strawberry = new Strawberry("Strawberry", "red");  // OK. __construct() is public
>   $strawberry->message(); // OK. message() is public
>   $strawberry->intro(); // ERROR. intro() is protected

* Ta thấy intro() khi được gọi ở ngoài sẽ báo lỗi.

>   class Strawberry extends Fruit {
>     public function message() {
>       echo "Am I a fruit or a berry? ";
>       // Call protected method from within derived class - OK
>       $this -> intro();
>     }
>   }
>   $strawberry = new Strawberry("Strawberry", "red"); // OK. __construct() is public
>   $strawberry->message(); // OK. message() is public and it calls intro() (which is protected) from within the derived

* Ta chỉ có thể gọi protected method bên trong classs kế thừa.

# PHP - Overriding Inherited Methods;
* Các method được kế thừa có thể bị ghi đè bằng cách viết lại method trùng tên.

>   class Fruit {
>     public $name;
>     public $color;
>     public function __construct($name, $color) {
>       $this->name = $name;
>       $this->color = $color;
>     }
>     public function intro() {
>       echo "The fruit is {$this->name} and the color is {$this->color}.";
>     }
>   }
>   
>   class Strawberry extends Fruit {
>     public $weight;
>     public function __construct($name, $color, $weight) {
>       $this->name = $name;
>       $this->color = $color;
>       $this->weight = $weight;
>     }
>     public function intro() {
>       echo "The fruit is {$this->name}, the color is {$this->color}, and the weight is {$this->weight} gram.";
>     }
>   }
>   
>   $strawberry = new Strawberry("Strawberry", "red", 50);
>   $strawberry->intro();

* __constructor() và intro() method bị ghi đè ở class kế thừa.

# PHP - The final Keyword
* final keyword có thể được dùng để chặn việc class bị kế thừa và ghi đè method.

>   final class Fruit {
>     // some code
>   }
>   
>   // will result in error
>   class Strawberry extends Fruit {
>     // some code
>   }

* Về method *

>   class Fruit {
>     final public function intro() {
>       // some code
>     }
>   }
>   
>   class Strawberry extends Fruit {
>     // will result in error
>     public function intro() {
>       // some code
>     }
>   }


--- Ví dụ 
class Dog extends Pet{
  function type() {
    return "dog";
  }
  function classify(){
    echo "This " . parent::type() . " is of type " . $this->type();
    // Prints: This pet is of type dog 
  }
}