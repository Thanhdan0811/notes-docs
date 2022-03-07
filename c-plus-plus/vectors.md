- Ta cần import library vector.

    => #include <vector>

- Syntax :

    + std::vector<type> name;
    => std::<vector> calories_today;

- type của vector ko thể đc thay đổi sau khi declaration.

# Initializing a Vector
- std::vector<double> location = {42.651443, -73.749302};
- Ngoài việc gán value trược tiếp ta có thể gán size cho nó :
- std::vector<double> location(2); value mặc định lúc này sẽ là 0.0

# Index
+ std::vector<char> vowels = {'a', 'e', 'i', 'o', 'u'};
+ std::cout << vowels[1] << "\n";

# Adding and Removing Elements
- Để thêm element vào cuối vector ta sẽ dùng : .push_back()
+ std::vector<std::string> dna = {"ATG", "ACG"};
+ dna.push_back("GTG");
- Để remove element ở cuối : .pop_back() 
+ dna.pop_back()
- NOTE : .pop_back() sẽ ko có giá trị trả về.

# .size()
- <std::vector> không chỉ chứa thông tin về các elements mà còn chứa size của vector.
- .size() function sẽ trả về số elements trong vector.
+ std::vector<std::string> grocery = {"Hot Pepper Jam", "Dragon Fruit", "Brussel Sprouts"};
+ std::cout << grocery.size() << "\n"; => 3

# Operations
