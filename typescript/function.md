Nếu parameter muốn được có hoặc ko có truyền vào ta sẽ dùng ? để cho typescript biết là biến này có thề là undefined.

>   function greet(name?: string) {
>     console.log(`Hello, ${name|| 'Anonymous'}!`);
>   }
>    
>   greet(); // Prints: Hello, Anonymous!

- Với default parameter ta sẽ có thể ko cần đến ? và || và annotation type vì nó tự động hiểu thông qua việc gán value.

# Inferring Return Types
- Typscript có thể suy luận được types của value được return về bởi functions. Nó sẽ xem xét type của value tại return statement.

- Nếu ta muốn tường minh việc trả về value, ta dùng annotation sau tên function() : type


function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

- Với arrow function 

const createArrowGreeting = (name?: string): string => {
    if (name) {
        return `Hello, ${name}!`;
    }
 
    return undefined;
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

- Ta có thể dùng kiểu void để chỉ việc function ko return về cái gì.

# Comment :
- Ta có thể dùng comment để đánh dấu các hàm.
/**
* @param x - the first input
* @param y - the second input
* @returns the sums of two input
*/