# PHP - What are Abstract Classes and Methods?.
* Abstract class và methods là khi parent có định nghĩa tên các method nhưng các class con sẽ định nghĩa cụ thể task cho method đó.
* Absract class là class có ít nhất 1 abstract method, và 1 abstract method là method được định nghĩa nhưng ko được triển khai trong code.
Vd :

>   abstract class ParentClass {
>     abstract public function someMethod1();
>     abstract public function someMethod2($name, $color);
>     abstract public function someMethod3() : string;
>   }

* Khi kế thừa từ 1 abstract class, method của class child phải định nghĩa cùng tên, cùng hoặc có access modifier lỏng lẻo hơn. Ví dụ abstract method là protected thì ở class con cũng phải là protected hoặc public, nhưng ko được là private.
* Ngoài ra, type và arguments phải giống parent, nhưng child có thể có thêm các parameters bổ sung.

VD :

>   // Parent class
>   abstract class Car {
>     public $name;
>     public function __construct($name) {
>       $this->name = $name;
>     }
>     abstract public function intro() : string;
>   }
>   
>   // Child classes
>   class Audi extends Car {
>     public function intro() : string {
>       return "Choose German quality! I'm an $this->name!";
>     }
>   }
>   
>   class Volvo extends Car {
>     public function intro() : string {
>       return "Proud to be Swedish! I'm a $this->name!";
>     }
>   }
>   
>   class Citroen extends Car {
>     public function intro() : string {
>       return "French extravagance! I'm a $this->name!";
>     }
>   }
>   
>   // Create objects from the child classes
>   $audi = new audi("Audi");
>   echo $audi->intro(); => Choose German quality! I'm an Audi!
>   echo "<br>";
>   
>   $volvo = new volvo("Volvo");
>   echo $volvo->intro(); => Proud to be Swedish! I'm a Volvo!
>   echo "<br>";
>   
>   $citroen = new citroen("Citroen");
>   echo $citroen->intro(); => French extravagance! I'm a Citroen!


* VD khác :

abstract class ParentClass {
  // Abstract method with an argument
  abstract protected function prefixName($name);
}

>   class ChildClass extends ParentClass {
>     // The child class may define optional arguments that are not in the parent's abstract method
>     public function prefixName($name, $separator = ".", $greet = "Dear") {
>       if ($name == "John Doe") {
>         $prefix = "Mr";
>       } elseif ($name == "Jane Doe") {
>         $prefix = "Mrs";
>       } else {
>         $prefix = "";
>       }
>       return "{$greet} {$prefix}{$separator} {$name}";
>     }
>   }
>   
>   $class = new ChildClass;
>   echo $class->prefixName("John Doe"); => Dear Mr. John Doe
>   echo "<br>";
>   echo $class->prefixName("Jane Doe"); => Dear Mrs. Jane Doe




