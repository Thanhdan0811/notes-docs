- Ở modern : scripts thường sẽ có size lớn hơn HTML.
- Khi browser loads HTML và đến <script> tag, nó không thể tiếp tục building DOM. Nó phải execute script ngay. Điều này cũng xảy ra với external script : browser sẽ phải đợi download, execute script và sau đó sẽ xử lý page tiếp.
- Điều này dẫn đến 2 vấn đề.

    + Scripts không thể thấy DOM elements dưới nó nên ko thể add handlers.
    + Nếu có 1 script ở top của page, nó sẽ block page. Và nó sẽ ko thể thấy content.

- Ta có thể đặt script ở dưới bottom nhưng vẫn sẽ có thể phát sinh ngoài ý muốn như HTML dài, mạng chậm.
- Ta sẽ dùng 2 <script> attributes để giải quyết là defer và async.

# defer.
- defer attribute sẽ nói với browser là không cần phải đợi script. Thay vào đó, browser có thể tiếp tục xử lý HTML và build DOM. script sẽ load ở background và run khi DOM fully built.

    + <p>...content before script...</p>

    + <script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

    + <!-- visible immediately -->
    + <p>...content after script...</p>


- Nói cách khác : defer attribute sẽ ko bao h block page, defer sẽ luôn execute khi DOM is ready (trước lúc DOMContentLoaded event).


    + <p>...content before scripts...</p>
    + <script>
    +   document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
    + </script>
    + <script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
    + <p>...content after scripts...</p>

- Page content sẽ hiện ra ngay lập tức. DOMContentLoaded event handler sẽ chờ deferred script sẽ chỉ kích khi script được downloaded và executed.

__NOTE__ : deferred scripts sẽ giữ relative order giống như script regular. và defer attribute sẽ chỉ hoạt động với external scripts (ignore nếu <script> không có src)

>    + <script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
>    + <script defer src="https://javascript.info/article/script-async-defer/small.js"></script>

- Dù cho small có load trước nhưng vẫn sẽ đợi long thực thi trước.

    => thứ tự : defer => DOMContentLoaded.

# async.
- async attribute khá giống defer, nhưng nó sẽ có những điểm khác.
- async có nghĩa là script hoàn toàn indepentdent.
- browser sẽ không block bất cứ script async nào.

- Các scripts khác sẽ không đợi async script và ngược lại.
- DOMContentLoaded không đợi async và ngược lại.
- Nói cách khác : async script sẽ load ở background và run khi ready. Nó sẽ ko đợi ai và ko ai đợi nó.
- async sẽ chạy theo kiểu load trước chạy trước.

# Dynamic scripts.
- Có 1 cách khác để add script vào page.
- Tạo và append vào page dùng js.

    + let script = document.createElement('script');
    + script.src = "/article/script-async-defer/long.js";
    + document.body.append(script); // (*)

- script sẽ start load ngay khi được append vào document.

__NOTE__ : Dynamic script hoạt động như "async" theo mặc định.

- không đợi lẫn nhau và load first run first.
- Nhưng ta có thể thay đổi bằng cách : script.async = false. Lúc này script sẽ chạy theo order trong document. như defer.

    + function loadScript(src) {
    +   let script = document.createElement('script');
    +   script.src = src;
    +   script.async = false;
    +   document.body.append(script);
    + }
    + 
    + // long.js runs first because of async=false
    + loadScript("/article/script-async-defer/long.js");
    + loadScript("/article/script-async-defer/small.js");
