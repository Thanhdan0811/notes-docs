# Declaring a Namespace
* Namespace được định nghĩa tại nơi bắt đầu của 1 file, sử dụng namespace keyword.
__NOTE__ : 1 namespace phải luôn nằm ở đầu file.


>   <?php
>   namespace Html;
>   class Table {
>     public $title = "";
>     public $numRows = 0;
>     public function message() {
>       echo "<p>Table '{$this->title}' has {$this->numRows} rows.</p>";
>     }
>   }
>   $table = new Table();
>   $table->title = "My table";
>   $table->numRows = 5;
>   ?>
>   
>   <!DOCTYPE html>
>   <html>
>   <body>
>   
>   <?php
>   $table->message();
>   ?>
>   
>   </body>
>   </html>

* Nested Namespace :
- namespace Code\Html;

# Using Namespaces.
* Bất cứ code nào theo sau 1 namespace sẽ thực thi bên trong namespace đó.

>    $table = new Html\Table()
>    $row = new Html\Row();

# Namespace Alias
* Ta có thể viết tắt namespace , dùng use keyword.

>   use Html as H;
>   $table = new H\Table();

>   use Html\Table as T;
>   $table = new T();

