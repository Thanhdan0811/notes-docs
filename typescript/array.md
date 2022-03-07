- khải báo ta thêm [] sau type;
let names: string[] = ['Danny', 'Samantha'];

- hoặc sử dụng như sau : Array<T> , T là type
let names: Array<string> = ['Danny', 'Samantha']; => generic type

>   let names: string[] = ['Damien'];
>   names.push(666) // Type Error!

# Tuples.
In TypeScript, when an array is typed with elements of specific types, it’s called a tuple.

>   let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 

- Tuy khá giống array nhưng ta ko thể gán __array cho turple__. turple sẽ fix length và phải đúng type.

# Array Type Inference : suy luận type của array

=> let examAnswers= [true, false, false]; 

- Sẽ có 2 khả năng là boolean[] hoặc [boolean, boolean, boolean];

=> Lúc này sẽ luôn luôn là boolean[].


let tup: [number, number, number] = [1,2,3];
let concatResult = tup.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6].
=> concatResult  lúc này sẽ ko là turple.

<!-- ============= NOTE +++++++++++++++++ -->

let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];
Think of the string[][] above as short for (string[])[], that is,


let danceMoves : [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true],
];

<!-- ======================== -->

# Rest parameters.
function smush(firstString, ...otherStrings: string[]){
  /*rest of function*/
}

# Spread Syntax.

let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];

gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
// And by the way, this makes the return trip really convenient to compute too:
gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates);
// If there is a return trip . . . 


let monster: [string[],string[],string[][],string[][],string[][][][],string[][][][],number[][][][][][],number[],string[],boolean[],number[],string[],boolean[],number[][]] = [

     [],            []      ,
     [[]],        [[]]     ,
  [[[['X']]]],[[[['X']]]]   ,
    [[[[[[1111111]]]]]]     ,
     [],[],[],[],[],[]      ,
           [[3]]

];