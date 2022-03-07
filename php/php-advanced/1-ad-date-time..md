* The PHP date() function is used to format a date and/or a time.
# The PHP Date() Function.
* Syntax : date(format, timestamp);
    + format : là bắt buộc, 
    + timestamp : là optional, mặc định là hiện tại.

# Get a Date.
* format parameter xác định cách date hiển thị time.
* Các trường hợp thường gặp :

    1.   d - Represents the day of the month (01 to 31)
    2.   m - Represents a month (01 to 12)
    3.   Y - Represents a year (in four digits)
    4.   l (lowercase 'L') - Represents the day of the week

* /, . , - : có thể được chèn vào giữa các ký tự .

>   echo "Today is " . date("Y/m/d") . "<br>"; => Today is 2020/11/03
>   echo "Today is " . date("Y.m.d") . "<br>"; => Today is 2020.11.03
>   echo "Today is " . date("Y-m-d") . "<br>"; => Today is 2020-11-03
>   echo "Today is " . date("l"); => Today is Tuesday


# PHP Tip - Automatic Copyright Year
* Use the date() function to automatically update the copyright year on your website:
> &copy; 2010-<?php echo date("Y");?>

# Get a Time
* Các ký tự để get time.

    *.    H - 24-hour format of an hour (00 to 23)
    *.    h - 12-hour format of an hour with leading zeros (01 to 12)
    *.    i - Minutes with leading zeros (00 to 59)
    *.    s - Seconds with leading zeros (00 to 59)
    *.    a - Lowercase Ante meridiem and Post meridiem (am or pm)

>   echo "The time is " . date("h:i:sa"); => The time is 02:56:03am

* Note that the PHP date() function will return the current date/time of the server!

# Get Your Time Zone.
* Nếu time trả về ko chính xác, có thể là do server nằm ở chỗ nào đó.
* Nên ta cần điều chỉnh lại đúng vị trí.

>   date_default_timezone_set("America/New_York");
>   echo "The time is " . date("h:i:sa");

# Create a Date With mktime().
* optional timestamp parameter xác định khoảng thời gian,
* PHP mktime() function return Unix timestamp cho date. 
* Unix timestamp chứa số seconds giữa Unix Epcch (January 1 1970 00:00:00 GMT) và time specified.
* Syntax :

>   => mktime(hour, minute, second, month, day, year);

>   $d = mktime(11, 14, 54, 8, 12, 2014);
>   echo "Created date is " . date("Y-m-d h:i:sa", $d); => Created date is 2014-08-12 11:14:54am

# Create a Date From a String With strtotime().
* PHP strtotime() function được dùng để convert time string thành Unix timestamp.
* Syntax :

    => strtotime(time, now).

>   $d=strtotime("10:30pm April 15 2014");
>   echo "Created date is " . date("Y-m-d h:i:sa", $d); => Created date is 2014-04-15 10:30:00pm

* VD 

>   $d=strtotime("tomorrow");
>   echo date("Y-m-d h:i:sa", $d) . "<br>";
>   
>   $d=strtotime("next Saturday");
>   echo date("Y-m-d h:i:sa", $d) . "<br>";
>   
>   $d=strtotime("+3 Months");
>   echo date("Y-m-d h:i:sa", $d) . "<br>";

* However, strtotime() is not perfect, so remember to check the strings you put in there.

https://www.w3schools.com/php/php_ref_date.asp
