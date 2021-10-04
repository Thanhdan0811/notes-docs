- generics là cách tạo collection của types (và function types, and more) tương đồng với nhau.
- Những collection này được tham số hóa bởi 1 hoặc nhiều tham số.
- Array<T> là 1 dạng của generic, T có thể là bất cứ type nào.
- Generic cho phép ta định nghĩa collection của objects của riêng chúng ta . Ví dụ :

>   type Family<T> = {
>       parents : [T,T], mate: T, children: T[],
>   }

- Code này define 1 collection của object types với type khác nhay cho value của T.
- The generic Family<T> thực chất ko thể được dùng như là 1 type trong type annotation.
- Thay vào đó, ta phải thay thế T với types theo lụa chọn , ví dụ như string.
- Sau đó, Family<string> sẽ là object type có setting T là string :

=> {parent : [string, string], mate : string, children : string[]}

>   let aStringFamily: Family<string> = {
>     parents: ['stern string', 'nice string'],
>     mate: 'string next door', 
>     children: ['stringy', 'stringo', 'stringina', 'stringolio']
>   };

- Nhìn chung, generic type với type typeName<T> cho phép ta dùng T trong type annotation như là 1 type placeholder.
- Khi generic được sử dụng, T sẽ được thay thế bởi type được cung cấp, 

VD : 

>   type Human = {name: string, job: string};
>   type Dog = {name: string, tailWagSpeed: number};
>   
>   type Family<T> = {
>     parents: [T, T], mate: T, children: T[]
>   };
>   //Do not change the code above this line.
>   
>   //Provide type annotations for the variables below:
>   let theFamily : Family<number> = {
>     parents: [3, 4], mate: 9, children: [5, 30, 121]
>   };
>   
>   let someFamily : Family<boolean> = {
>     parents: [true, true], mate: false, 
>     children: [false, false, true, true]
>   };
>   
>   let aFamily : Family<Human> =  {
>     parents: [
>       {name: 'Mom', job: 'software engineer'},
>       {name: 'Dad', job: 'coding engineer'}
>     ],
>     mate: {name: 'Matesky', job: 'engineering coder'},
>     children: [{name: 'Babesky', job: 'none'}]
>   };
>   
>   let anotherFamily : Family<Dog> = {
>     parents: [
>       {name: 'Momo', tailWagSpeed: 3},
>       {name: 'Dado', tailWagSpeed: 100}
>     ],
>     mate: {name: 'Cheems', tailWagSpeed: 7},
>     children: [
>       {name: 'Puppin', tailWagSpeed: 0.001},
>       {name: 'Puppenaut', tailWagSpeed: 0.0001},
>       {name: 'Puppenator', tailWagSpeed: 0.01}
>     ]
>   };

# Generic functions.
- Ta còn có thể dùng generic để tạo collections cho typed function.

function getFilledArray(value, n) {
  return Array(n).fill(value);
}

- Ở đây : getFilledArray('cheese', 3) => ['cheese', 'cheese', 'cheese'].
-  Đoạn code này sẽ phát sinh vấn đề khi ta muốn định nghĩa type cho value được trả về. Ta có phải type annotation cho bất cứ value nào được return về ????????
- generic sẽ được sử dụng như sau :

>   function getFilledArray<T>(value: T, n: number): T[] {
>     return Array(n).fill(value);
>   }

- Đoạn code trên nói rằng, value và returned array sẽ có cùng 1 type là T.
- Khi function được gọi, ta sẽ cung cấp type cho nó.
- Nó cũng sẽ tương tự với như sau :

>   (value: string, n: number): string[]

Ví dụ như sau :

>   function getFilledArray<T>(value: T, n: number): T[] {
>     return Array(n).fill(value);
>   }
>   
>   let stringArray: string[];
>   let numberArray: number[];
>   let personArray: {name: string, age: number}[];
>   let coordinateArray: [number, number][];
>   
>   // Write your code below:
>   stringArray = getFilledArray<string>("hi",6);
>   numberArray = getFilledArray<number>(9,6);
>   personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24},6);
>   coordinateArray = getFilledArray<[number, number]>([3,4],6);

