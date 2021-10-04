# ================================== select ========================================
- SELECT được dùng mỗi khi ta muốn query data từ database. 
- * có nghĩa là tất cả.
- Nếu ta chỉ muốn lấy 2, hoặc 3 columns thì ta sẽ làm như sau :

>   SELECT column1, column2  => column1, column2 ở đây là các name của column.
>   FROM table_name;

- Ví dụ

>    select name, genre, year from movies;

# ================================== As ========================================
- Ví dụ :

>   SELECT name AS 'Titles'
>   FROM movies;

- AS là keyword trong SQL, cho phép ta rename column hoặc table sử dụng 1 alias.
- new name có thể là bất cứ thứ gì và được đặt trong single quotes.
- Ở đây ta đổi tên name thành Titles
- NOTE :
    + Ta nên dùng alias trong single quotes.
    + Khi dùng AS thì columns sẽ không bị đổi tên trong table mà aliases chỉ xuất hiện trong kqua trả về.
- Ví dụ :

>   select imdb_rating as 'IMDb'
>   from movies;

# ================================== Distinct ========================================
- Khi ta xem xét data trong 1 table, sẽ rất có ích khi biết các values distinct(khác biệt) tồn tại trong 1 column cụ thể.
- DISTINCT : được dùng để trả về các values unique ra output.
- nó sẽ filter ra tất cả các values duplicate trong columns.
- Ví dụ :

>   SELECT tools 
>   FROM inventory;

=> columns tools như sau : Hammer, Nails, Nails, Nails
- Khi dùng thêm DISTINCT :

SELECT DISTINCT tools
FROM inventory;

=> Hammer, Nails


# ================================== Where ========================================
- Tâ có thể siết lại kết quả bằng cách sử dụng where để thu được các thông tin mà ta cần.

>   SELECT *
>   FROM movies
>   WHERE imdb_rating > 8;

- filter các kết quả có imdb_rating lớn hơn 8.
- Cách hoạt động :

    + WHERE : lọc các kết qủa rows được thiết lập để chỉ thỏa điều kiện nhất định.
    + > operator : tạo 1 condition có thể trả về true hoặc false.

- Các operator khác : = equal to, != , > , < , >= , <= .
- Ví dụ :

>   select * 
>   from movies 
>   where year > 2014;


# ================================== Like I ========================================
- LIKE là operator được đùng để so sánh các value tương tụ nhau.
- Ví dụ movies table có 2 films là "Se7en" và "Seven". làm cách nào để ta có thể select tất cả film bắt đầu với "Se" và kết thúc với "en" và chỉ có 1 ký tự ở giữa ??

>   SELECT * 
>   FROM movies
>   WHERE name LIKE 'Se_en';

- LIKE là 1 operator đặc biệt được dùng với WHERE để tìm 1 specific pattern trong 1 column.
- Se_ven là pattern với 1 wildcard character.
- "_"  : có nghĩa là ta có thể thay thế bất cứ ký tự độc lập nào ở đây mà ko phá vỡ pattern.

__NOTE__ Ta còn có thể dùng LIKE với number hay các type khác, nhưng pattern phải luôn nằm trong dấu single quote.



# ================================== Like II ========================================
- percentage  sign % là 1 wildcard character khác có thể được dùng với LIKE.
- % là wildcard character được dùng để match zero hoặc các letters bị mất trong pattern.
- A% : matches tất cả movies với names bắt đầu bằng "A"
- %a : matches tất cả movies kết thúc với "a"
- Ta còn có thể dùng % ở cả trước và sau :

>   SELECT * 
>   FROM movies 
>   WHERE name LIKE '%man%';
=> ở đây bất cứ movies nào chưa từ 'man' đều đc return về. ví dụ : Man of Steel
- LIKE ko là case-sensitive.
- Ví dụ : select * from movies where name like 'The %'; => bắt đầu với từ the 

# ================================== Is Null ========================================
- Trong hầu hết các trường hợp value sẽ bị mising.
- Unknown sẽ được chỉ định là NULL.
- Ta ko thể kiểm tra NULL values với các comparison operators như =, != 
- Thay vào đó ta sẽ dùng các operators sau :

    + IS NULL
    + IS NOT NULL

- Ví dụ :

>   SELECT name
>   FROM movies 
>   WHERE imdb_rating IS NOT NULL;
=> filter tất cả movies với IMDB rating.

>   SELECT name FROM movies WHERE imdb_rating IS NULL;
=>  tất cả movies imdb là null  hay ko có imdb.


# ================================== Between ========================================
- BETWEEN operator được dùng trong WHERE để filter kết quả theo 1 range nhất định. 
- Nó nhận 2 values cả  2 có thể là numbers , text hoặc dates.
- Ví dụ :

>   SELECT *
>   FROM movies
>   WHERE year BETWEEN 1990 AND 1999;
=> filter tất cả movies có year tuwf 1990 đến 1999. bao gồm cả 1999

