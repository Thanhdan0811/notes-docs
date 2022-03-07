- 1 phần của pattern có thể được đặt trong parentheses (...)
- đây được gọi là : capturing group
- Nó sẽ có 2 tác động :

  + Nó cho phép lấy 1 phần của match như là 1 item tách ra trong result array.
  + Nếu ta đặt 1 quantifier ở sau parentheses , nó sẽ áp dụng vào toàn bộ parentheses.

# =========================== Ex : gogogo ==================================
- nếu ko có parentheses , thì pattern go+ sẽ có nghĩa là ký tự g và theo sau là ký tự o được lặp lại 1 hoặc nhiều lần.
- parentheses sẽ group các characters lại với nhau :

> alert( 'Gogogo now!'.match(/(go)+/ig) ); // "Gogogo"



# =========================== Ex : domain ==================================
- ví dụ phức tạp hơn - regexp tìm web domain.
- Ta xét thấy domain là bao gồm sự lặp lại của các words, 1 dot sau mỗi words trừ word ở cuối.
- smith.users.mail.com, users.mail.com...
- Ta sẽ có pattern sau : /(\w+\.)+\w+/g

> let regexp = /(\w+\.)+\w+/g;
> alert( "site.com my.site.com".match(regexp) ); // site.com,my.site.com

- Nhưng nếu doamin có hyphen thì sẽ ko works vì \w sẽ ko có chứa -
- Ta có thể fix như sau : ([\w-]+\.)+\w+


# =========================== Ex : email ==================================
- emai sẽ có format như sau : name@domain
- name có thể là bất cứ ký tự gì.
- Ta sẽ dùng lại pattern domain ở trên.

> let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
> alert("my@mail.com @ his@site.com.uk".match(regexp)); // my@mail.com, his@site.com.uk

-   pateern này ko thật sự hoàn hảo

# =========================== Ex : Parentheses contents in the match ==================================
- Parentheses được đánh số từ trái qua phải. Search engine sẽ ghi nhớ content được match và cho phép lấy ra ở result.

  + At index 0: the full match.
  + At index 1: the contents of the first parentheses.
  + At index 2: the contents of the second parentheses.
  + …and so on…

- ví dụ , ta muốn tìm HTML tags : <.*?>
- Sẽ thuận tiện hơn nếu ta có thể lấy được tên thẻ. ta sẽ dùng : <(.*?)>

> let str = '<h1>Hello, world!</h1>';
> let tag = str.match(/<(.*?)>/);
> alert( tag[0] ); // <h1>
> alert( tag[1] ); // h1


# =========================== Nested groups ==================================
- Parentheses có thể được nested, trong trường hợp này việc đánh số cũng từ trái qua phải.
- Ví dụ : <(([a-z]+)\s*([^>]*))>

> let str = '<span class="my">';
> let regexp = /<(([a-z]+)\s*([^>]*))>/;
> let result = str.match(regexp);
> alert(result[0]); // <span class="my">
> alert(result[1]); // span class="my"
> alert(result[2]); // span
> alert(result[3]); // class="my"



# =========================== Optional groups ==================================
- Kể cả nếu 1 group là optional và ko tồn tại trong match thì result array tương ứng sẽ là các undefined.

> let match = 'a'.match(/a(z)?(c)?/);
> alert( match.length ); // 3
> alert( match[0] ); // a (whole match)
> alert( match[1] ); // undefined
> alert( match[2] ); // undefined

- (z)?(c)? là các optional có thể có hoặc ko .

> let match = 'ac'.match(/a(z)?(c)?/)
> alert( match.length ); // 3
> alert( match[0] ); // ac (whole match)
> alert( match[1] ); // undefined, because there's nothing for (z)?
> alert( match[2] ); // c



# =========================== Searching for all matches with groups: matchAll ==================================
__NOTE__ : matchAll là new và cần phải polyfill. https://github.com/ljharb/String.prototype.matchAll.

- Khi ta search all match sử dụng g thì match method sẽ ko return content đối với group.
- Ví dụ :

> let str = '<h1> <h2>';
> let tags = str.match(/<(.*?)>/g);
> alert( tags ); // <h1>,<h2>

- Kết quả trả về là array các matches, nhưng lại ko có chi tiết về từng item.
- Ta sẽ, sử dụng matchAll(regexp), giống như match nhưng sẽ có 3 điểm khác biệt.

  + Nó không trả về array mà trả về 1 iterable object.
  + Khi có flag g , nó sẽ trả về mỗi match là 1 array với groups.
  + Nếu ko có match , nó sẽ ko trả về null mà trả về empty iterable object.

> let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
> // results - is not an array, but an iterable object
> alert(results); // [object RegExp String Iterator]
> alert(results[0]); // undefined (*)
> results = Array.from(results); // let's turn it into array
> alert(results[0]); // <h1>,h1 (1st tag)
> alert(results[1]); // <h2>,h2 (2nd tag)

- Mỗi match được return bởi matchAll đều có format giống với format của match mà ko có g.
- có index và input.

> let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
> let [tag1, tag2] = results;
> alert( tag1[0] ); // <h1>
> alert( tag1[1] ); // h1
> alert( tag1.index ); // 0
> alert( tag1.input ); // <h1> <h2>

# =========================== Named groups ==================================
- Để nhớ được group bằng con số thì hơi khó.
- Ta sẽ dùng tên, bắng cách đặt : ?<name> ở ngay sau dấu (

> let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
> let str = "2019-04-30";
>
> let groups = str.match(dateRegexp).groups;
>
> alert(groups.year); // 2019
> alert(groups.month); // 04
> alert(groups.day); // 30

- Ta thấy các groups sẽ nằm trong .groups property.
- Ví dụ matchAll

> let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
> let str = "2019-10-30 2020-01-01";
> let results = str.matchAll(dateRegexp);
> for(let result of results) {
>   let {year, month, day} = result.groups;
>   alert(`${day}.${month}.${year}`);
>   // first alert: 30.10.2019
>   // second: 01.01.2020
> }


# =========================== Capturing groups in replacement ==================================
- Phương thức str.replace(regexp, replacement) cho phép ta dùng parentheses contents trong replacement string.
- Bằng cách sử dụng $n, n là số thứ tự group.


> let str = "John Bull";
> let regexp = /(\w+) (\w+)/;
> alert( str.replace(regexp, '$2, $1') ); // Bull, John

- Với name parentheses ta sẽ dùng : $<name>

> let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
> let str = "2019-10-30, 2020-01-01";
> alert( str.replace(regexp, '$<day>.$<month>.$<year>') );
> // 30.10.2019, 01.01.2020


# =========================== Non-capturing groups with ?: ==================================
- Đôi khi ta cần parentheses apply đúng quantifier và ko muốn content trong result.
- Group có thể được loại bỏ bằng cách : ?: ở vị trí bắt đầu
- Ví dụ ta muốn tìm (go)+ nhưng ta ko muốn content là (go) => (?:go)+


> let str = "Gogogo John!";
> // ?: excludes 'go' from capturing
> let regexp = /(?:go)+ (\w+)/i;
> let result = str.match(regexp);
> alert( result[0] ); // Gogogo John (full match)
> alert( result[1] ); // John
> alert( result.length ); // 2 (no more items in the array)
