# Pass-By-Reference with Const

+   int &sonny = songqiao;
+   int triple(int const i) {
+     return i * 3; 
+   }

- Hàm này có nghĩa là nếu ta thay đổi i bên trong hàm thì sẽ báo lỗi.
-

+   int triple(int const &i) {
+     return i * 3; 
+   }

- Cách khai báo trên sẽ đảm bảo là parameter sẽ ko thay đổi, và save memory ko phải tạo bản copy.

# Memory Address
- references (aliases) được khai báo bằng & khi declare.
- & còn mang 1 ý nghĩa khác : "address of" operator 
- & được dùng để lấy memory address hay location trong memory của 1 object.

- Khi ta ko dùng & trong declare variable thì nó có nghĩa là memory location. hay address operator.
- KHi ta dùng nó trong declare thì nó là reference.
- Ví dụ :

    + int porcupine_count = 3;
    + std::cout << &porcupine_count << "\n"; => 0x7ffd7caa5b54

# Pointers
- 1 pointer variable chỉ là 1 variable nhưng nó lưu memory address.
- reference là cơ chế mới trong c++ , pointer lại là kế thừa từ c.
- Pointers phải được declared trước khi chúng đc sử dụng.
- Cú pháp sẽ có thêm dấu *
- int* hay double* : pointer to int or double.

+   int* number;
+   double* decimal;
+   char* character;

- Ví dụ như sau :

    + int gum = 8;
    + int* ptr = &gum;

- Ví dụ khác :

+   int main() {
+     
+     int power = 9000;
+     
+     // Create pointer
+     int* ptr = &power;
+     
+     // Print ptr
+     std::cout << ptr << "\n";
+     
+   }

# Dereference
- Cách để lấy được value được trỏ đến bởi pointer.
- Ta sẽ dùng như sau :

    +   int blah = *ptr;

- Do đó * sẽ có 2 ý nghĩa :

    +   When * is used in a declaration, it is creating a pointer.
    +   When * is not used in a declaration, it is a dereference operator.

- Ví dụ :

+   #include <iostream>

+   int main() {
+     
+     int power = 9000;
+     
+     // Create pointer
+     int* ptr = &power;
+     
+     // Print ptr
+     std::cout << ptr << "\n";
+     
+     // Print *ptr
+     std::cout << *ptr << "\n"; => 9000
+     
+     
+   }

# Null Pointer
- Khi ta khởi tạo 1 pointer mà ko có value : int* ptr
- lúc này sẽ rất nguy hiểm và ptr sẽ trỏ đến 1 location nào đó.
- Ta phải gán value cho nó, trong trường hợp ta ko biết chính xác nên gán value gì ta sẽ gán cho nó :
- 1 null pointer
- nullptr là new keyword được giới thiệu trong c++ 11.
- Sẽ cung cấp 1 type safe pointer value.

    +  int* ptr = nullptr;

- Đối với các version cũ thì NULL sẽ đc dùng,

# void pointer

+   void print(void* ptr, char type) {
+       switch(type) {
+           case "i": cout << *((int*)ptr) << "\n"; break;
+           case "c": cout << *((char*)ptr) << "\n"; break;
+           case "f": cout << *((float*)ptr) << "\n"; break;
+       }
+   }
+   
+   print(&number, "i");

# pointer and array 
+ int num[5] = {2,3,4,6,7};
- num sẽ chứa địa chỉ của value đầu tiên trong array.
- tức là cout num << sẽ trả về địa chỉ của value num[0] hay : num == &num[0]
- cặp ngoặc [] sẽ giống như là dereference.
- Ta có thể viết lại như sau : num[2] == *(num + 2)
