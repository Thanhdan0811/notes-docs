- statement là text mà database nhận ra như là 1 valid command. và luôn kết thúc là dấu ;. 

>   CREATE TABLE table_name (
>      column_1 data_type, 
>      column_2 data_type, 
>      column_3 data_type
>   );

- CREATE TABLE : à 1 mệnh đề(clause) sẽ thực hiện 1 task nhất định trong SQL.
- table_name : sẽ là tên của table mà command sẽ applied vào.
- (column_1 data_type, column_2 data_type, column_3 data_type) : là các parameters, là list các columns, data tupes, values.. sẽ được passed vào clause. Ở đây sẽ là các columns.


# CREATE.
- CREATE statement cho phép ta tạo mới 1 table trong database.
- Ví dụ :

>   CREATE TABLE celebs (
>      id INTEGER, 
>      name TEXT, 
>      age INTEGER
>   );

- CREATE TABLE : Tạo 1 table mới 
- celebs : là tên table.
- (id INTEGER, name TEXT, age INTEGER) : là danh sách các parameters để định nghĩa mỗi columns.
+ id là column đầu tiên chứa các value với type là INTEGER.
+ name là column thứ 2, chứa value có data type là TEXT.
+ age là column thứ 3 , chứa value có type là INTEGET


# INSERT.
- INSERT statement sẽ insert 1 row mới vào table.
- Ta dùng INSERT khi ta muốn add new record.
- Ví dụ :

>   INSERT INTO celebs (id, name, age) 
>   VALUES (1, 'Justin Bieber', 22);
>   INSERT INTO celebs (id, name, age) 
>   VALUES (2, 'Beyonce Knowles', 33); 

- INSERT INTO : là clause sẽ add 1 row hay rows.
- celebs là table được add row.
- (id, name, age) là parameters xác định columns mà data được insert vào.
- VALUES : là 1 clause sẽ chỉ ra data nào được insert.
- (1, 'Justin Bieber', 22) : Là value được insert.
- For the `DATE` data type, the format is YYYY-MM-DD.


# SELECT.
- SELECT statement được dùng để lấy data từ 1 database.
- Sẽ luôn trả về 1 table mới được gọi là result set.
- Ví dụ :

>   SELECT name FROM celebs;

=> SELECT sẽ trả về all data trong name columns của celebs table.

- SELECT ám chỉ rằng statement là 1 query (truy vấn).
- name  : xác định coloum nơi mà data được query.
- FROM celebs : name của table.

- Ta có thể query all data của table như sau :

>   SELECT * FROM celebs;

# ALTER.
- ALTER TABLE statement thêm 1 column mới vào table.
- Ví dụ :

>   ALTER TABLE celebs 
>   ADD COLUMN twitter_handle TEXT;

=> add column mới có tên là twitter_handle với data type là TEXT.
- ADD COLUMN : là clause cho phép ta add 1 column mới.
- __NULL__ : là value đặc biệt trong SQL nó biểu đạt là data bị missing hay unknown.
- Do đó row có column là twitter_handle sẽ có giá trị là NULL.


# UPDATE.
- UPDATE statement : sẽ edits 1 row trong table. được dùng để thay đổi data có sẵn.
- Ví dụ :

>   UPDATE celebs 
>   SET twitter_handle = '@taylorswift13' 
>   WHERE id = 4; 

=> đoạn code trên sẽ update record với id là 4 có twitter_handle với value là '@taylorswift13'.

- UPDATE : edit row trong table.
- celebs : tên table.
- SET : xác định column được edit.
    + twitter_handle : là tên của column được chọn.
    + @taylorswift13 : là value được set
- WHERE  : xác định row sẽ được update ở đâu là row có id là 4.

__Sự khác nhau giữa ALTER và UPDATE__

- The ALTER statement is used to modify columns. With ALTER, you can add columns, remove them, or even modify them.
- The UPDATE statement is used to modify rows. However, UPDATE can only update a row, and cannot remove or add rows.

# DELETE.
- DELETE statment : sẽ xóa 1 hoặc nhiều rows trong table.
- Ví dụ :

>   DELETE FROM celebs 
>   WHERE twitter_handle IS NULL;

- Xóa tất cả records trong celebs mà ko có twitter_handle
- IS NULL : điều kiện SQL , trả về true khi value là NULL , ngược lại false.
- WHERE : row nào cần được xóa.
- DELETE FROM : cho phép ta delete row.

# Constraints
- là add thêm thông tin để xác định cách mà columns được dùng khi sau khi xác định data type của column 
- Được dùng để từ chối inserted data ko tuân thủ 1 số qui tắc.
- Ví dụ :

?   CREATE TABLE celebs (
?      id INTEGER PRIMARY KEY, 
?      name TEXT UNIQUE,
?      date_of_birth TEXT NOT NULL,
?      date_of_death TEXT DEFAULT 'Not Applicable'
?   );

=> PRIMARY KEY : được dùng để uniquely để xác định row. Nếu định add row có identical value vào row có sẵn sẽ cho kq là 1 constraint violation. sẽ ko cho insert.
=> UNIQUE columns : có giá trị khác nhau cho mỗi row. giống với PRIMARY KEY khác ở chỗ 1 table có thể có nhiều UNIQUE columns khác nhau.
=> NOT NULL columns : phải có value. nếu insert row mà ko có value thì sẽ ko insert đc.
=> DEFAULT columns : nhận argument bổ sung sẽ được xem là value của row nếu row được thêm vào ko có value .
- Ví dụ khác :

>   CREATE TABLE awards (
>      id INTEGER PRIMARY KEY,
>      recipient TEXT NOT NULL,
>      award_name TEXT DEFAULT 'Grammy'
>   );

# REVIEW

CREATE TABLE creates a new table.
INSERT INTO adds a new row to a table.
SELECT queries data from a table.
ALTER TABLE changes an existing table.
UPDATE edits a row in a table.
DELETE FROM deletes rows from a table.


# BAì TẬP

>   CREATE TABLE friends (
>     id INTEGER,
>     name TEXT,
>     birthday DATE
>   );
>   
>   INSERT INTO friends (id, name, birthday)
>   VALUES (1, "Ororo Munroe", "1940-05-30");
>   
>   INSERT INTO friends (id, name, birthday)
>   VALUES (2, "My friends 1", "1996-05-30");
>   INSERT INTO friends (id, name, birthday)
>   VALUES (3, "My friends 2", "1997-05-30");
>   
>   UPDATE friends
>   SET name = "Storm"
>   WHERE id = 1;
>   ALTER TABLE friends
>   ADD COLUMN email TEXT;
>   -- SELECT * FROM friends;
>   UPDATE friends
>   SET email = "storm@codecademy.com"
>   WHERE id = 1;
>   UPDATE friends
>   SET email = "friends2@codjaldf.com"
>   WHERE id = 2;
>   UPDATE friends
>   SET email = "friends2@codjaldf.com"
>   WHERE id = 3;
>   
>   DELETE FROM friends 
>   WHERE name IS "Storm";
>   
>   SELECT * FROM friends;