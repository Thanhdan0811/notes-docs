- Đôi khi ta cần 1 biến có thể là nhiều type.
- Unions cho phép ta định nghĩa nhiều type bằng cách chia các type ra bằng dấu : | 
- Ví dụ :

>   let ID : string | number;
>   
>   ID = 1;
>   ID = "001";

- Unions có thể được viết ở bất cứ đâu, bao gồm cả parameters.

>   function getMarginLeft(margin: string | number) {
>     return { 'marginLeft': margin };
>   }

# Type Narrowing.
- type narrowing là khi typescript có thể tìm ra được type của variable thông qua 1 điều kiện trong code.

>   function getMarginLeft(margin: string | number) {
>     // margin may be a string or number here
>    
>     if (typeof margin === 'string') {
>       // margin must be a string here
>     }
>   }

=> Ta thấy với điều kiện typeof margin === "string" thì typescript sẽ hiểu bên trong block code thì margin sẽ có type là string và sẽ cho phép sử dụng các method của string.

# Inferred Union Return Types
- Typescript có thể suy đoán được type trong nhiều trường hợp.
- Ví dụ về return value của function .
- Typescript có thể nhìn vào content của 1 function và đoán type return của hàm, nếu có nhiều hơn 1 type thì sẽ xem đó như là union.
- Do đó ta ko cần phải define type return từ function


# Unions and Arrays
- Để tạo 1 union hỗ trợ cho nhiều type cho array values ta sẽ bọc union tron () sau đó dùng array notation [].


>   const dateNumber = new Date().getTime(); // returns a number
>   const dateString = new Date().toString(); // returns a string
>   const timesList: (string | number)[] = [dateNumber, dateString];

# Common Key Value Pairs.
- Khi ta có union với nhiều type, typescript sẽ chỉ cho phép sử dụng method và properties chung giữa tất cả unions, nếu dùng riêng sẽ báo lỗi.

>   const batteryStatus: boolean | number = false;
>    
>   batteryStatus.toString(); // No TypeScript error
>   batteryStatus.toFixed(2); // TypeScript error

- Cùng quy luật với object.

>   type Goose = { 
>     isPettable: boolean; 
>     hasFeathers: boolean;
>     canThwartAPicnic: boolean;
>   }
>    
>   type Moose = {
>     isPettable: boolean; 
>     hasHoofs: boolean;
>   }
>    
>   const pettingZooAnimal: Goose | Moose = { isPettable: true };
>    
>   console.log(pettingZooAnimal.isPettable); // No TypeScript error
>   console.log(pettingZooAnimal.hasHoofs); // TypeScript error

# Unions with Literal Types.

>   type Color = 'green' | 'yellow' | 'red';
>    
>   function changeLight(color: Color) {
>     // ...
>   }

# Using in with Type Guards
- Ta sẽ sử dụng in operator như là 1 type guard.

>   type Tennis = {
>     serve: () => void;
>   }
>    
>   type Soccer = {
>     kick: () => void;
>   }
>    
>   function play(sport: Tennis | Soccer) {
>     if ('serve' in sport) {
>       return sport.serve();
>     }
>    
>     if ('kick' in sport) {
>       return sport.kick();
>     }
>   }

=> 