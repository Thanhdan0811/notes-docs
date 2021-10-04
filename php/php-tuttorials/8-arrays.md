# Create an Array in PHP
- function thường được dùng để tạo array là :
-    array();

- In php, có 3 loại arrays :

    + Indexed arrays - Arrays with a numeric index
    + Associative arrays - Arrays with named keys
    + Multidimensional arrays - Arrays containing one or more arrays

# Get The Length of an Array - The count() Function

-    $cars = array("Volvo", "BMW", "Toyota");
-    echo count($cars); => 3

#########################################################################
# PHP Indexed Arrays
- Có 2 cách để tạo :
- index gán tự động : 
    + $cars = array("Volvo", "BMW", "Toyota");
- The index can be assigned manually ;
    + $cars[0] = "Volvo";
    + $cars[1] = "BMW";
    + $cars[2] = "Toyota";

## Loop Through an Indexed Array

- Dùng for :

    $cars = array("Volvo", "BMW", "Toyota");
    $arrlength = count($cars);

    for($x = 0; $x < $arrlength; $x++) {
        echo $cars[$x];
        echo "<br>";
    }

#########################################################################
# PHP Associative Arrays
- là arrays that use named keys that you assign to them.
- Có 2 cách khai báo :

    + $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
- Hoặc
    + $age['Peter'] = "35";
    + $age['Ben'] = "37";
    + $age['Joe'] = "43";

## Loop Through an Associative Array
- Dùng foreach

    $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

    foreach($age as $x => $x_value) {
        echo "Key=" . $x . ", Value=" . $x_value;
        echo "<br>";
    }



#########################################################################
# PHP - Sort Functions For Arrays

## sort() - sort arrays in ascending order
-
    $cars = array("Volvo", "BMW", "Toyota");
    sort($cars); => BMW Toyota Volvo
-
    $numbers = array(4, 6, 2, 22, 11);
    sort($numbers); => 2 4 6 11 22


## rsort() - sort arrays in descending order
-
    $cars = array("Volvo", "BMW", "Toyota");
    rsort($cars); => Volvo Toyota BMW

- 
    $numbers = array(4, 6, 2, 22, 11);
    rsort($numbers); => 22 11 5 4 2

## asort() - sort associative arrays in ascending order, according to the value
- The following example sorts an associative array in ascending order, according to the value:

    $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
    asort($age); => array(3) { ["Peter"]=> string(2) "35" ["Ben"]=> string(2) "37" ["Joe"]=> string(2) "43" }

## ksort() - sort associative arrays in ascending order, according to the key
- The following example sorts an associative array in ascending order, according to the key:

    $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
    ksort($age); => array(3) { ["Ben"]=> string(2) "37" ["Joe"]=> string(2) "43" ["Peter"]=> string(2) "35" }


## arsort() - sort associative arrays in descending order, according to the value
- The following example sorts an associative array in descending order, according to the value:

    $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
    arsort($age);


## krsort() - sort associative arrays in descending order, according to the key
- The following example sorts an associative array in descending order, according to the key:

    $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
    krsort($age);


