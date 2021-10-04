- type annotation for an object :

>   let aPerson: {name: string, age: number};

- Ta có định nghĩa các type cho các properties.
- Khi assign value phải đúng cả type và tên properties.

>   aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
>   aPerson = {name: 'Kushim', yearsOld: 5000}; // Type error: no age property. 
>   aPerson = {name: 'User McCodecad', age: 22}; // Valid code. 

- Code ví dụ : truyền object vào hàm và khai báo array object.
>   function sayHappyBirthdayWithObject(personObject : {name: string, age : number, giftWish: string, success: boolean}){
>     let output ='';
>     output += 'Happy Birthday '
>            + personObject.name + '! ';
>     output += 'You are now ' 
>            + personObject.age + ' years old! ';
>     output += 'Your birthday wish was to receive ' 
>            + personObject.giftWish 
>            + '. And guess what? You will ';
>     if (!personObject.success){
>       output += 'not ';
>     }
>     output += 'receive it! \n';
>     console.log(output);
>   }
>   
>   let birthdayBabies : {name: string, age: number, giftWish: string, success: boolean}[] = [
>     {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
>     {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
>     {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
>   ]; 
>   
>   birthdayBabies.forEach(sayHappyBirthdayWithObject);

# Type Aliases
- 1 trong những cách customize types là dùng type aliases.
=> <alias name> = <type>

>   type MYString = string;
>   let myVar : MyString = "Hi"; // Valid code.

- Type aliases thực sự hữu dụng cho các type phức tạp đặc biệt là object types và tuple types. 

* Ví dụ :

>   let aCompany: { 
>     companyName: string, 
>     boss: { name: string, age: number }, 
>     employees: { name: string, age: number }[], 
>     employeeOfTheMonth: { name: string, age: number },  
>     moneyEarned: number
>   };

- ta có thể viết gọn lại.

>   type Person = { name: string, age: number };
>   let aCompany: {
>     companyName: string, 
>     boss: Person, 
>     employees: Person[], 
>     employeeOfTheMonth: Person,  
>     moneyEarned: number
>   };

- TypeScript aliases không khác gì là 1 cái tên, ko tác động gì đến cách types hoạt động.

# Function Types.
- Typescript có thể control loại function có thể gán cho 1 biến.
- Ta sẽ dùng function types , xác định argument types và return type của function.
- Ví dụ :

>   type StringsToNumberFunction = (arg0: string, arg1: string) => number;
=> function này sẽ chỉ tương thích với hàm có 2 argument là string và return 1 number.

- ở đây t chỉ khái báo type , chưa có body cho function.
- Ví dụ sau :

>   let myFunc: StringsToNumberFunction;
>   myFunc = function(firstName: string, lastName: string) {
>     return firstName.length + lastName.length;
>   };
>    
>   myFunc = function(whatever: string, blah: string) {
>     return whatever.length - blah.length;
>   };
>   // Neither of these assignments results in a type error. cả 2 đều ko có lỗi.

__NOTE__ phải luôn có tên cho parameter và dâu () và không có dấu {} và nếu ko trả về thì sử dụng void.

>   type StringToNumberFunction = (string)=>number; // NO
>   type StringToNumberFunction = arg: string=>number; // NO NO NO NO

- THường dùng trong callback.

type OperatorFunction  = (a : number, b: number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback : OperatorFunction) {
  ....
}