# PHP - Access Modifiers
* Properties và methods đều có access modifiers để kiểm soát được nơi mà nó được access.
* Có 3 Access modifiers :

1. public : property và method có thể được accessed ở bất cứ đâu.
2. protected : property và method chỉ có thể access trong class và các classes kế thừa.
3. private : property hoặc method chỉ có thể access trong class.

* VD :

>   class Fruit {
>     public $name;
>     protected $color;
>     private $weight;
>   }
>   
>   $mango = new Fruit();
>   $mango->name = 'Mango'; // OK
>   $mango->color = 'Yellow'; // ERROR
>   $mango->weight = '300'; // ERROR

* VD về method :

>   class Fruit {
>     public $name;
>     public $color;
>     public $weight;
>     function set_name($n) {  // a public function (default)
>       $this->name = $n;
>     }
>     protected function set_color($n) { // a protected function
>       $this->color = $n;
>     }
>     private function set_weight($n) { // a private function
>       $this->weight = $n;
>     }
>   }
>   
>   $mango = new Fruit();
>   $mango->set_name('Mango'); // OK
>   $mango->set_color('Yellow'); // ERROR
>   $mango->set_weight('300'); // ERROR