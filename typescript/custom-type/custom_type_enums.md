- Ngoài các biến pre-defined type(type xác định trước) thì typescript còn có thể tạo custom types.

# ENUMs
- Ta dùng enums khi ta muốn liệt kê (enumerate) tất cả các values có thể có trong biến.

enum Direction {
    North,
    South,
    East,
    West
}

- Có nhiều trường hợp ta phải giới hạn số value của variables.
- Ví dụ như trên sẽ chỉ có 4 hướng.

>   let whichWayToArcticOcean: Direction;
>   whichWayToArcticOcean = Direction.North; // No type error.
>   whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
>   whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 


- enum có thể dùng như là annotation như các type khác.

- Ở bên dưới, Typescript xử lý các loại enum này bằng cách sử dụng number. 
- Enum values được gán các numerical value dựa vào thứ tự trong listed của nó.
- Giá trị đầu tiên được gán là 0 , giá trị thứ 2 được gán là 1....

* Ví dụ : Nếu ta set whichWayToArticOcean = Direction.North, thì khi ta thực hiện so sánh sau whichWayToArticOcean == 0 thì sẽ trả về true.
- Thêm nữa, ta có thể gán whichWayToArticOcean với 1 number value như whichWayToArticOcean = 2 và sẽ ko báo lỗi.
- Bởi vì , Direction.North, Direction.South, Direction.East, và Direction.West là bằng với 0,1,2,3 tương ứng.
Ta có thể thay đổi số bắt đầu với cái như sau :

>   enum Direction {
>     North = 7,
>     South,
>     East,
>     West
>   }

- Lúc này, Direction.North, Direction.South, Direction.East, và Direction.West là bằng với 7,8,9,10 tương ứng

>   enum Direction {
>     North = 8,
>     South = 2,
>     East = 6,
>     West = 4
>   }


>   enum Pet {
>     Hamster,
>     Rat,
>     Chinchilla,
>     Tarantula,
>   }
>   
>   let petOnSaleTS : Pet = Pet.Chinchilla;
>   
>   let ordersArrayTS : [Pet, number][] = [[Pet.Rat, 2], [Pet.Chinchilla,1], [Pet.Hamster, 2],[Pet.Chinchilla, 50]];  
>   
>   ordersArrayTS.push([Pet.Jerboa, 3]);

# STRING ENUMS VS NUMERIC ENUMS.   

- enum DirectionNumber { North, South, East, West } => numeric enum
- enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' } => string enum

- Nên theo chuẩn là string nên viết hoa hết.
- Ta nên sử dụng string enums vì numeric sẽ có thể gây 1 số lỗi, 

>   let whichWayToAntarctica: DirectionString;
>   whichWayToAntarctica = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Type error!
>   whichWayToAntarctica = 'SOUTH'; // STILL a type error!
>   whichWayToAntarctica = DirectionString.South; // The only allowable way to do this.
<!-- ======================================== -->
enum Pet {
  Hamster = "HAMSTER",
  Rat = "RAT", 
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA"
}

let petOnSaleTS : Pet = Pet.Chinchilla; 
console.log(typeof petOnSaleTS);

let ordersArrayTS : [Pet, number][] = [
  [Pet.Rat, 2], 
  [Pet.Chinchilla, 1], 
  [Pet.Hamster, 2], 
  [Pet.Chinchilla, 50]
]

ordersArrayTS.push(['HAMSTER', 1]); => lỗi Type '"HAMSTER"' is not assignable to type 'Pet'