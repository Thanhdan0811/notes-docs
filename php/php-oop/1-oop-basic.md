# Define class.
- EX :

>    class Fruit {
>            // Properties
>            public $name;
>            public $color;
>            // Methods
>            function set_name($name) {
>                $this->name = $name;
>            }
>            function get_name() {
>                return $this->name;
>            }
>    }

>    $apple = new Fruit();
>    $apple->set_name('Apple');
>    echo $apple->get_name();

# PHP - The $this Keyword
* $this keyword sẽ trỏ đến current object, và chỉ available bên trong methods.

>   class Fruit {
>       public $name;
>       function set_name($name) {
>           $this->name = $name;
>       }
>   }
>   $apple = new Fruit();

- Ta có thể thay đổi $name bằng 2 cách.

>   $apple->set_name("Apple");
>   $apple->name = "Apple";

# PHP - instanceof
* Ta có thể dùng instanceof để kiểm tra xem liệu 1 object có thuộc về 1 class cụ thể :

>   $apple = new Fruit();
>   var_dump($apple instanceof Fruit); => bool(true);


 


