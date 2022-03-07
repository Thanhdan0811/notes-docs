- Trong file song.hpp

+   class Song {
+     std::string title;
+     public:
+     void add_title(std::string new_title);
+     std::string get_title();
+   };

- Trong file song.cpp

+   void Song::add_title(std::string new_title) {
+     title = new_title;
+   }
+   
+   std::string Song::get_title() {
+     return title;
+   }

# Creating Objects
- Để tọa 1 instance cho 1 class.
- Cách làm : Class_Name ten_object;

# Access Control: Public and Private
- Trong file song.hpp

+   #include <string>
+   class Song {
+     
+     std::string title;
+     std::string artist;
+   public:
+     void add_title(std::string new_title);
+     std::string get_title();
+     std::string get_artist();
+     void add_artist(std::string new_artist);
+   };

- Trong file song.cpp

+   #include "song.hpp"
+   // add Song method definitions here:
+   void Song::add_title(std::string new_title) {
+     title = new_title;
+   }
+   std::string Song::get_title() {
+     return title;
+   }
+   void Song::add_artist(std::string new_artist) {
+     artist = new_artist;
+   }
+   std::string Song::get_artist() {
+     return artist;
+   }

# Constructors
- Ví dụ :

+   // city.hpp
+   #include "city.hpp"
+    
+   class City {
+     std::string name;
+     int population;
+    
+   public:
+     City(std::string new_name, int new_pop);
+   };
+    
+   // city.cpp
+   City::City(std::string new_name, int new_pop)
+     // members get initialized to values passed in 
+     : name(new_name), population(new_pop) {}

- Hoặc như sau :

+   City::City(std::string new_name, int new_pop) {
+     name = new_name;
+     population = new_pop;
+   }


# Destructors
- Cách mà ta destroy 1 class, object.
- Object destruction thực chất là siết chặt và ngăn memory leak.
- 1 destructor là 1 special method sẽ handle object destruction.
- Như constructor nó có name giống với class và ko có return type.
- Nhưng nó có tiền tố là : ~
- Và ko có parameters.
- Ví dụ :

+   // city.hpp
+   class City {
+    
+     std::string name;
+     int population;
+    
+   public:
+     City(std::string new_name, int new_pop);
+     ~City();
+   };
+   
+   // city.cpp
+   City::~City() {
+    
+     // any final cleanup
+    
+   }

- Ta sẽ ko cần phải gọi destructor mà nó sẽ được tự động gọi khi : object move ra khỏi scope, object bị delete, khi nào program end.


