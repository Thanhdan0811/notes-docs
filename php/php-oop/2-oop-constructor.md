* Nếu ta tạo 1 __constructor() funciton thì PHP sẽ tự động gọi hàm khi ta tạo 1 object từ class.
* VD :
>    class Fruit {
>      public $name;
>      public $color;
>      function __construct($name, $color) {
>        $this->name = $name;
>        $this->color = $color;
>      }
>      function get_name() {
>        return $this->name;
>      }
>      function get_color() {
>        return $this->color;
>      }
>    }
>    
>    $apple = new Fruit("Apple", "red");
>    echo $apple->get_name(); => "Apple"
>    echo "<br>";
>    echo $apple->get_color(); => "red";