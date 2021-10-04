# PHP Array Operators

## Union operator(+) : nối (union) array.

- $x = array("a" => "red", "b" => "green");  
- $y = array("c" => "blue", "d" => "yellow");  

- print_r($x + $y); // union of $x and $y

=> Array ( [a] => red [b] => green [c] => blue [d] => yellow )

## Equality(==) : Returns true if $x and $y have the same key/value pairs

$x = array("a" => "red", "b" => "green");  
$y = array("c" => "blue", "d" => "yellow");  

var_dump($x == $y);
=> bool(false)

## Identity(===) : Returns true if $x and $y have the same key/value pairs in the same order and of the same types

# PHP Conditional Assignment Operators

## Null coalescing (??) php7:

- Returns the value of $x.
- The value of $x is expr1 if expr1 exists, and is not NULL.
- If expr1 does not exist, or is NULL, the value of $x is expr2.

