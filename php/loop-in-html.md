# Why Use Shorthand?.
- Trong html thay vì đóng loop bằng {} , ta có thể dùng endfor; 
- Ví dụ :

>   <ul>
>   <?php
>       for ($i = 0; $i < 2; $i++):
>   ?>
>   <li>Duck</li>
>   <?php
>   endfor;
>   ?>
>   <li>Goose</li>
>   </ul>

Ví dụ 2 :

>   <h1>Only Shoes Shoe Shop</h1>
>   <?php
>       for ($i = 0; $i < 5; $i++):
>   ?>
>   <p>We sell shoes</p>
>   <?php
>   endfor;
>   ?>


# LOOP SHORTHAND.
- while => endwhile;
- foreach => endforeach;

>   <ul>
>   <?php
>   $i = 0;
>   while ($i < 2):
>   ?>
>   <li>Duck</li>
>   <?php
>   $i++;
>   endwhile;
>   ?>
>   <li>Goose</li>
>   </ul>

=======================================
>   <ul>
>   <?php
>   $array = [0, 1];
>   foreach ($array as $i):
>   ?>
>   <li>Duck</li>
>   <?php
>   endforeach;
>   ?>
>   <li>Goose</li>
>   </ul>
=====================================
>   <h1>Only Shoes Shoe Shop</h1>
>   <?php
>   $i = 0;
>   $repeats = [0, 1];
>   while ($i < 5):
>   ?>
>   <p>We sell shoes</p>
>     <?php
>     foreach ($repeats as $value) :
>     ?>
>     <p>(only shoes)</p>
>     <?php
>     endforeach;
>     ?>
>   <?php
>     $i++;
>     endwhile;
>   ?>
=====================

# Code Block Considerations

>   <?php
>   $array = ["Alice", "Bob", "Charlie"];
>   foreach($array as $name): ?>
>   <p><?=$name?></p>
>   <?php endforeach; ?>


