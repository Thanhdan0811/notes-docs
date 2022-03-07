# PHP - What are Interfaces?
* Interfaces cho phép qui định cái mà các methods trong 1 class nên thực thi.
* Interfaces khiến nó dẽ dàng hơn trong việc sử dụng các class khác nhau theo cùng 1 cách.
* Khi các class sử dụng chung 1 interface sẽ được gọi là "polymorphism".
* Interface được định nghĩa với interface keyword.
Vd :

>   interface InterfaceName {
>     public function someMethod1();
>     public function someMethod2($name, $color);
>     public function someMethod3() : string;
>   }

# PHP - Interfaces vs. Abstract Classes

* Sự Khác nhau của 2 cái :

1. Interface không thể có properties, trong khi abstract thì có thể.
2. Tất cả methods của interface phải là public , abstract thì public hoặc protected.
3. Tất cả method trong interface đều là abstract và chúng ko thể có code thực thi, và ko có abstract keyword.
4. Classes có thể thực thi 1 interface và kế thừa từ 1 class khác cùng lúc.

# PHP - Using Interfaces
* Để thực thi 1 interface class ta phải dùng keyword là interface.
* 1 class thực hiện 1 interface thì sẽ phải thực hiện mọi method của interface đó.
VD :

>   interface Animal {
>     public function makeSound();
>   }
>   
>   class Cat implements Animal {
>     public function makeSound() {
>       echo "Meow";
>     }
>   }
>   
>   $animal = new Cat();
>   $animal->makeSound(); => Meow

* Vd khác.

>   // Interface definition
>   interface Animal {
>     public function makeSound();
>   }
>   
>   // Class definitions
>   class Cat implements Animal {
>     public function makeSound() {
>       echo " Meow ";
>     }
>   }
>   
>   class Dog implements Animal {
>     public function makeSound() {
>       echo " Bark ";
>     }
>   }
>   
>   class Mouse implements Animal {
>     public function makeSound() {
>       echo " Squeak ";
>     }
>   }
>   
>   // Create a list of animals
>   $cat = new Cat();
>   $dog = new Dog();
>   $mouse = new Mouse();
>   $animals = array($cat, $dog, $mouse);
>   
>   // Tell the animals to make a sound
>   foreach($animals as $animal) {
>     $animal->makeSound();
>   }
>   => Meow Bark Squeak