-   Khi values là text thì range sẽ là giữa các ký tự.
-   Ví dụ :

>   SELECT *
>   FROM movies
>   WHERE name BETWEEN 'A' AND 'J';
=>  sẽ chỉ filter các kết quả có name bắt đầu với letter A cho tới nhưng ko có bao gồm name bắt đầu bằng J
-   


# ================================== And ========================================
- Đôi khi ta muốn kết hợp nhiều conditions trong where để tạo kết quả cự thể và hữu ích hơn.
- Ta có thể dùng AND operator . Ví dự ;

>   SELECT * 
>   FROM movies
>   WHERE year BETWEEN 1990 AND 1999
>      AND genre = 'romance';
=>  Sẽ chỉ trả về movies lãng mạng những năm 90.

- year BETWEEN 1990 AND 1999 : đây là điều kiện đầu tiên.
- genre = 'romance' : Đây là điều kiện thứ 2.
- AND : kết hợp cả 2 điều kiện.

__NOTE__ : Với AND thì cả 2 điều kiện cần phải đúng để row được thêm vào kết quả.

- VD : select * from movies where year < 1985 and genre is "horror";


# ================================== Or ========================================
- Tương tự như and, or operator cũng có thể được dùng để kết hợp nhiều conditions.
- Chỉ khác là nó sẽ chỉ cần 1 trong các điều kiện là đúng.
- Ví dự :

>   SELECT *
>   FROM movies
>   WHERE year > 2014
>      OR genre = 'action';

>   year > 2014 : là điều kiện đầu tiên
>   genre = 'action' : là điều kiện thứ 2.
>   OR : sẽ kết hợp 2 điều kiện.


# ================================== Order By ========================================
- Thông thường ta sẽ muốn sort kết quả để dễ dàng phân tích.
- Ta sẽ sử dụng ORDER BY.

>   SELECT *
>   FROM movies 
>   ORDER BY name; => hàm ý sort column có tên là name.

- Sort theo tăng giảm.

>   SELECT *
>   FROM movies
>   WHERE imdb_rating > 8
>   ORDER BY year DESC;


- DESC là keyword được dùng bởi ORDER BY để sort kết quả theo giảm dần từ Z đến A
- ASC  là keyword được dùng bởi ORDER BY , nó sẽ ngược lại với DESC.
__NOTE__ ORDER BY sẽ luôn theo sau WHERE nếu có.

- Ví dụ :

>   SELECT name, year, imdb_rating
>   FROM movies
>   ORDER BY imdb_rating DESC;


# ================================== Limit ========================================
- Đối với bảng có hàng nghìn records, do đó sẽ tiện hơn nếu ta limit số record trả về.

>   SELECT *
>   FROM movies
>   LIMIT 10;

- LIMIT sẽ cho ta giới hạn số record tối đa hay row mà result trả về.
__NOTE__ LIMIT phải được dùng ở cuối query, và nó ko phải được hỗ trợ ở tất cả SQL databases

> select * from movies order by imdb_rating desc limit 3;


# ================================== Case ========================================
- CASE : cho phép ta tạo ra các output khác nhau thông thường là ở trong select statement.
- đây là cách mà sql thực hiện if-else.
- Ví dụ :

>   SELECT name,
>    CASE
>     WHEN imdb_rating > 8 THEN 'Fantastic'
>     WHEN imdb_rating > 6 THEN 'Poorly Received'
>     ELSE 'Avoid at All Costs'
>    END
>   FROM movies;

- Mỗi cái WHEN sẽ test 1 điều kiện và theo sau THEN là 1 string sẽ trả về khi đúng.
- ELSE sẽ trả về string khi tất cả sai.
- CASE statement __phải__ kết thúc bằng END keyword.
- Ví dụ :

>   SELECT name,
>    CASE
>     WHEN imdb_rating > 8 THEN 'Fantastic'
>     WHEN imdb_rating > 6 THEN 'Poorly Received'
>     ELSE 'Avoid at All Costs'
>    END AS 'Review'
>   FROM movies;
=> Vì column name khá dài, để rút ngắn nó lại, ta có thể rename nó lại sử dụng AS.

>   select name, CASE 
>     WHEN genre = 'romance' then 'Chill'
>     WHEN genre = 'comedy' then 'Chill'
>     ELSE 'Intense'
>     end  as 'Mood'
>     FROM movies;

# ================================== Summarize ========================================


- SELECT is the clause we use every time we want to query information from a database.
- AS renames a column or table.
- DISTINCT return unique values.
- WHERE is a popular command that lets you filter the results of the query based on conditions that you specify.
- LIKE and BETWEEN are special operators.
- AND and OR combines multiple conditions.
- ORDER BY sorts the result.
- LIMIT specifies the maximum number of rows that the query will return.
- CASE creates different outputs.
