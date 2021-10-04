- Typescript nhận biết được các JS built-in primitive date types :

+ boolean
+ number
+ null
+ string 
+ undefined

- khi 1 biến được khai báo và gán vào 1 giá trị, khi ta gán lại 1 giá trị khác nhưng khác type thì sẽ có báo lỗi.

- typescript sẽ tự động nhận biết kiếu mẫu của object phải tuân theo
-  object’s shape describes , là cơ chế tự nhận biết giữa các thứ với nhau. properties và methods chứa gì và type là gì.
# Any
- khi khai báo biến mà ko gán value hay định nghĩa type thì type sẽ là any, và khi gán và value bất kỳ sẽ ko báo lỗi.


# Variable Type Annotations.
- Ta có thể khai báo 1 biến nhưng ko gán giá trị đồng thời vẫn đảm bào việc gán value sẽ tuân thủ type nhất định bằng cách sử dụng type annotation.
* Type annotation hay còn gọi là type declaration.
cú pháp => let var : type ;
