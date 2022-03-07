- function name ko là case-sensitve, bắt đàu bằng letter hoặc _
- Có parameter :

    function familyName($fname) {
        echo "$fname Refsnes.<br>";
    }

# PHP is a Loosely Typed Language
- trong php 7 , đã có cho khai báo type

    function addNumbers(int $a, int $b) {
      return $a + $b;
    }
    echo addNumbers(5, "5 days");
    // since strict is NOT enabled "5 days" is changed to int(5), and it will return 10

- Để khai báo strict ta viết như sau :

    <?php declare(strict_types=1); // strict requirement

    function addNumbers(int $a, int $b) {
      return $a + $b;
    }
    echo addNumbers(5, "5 days");
    // since strict is enabled and "5 days" is not an integer, an error will be thrown
    ?>

# PHP Default Argument Value

# PHP Functions - Returning values

# PHP Return Type Declarations
- php 7 cho phép định nghĩa type trả về;

    <?php declare(strict_types=1); // strict requirement
        function addNumbers(float $a, float $b) : float {
            return $a + $b;
        }
        echo addNumbers(1.2, 5.2);
    ?>
- Đảm bảo trả về đúng định dạng.

    <?php declare(strict_types=1); // strict requirement
       function addNumbers(float $a, float $b) : int {
            return (int)($a + $b);
        }
        echo addNumbers(1.2, 5.2);
    ?>


# Passing Arguments by Reference
- Trong php, arguments được passed by value, tức là sẽ copy value còn biến truyền vào sẽ ko s.
- Khi function argument được passed by reference , thay đổi arguments cũng là sẽ thay đổi variables được passed vào.
- Để chuyển function argument thành 1 reference , & operator sẽ được dùng.

    function add_five(&$value) {
        $value += 5;
    }

    $num = 2;
    add_five($num);
    echo $num; => 7

