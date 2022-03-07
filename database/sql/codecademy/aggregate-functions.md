- Calculations được thực hiện trên nhiều row được gọi là aggregate (tổng hợp).

# ================================== Count ========================================
- Cách nhanh nhất để tính được tổng số row trong table là dùng : COUNT() fucniton.
- COUNT() : là 1 function nhận vào tên của 1 column như là 1 argument và tính tổng số các values ko là empty của column đó.
- Sẽ vẫn in ra các value trùng nhau.
-  Ví dụ :

>   SELECT COUNT(*) FROM table_name;
=> Ở đây ta muốn count tất cả row nên ta pass * vào COUNT().

> SELECT COUNT(*) FROM fake_apps WHERE price = 0;


# ================================== Sum ========================================
- SUM() : nhận vào name của 1 column như là 1 argument và trả về tổng của các values trong column đó.
- Ví dụ :

>   SELECT SUM(downloads)
>   FROM fake_apps;



# ================================== Max / Min ========================================
- MAX() và MIN() : trả về values lớn nhất và nhỏ nhất trong 1 column 
- Ví dụ :

>   SELECT MAX(downloads)
>   FROM fake_apps; => 31,090.



# ================================== Average ========================================
- AVG() : được đùng để tính giá trị trung bình của 1 column nhất định.


>   SELECT AVG(downloads)
>   FROM fake_apps;
=> số lượt download trung bình.


# ================================== Round ========================================
- ROUND() : nhận vào 2 arguments :
    + column name
    + 1 integer
- Hàm sẽ làm tròn value trong column theo số integer.

>   SELECT ROUND(price, 0)
>   FROM fake_apps;

- Ví dụ kết hơp :

>   SELECT ROUND(AVG(price), 2)
>   FROM fake_apps;



# ================================== Group By I ========================================
- Thường ta sẽ muốn tính toán aggregate cho data với đặc tính nhất định.
- Ví dụ ta muốn tính trung bình Imdb_rating cho từng năm :

>   SELECT AVG(imdb_rating)
>   FROM movies
>   WHERE year = 1999;
>    
>   SELECT AVG(imdb_rating)
>   FROM movies
>   WHERE year = 2000;
>    
>   SELECT AVG(imdb_rating)
>   FROM movies
>   WHERE year = 2001;

- Ta có thể dùng GROUP By để viết gọn hơn.


>   SELECT year,
>      AVG(imdb_rating)
>   FROM movies
>   GROUP BY year
>   ORDER BY year;

- GROUP BY : được dùng kết hợp với SELECT để bố trí các data giống nhau vào cùng 1 group.
- __NOTE__ : GROUP BY sẽ viết sau bất cứ WHERE statement nào nhưng phải đúng trước ORDER BY hoặc LIMIT.


>   SELECT price, COUNT(*) 
>   FROM fake_apps
>   WHERE downloads > 20000
>   GROUP BY price;


>SELECT category, SUM(downloads) 
>FROM fake_apps
>GROUP BY category;
=> Tổng số downloads theo nhớm category.

# ================================== Group By II ========================================
- Đôi khi ta muốn GROUP BY 1 calculation done trong 1 column.
- Ví dụ : ta muốn biết có bao nhiêu movies có Imdb được làm tròn thành 1,2,3,4,5 :

>   SELECT ROUND(imdb_rating),
>      COUNT(name)
>   FROM movies
>   GROUP BY ROUND(imdb_rating)
>   ORDER BY ROUND(imdb_rating);
=> Tuy nhiên đoạn queries này lại làm mất thời gian và dễ lỗi.

- SQL cho phép ta dùng column references trong GROUP BY để đơn giản hơn.

    + 1 là column đầu tiên được chọn.
    + 2 là column thứ 2 được chọn.
    + 3 là column thứ 3 được chọn.
    + và tiếp tục....


>   SELECT ROUND(imdb_rating),
>      COUNT(name)
>   FROM movies
>   GROUP BY 1
>   ORDER BY 1;
=> 1 ở đây đề cập đến column đầu tiên trong select statement , ROUND(imdb_rating)



# ================================== Having ========================================
- Ngoài việc nhớm data lại bằng GROUP BY, SQL còn cho phép ta filter theo kiểu group nào sẽ được include , group nào thì sẽ bị exclude.
- Ví dụ :

>   SELECT year,
>      genre,
>      COUNT(name)
>   FROM movies
>   GROUP BY 1, 2
>   HAVING COUNT(name) > 10;

- Khi ta muốn limit kết quả của query dựa vào values của rows thì ta dùng WHERE.
- Khi ta muốn limit kết quả của query dựa vào aggregate property ta dùng HAVING.
__NOTE__ HAVING sẽ luôn đến sau GROUP BY , nhưng sẽ ở trước ORDER BY và LIMIT. và HAVING không chấp nhận alias như order by.


>   SELECT price, 
>      ROUND(AVG(downloads)),
>      COUNT(*) as count
>   FROM fake_apps
>   GROUP BY price
>   HAVING COUNT(*) > 10;


BÀI TẬP :
10.
>   select category, ROUND(AVG(valuation), 2) from startups
>   GROUP BY 1
>   ORDER BY 2 DESC;
=> Return the average valuation, in each category.
    Round the averages to two decimal places.
    Lastly, order the list from highest averages to lowest.


12.

>   select category, COUNT(*) from startups
>   group by 1
>   having count(*) > 3
>   order by 2 desc;

