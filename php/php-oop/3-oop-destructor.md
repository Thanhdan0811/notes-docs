# PHP - The __destruct Function
* 1 destructor function sẽ được gọi khi object bị destructed hoặc script stopped hay exist.
* Nếu ta tạo 1 hàm __destructor(), php sẽ tự động gọi nó tại cuối script.


>   class Fruit {
>     public $name;
>     public $color;
>     function __construct($name, $color) {
>       $this->name = $name;
>       $this->color = $color;
>     }
>     function __destruct() {
>       echo "The fruit is {$this->name} and the color is {$this->color}.";
>     }
>   }
>   
>   $apple = new Fruit("Apple", "red");