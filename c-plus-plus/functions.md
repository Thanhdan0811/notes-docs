- 1 void function có nghĩa là không có value trả về;

# Hàm có trả về :
type_tra_ve namefunction(type para);

type_tra_ve name_function(type para) {
    return type_value;
}

# scope :
- global và local hay function scope
 
# Multi-File Programs
- Trước khi program được compiles, nó sẽ links bất cứ file nào mà ta include thành 1 single execute file.
- Khi compile : c++ main.cpp file_1.cpp


# Getting header your self.
- Khi mà program trở nên lớn hơn, Việc định nghĩa nhiều hàm sẽ rất bất tiện.
- Ta có thể định nghĩa các hàm này trong header file, có đuôi mở rộng là .hpp hay .h
- Để thêm vào file ta sẽ dùng cú pháp sau : #include "my_function.hpp"
- Nó sẽ paste mọi thứ có trong my_function.hpp trong đó vào main file.
- Khi chạy : g++ main.cpp fns.cpp 
- file .h hay .hpp sẽ đưa định nghĩa function ở đầu main, fns.cpp sẽ ghép các nội dung của các function vào.

# How to Get Your Functions Inline
- inline function là 1 định nghĩa hàm, thường là trong 1 header file. 

+ inline 
+ void eat() {
+  
+   std::cout << "nom nom\n";
+  
+ }

- Sử dụng inline function sẽ khuyến khích compiler chèn function's body ở nơi mà function đc gọi.
- Sẽ giúp cải thiện tốc độ.
- Đôi khi ta sẽ nghe đến inline function là member function (function bên trong classes).
- Được định nghĩa và declare trong 1 single file trong header file vì body của nó rất ngắn.

+   // cookie_functions.hpp
+   
+   // eat() belongs to the Cookie class:
+   void Cookie::eat() {std::cout << "nom nom\n";} 

- Trong night.hpp

+    inline
+    std::string goodnight1(std::string thing1) {
+        return "Goodnight, " + thing1 + ".\n";
+    }

# default parameter

+ // Declaration
+ void intro(std::string name, std::string lang = "C++");
+  
+ // Definition
+ void intro(std::string name, std::string lang) {
+   std::cout << "Hi, my name is "
+             << name
+             << " and I'm learning "
+             << lang
+             << ".\n";
+ }

# Function Overload
- Nếu ta muốn 1 function có parameter có thể là int hoặc double.
- Ta sẽ sử dụng function overloading, 
- Ta có thể định nghĩa nhiều function có cùng 1 tên, Nhưng phải thỏa mãn ít nhất 1 trong các điều kiện sau:
    + Mỗi function sẽ có 1 type parameter khác nhau.
    + Mỗi function sẽ có số parameter khác nhau.

- Ví dụ :

+   void print_cat_ears(char let) {
+     std::cout << " " << let << "   " << let << " " << "\n";
+     std::cout << let << let << let << " " << let << let << let << "\n";
+   }
+    
+   void print_cat_ears(int num) {
+     std::cout << " " << num << "   " << num << " " << "\n";
+     std::cout << num << num << num << " " << num << num << num << "\n";
+   }

# Function Templates
- 1 template là 1 c++ tool cho phép programmer add type vào như là parameter.
- Thực chất std::string hay str::vector là các templates.

- Không giống như function thông thường, templates được được tạo hoàn toàn trong header file
- Template cho phép ta chọn type được thực thi lúc gọi hàm, type được chọn có thể được áp dụng cho type trả về, para type hoặc cả 2.


+   template <typename T>
+   void print_cat_ears(T item) {
+       std::cout << " " << item << "   " << item << " " << "\n";
+       std::cout << item << item << item << " " << item << item << item << "\n";
+   }

- Gọi hàm : print_cat_ears(2);
- Ta sẽ ko thể truyền std::vector vào vì std::cout sẽ ko nhận nó.

- Ví dụ với hàm trả về :

+   template <typename T>
+   T get_smallest(T num1, T num2) {
+      return num2 < num1? num2 : num1;
+   }

- Ta sẽ định nghĩa trong file .h hoặc .hpp
