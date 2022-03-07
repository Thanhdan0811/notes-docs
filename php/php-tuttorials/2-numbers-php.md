# Các constants cho integers :
- PHP_INT_MAX : số integer lớn nhất.
- PHP_INT_MIN : ngc lại ở trên.
# INTEGER

- PHP_INT_SIZE : size của integer trong bytes.

## Check type of variables là integer.

- is_int() ;
- is_integer();
- is_long();

    $x = 5985;
    var_dump(is_int($x)); => bool(true)

    $x = 59.85;
    var_dump(is_int($x)); => bool(false)

# FLOATS : có dấu . hoặc exponential form.

- PHP_FLOAT_MAX : số lớn nhất có thể biểu diễn float.
- PHP_FLOAT_MIN : ngược lại ở trên số dương.
- -PHP_FLOAT_MAX : số âm nhỏ nhất.
- PHP_FLOAT_DIG : The number of decimal digits that can be rounded into a float and back without precision loss
- PHP_FLOAT_EPSILON : The smallest representable positive number x, so that x + 1.0 != 1.0

## check if stye of variable là float

- is_float()
- is_double()

    $x = 10.365;
    var_dump(is_float($x)); => bool(true)

# PHP Infinity 
- 1 số lớn hơn PHP_FLOAT_MAX được xem là infinite

## Check numeric is finite or not.

- is_finite();
- is_infinite();
- Tuy nhiên , var_dump() sẽ trả về type và value.

    $x = 1.9e411;
    var_dump($x); => float(INF)

# PHP NaN.
- NaN standard for not a Number.
- NaN được dùng cho phép toán ko thể thực hiện được.

## check if value not a numbet :
- is_nan();
- Tuy nhiên , var_dump() sẽ trả về type và value.

    $x = acos(8); => invalid value.
    var_dump($x); => float(NAN).

# PHP Numerical Strings.

- is_numeric() function được dùng để tìm liệu 1 biến có thể là số. return true if là number or numeric string. 

    $x = 5985;
    var_dump(is_numeric($x)); => bool(true)

    $x = "5985";
    var_dump(is_numeric($x)); => bool(true)

    $x = "59.85" + 100;
    var_dump(is_numeric($x)); => bool(true)

    $x = "Hello";
    var_dump(is_numeric($x)); => bool(false)

    $x = "5985helo";
    var_dump(is_numeric($x)); => bool(false)

# PHP Casting Strings and Floats to Integers
- (int), (integer), or intval() được dùng để chuyển value thành integer.

    // Cast float to int
    $x = 23465.768;
    $int_cast = (int)$x;
    echo $int_cast; => 23465

    echo "<br>";

    // Cast string to int
    $x = "23465.768";
    $int_cast = (int)$x;
    echo $int_cast; => 23465





