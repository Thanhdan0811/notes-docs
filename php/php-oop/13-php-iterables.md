# PHP - What is an Iterable?.
* Là bất cứ value nào mà có thể dùng với foreach() loop.

# PHP - Using Iterables.
* The iterable keyword can be used as a data type of a function argument or as the return type of a function:

* Use an iterable function argument:

>   <?php
>       function printIterable(iterable $myIterable) {
>         foreach($myIterable as $item) {
>           echo $item;
>         }
>       }
>       $arr = ["a", "b", "c"];
>       printIterable($arr);
>   ?>

* Return an iterable:

>   function getIterable():iterable {
>     return ["a", "b", "c"];
>   }
>   
>   $myIterable = getIterable();
>   foreach($myIterable as $item) {
>     echo $item;
>   }

# PHP - Creating Iterables
* Array là iterables.
* Object implement the Iterator.

** 1 iterator chứa 1 list của items và method để loop qua nó. Các methods phải có là :

1. current() : Returns the element that the pointer is currently pointing to. It can be any data type

2. key() Returns the key associated with the current element in the list. It can only be an integer, float, boolean or string

3. next() Moves the pointer to the next element in the list

4. rewind() Moves the pointer to the first element in the list

5. valid() If the internal pointer is not pointing to any element (for example, if next() was called at the end of the list), this should return false. It returns true in any other case


>   // Create an Iterator
>   class MyIterator implements Iterator {
>     private $items = [];
>     private $pointer = 0;
>     public function __construct($items) {
>       // array_values() makes sure that the keys are numbers
>       $this->items = array_values($items);
>     }
>     public function current() {
>       return $this->items[$this->pointer];
>     }   
>     public function key() {
>       return $this->pointer;
>     }
>     public function next() {
>       $this->pointer++;
>     }
>     public function rewind() {
>       $this->pointer = 0;
>     }
>     public function valid() {
>       // count() indicates how many items are in the list
>       return $this->pointer < count($this->items);
>     }
>   }
>   
>   // A function that uses iterables
>   function printIterable(iterable $myIterable) {
>     foreach($myIterable as $item) {
>       echo $item;
>     }
>   }
>   
>   // Use the iterator as an iterable
>   $iterator = new MyIterator(["a", "b", "c"]);
>   printIterable($iterator);