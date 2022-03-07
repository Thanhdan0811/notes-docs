- Lifecycle của 1 HTML page có 3 events quan trọng :

    + DOMContentLoaded : browser fully loaded HTML, và DOM tree được built, nhưng các source như img, stylesheet vẫn có thể chưa đc load.
    + load : không chỉ HTML được loaded mà còn các external resource : images, style...
    + beforeunload/unload : user rời page.

- Các events sau sẽ hữu dụng :

    + DOMContentLoaded event : DOM đã ready, từ đó handler có thể lookup DOM nodes và khởi tạo giao diện.
    + load event : external resource đã được loaded, từ đó styles được applied, image sizes được xác định...
    + beforeunload event : user đang rời đi, ta có thể check liệu user có lưu thay đổi và hỏi xem liệu có muốn rời trang thật ko.
    + unload : user gần như rời đi, nhưng ta vẫn có thể khởi tạo 1 số hoạt động, như gửi số liệu thống kê.


# DOMContentLoaded.
- DOMContentLoaded event xảy ra trên document object. ta có thể addEventListener để bắt nó.

    + document.addEventListener("DOMContentLoaded", function(e){});

- DOMContentLoaded handler sẽ chạy khi document is loaded nên nó có thể thấy được mọi element. Nhưng nó không đợi cho image load nếu image được load từ server.

# DOMContentLoaded and scripts.
- Khi browser xử lý 1 HTML-document và đến <script> tag, sẽ cần execute trước khi tiếp tục building DOM, Đây là biện pháp bảo vệ, 

    + <script>
    +   document.addEventListener("DOMContentLoaded", () => {
    +     alert("DOM ready!");
    +   });
    + </script>
    + 
    + <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script>
    + 
    + <script>
    +   alert("Library loaded, inline script executed");
    + </script>

- DOMContentLoaded chắc chắn sẽ xảy ra ngay sau khi các script.
- Ở ví dụ trên, ta sẽ thấy "Library loaded..." và sau đó là "DOM ready!"(all script được executed).
__NOTE__ : có 2 ngoại lệ mà script sẽ ko block DOMContentLoaded.

    + Script với async attribute, sẽ ko block DOMContentLoaded.
    + Scripts được tạo ra từ document.createElement('script') và được add vào webpage cũng sẽ ko block event.


# DOMContentLoade adn styles.
- External style sheets không gây ảnh hưởng đến DOM, nên DOMContentLoaded sẽ không đợi chúng.
- Nhưng có 1 ngoại lệ, nếu ta có 1 script ở ngay sau style, thì script sẽ phải đợi cho đến khi stylesheet loads.

    + <link type="text/css" rel="stylesheet" href="style.css">
    + <script>
    +   // the script doesn't not execute until the stylesheet is loaded
    +   alert(getComputedStyle(document.body).marginTop);
    + </script>

- Lý do là vì script sẽ cần lấy các tọa độ, các thuộc tính... nên nó sẽ đợi.
- DOMContentLoaded đợi các scripts và cũng đợi style trước nó.

# Built-in browser autofill.
- Firefox, Chrome, Opera autofill forms trong DOMContentLoaded.
- Nếu DOMContentLoaded bị hoãn lại do long-loading scripts thì autofill cũng sẽ đợi.


# window.onload.
- load event xảy ra trên window object, sẽ kích mỗi khi toàn bộ page được load bao gồm cả styles, images và các resources khác. Event này được sử dụng thông qua onload property.


# window.onunload.
- Khi visitor rời page, unload event sẽ kích trên window.Ta có thể thực hiện 1 số task mà không liên quan đến delay như đóng popup windows.
- 1 ngoại lệ là gửi đi các phân tích.
- Giả sử, ta muốn thu thập data về cách mà ng dùng sử dụng page. 
- Thông thường, unload event là khi user rời page, ta sẽ muốn lưu data lên server.
- Tồn tại 1 special là navigator.sendBeacon(url, data) method có thể dùng, https://w3c.github.io/beacon/
- Nó sẽ gửi data ở background, việc chuyển trang sẽ không bị delay: browser sẽ rời page nhưng vẫn thực hiện sendBeacon.

    + let analyticsData = { /* object with gathered data */ };
    + window.addEventListener("unload", function() {
    +   navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
    + });

- request sẽ được gửi dưới method là POST.
- Ta có thể gửi string, forms...
- data sẽ bị giới hạn là 64Kb

- Khi sendBeacon request finished, browser đã thoát khỏi page, nên ta sẽ ko nhận được response.
- Có 1 cờ là keepalive flag cho việc thực hiện các công việc theo kiểu "after-page-left" request trong fetch method.
- Ta không thể ngăn việc chuyển page ở đây.

# window.onbeforeunload.
- Nếu 1 visitor bắt đầu chuyển hướng rời page hoặc đóng window, beforeunload handler sẽ yêu cầu thêm thông tin xác nhận.
- Nếu ta cancel event, browser sẽ hỏi user xem có thực sự muốn đóng ko.

    + window.onbeforeunload = function() {
    +   return false;
    + };

- Với old-browser khi return về string thì có thể sẽ hiện string đó ra, nhưng ở hiện tại thì có thể sẽ ko có.


# readyState.
- Sẽ ra sao nếu ta set DOMContentLoaded handler sau khi document đã được loaded. => nó sẽ ko bao giờ runs.
- Sẽ có case khi ta không chắc chắn lúc nào thì document ready hay ko.
- document.readyState propety sẽ cho ta biết về current loading state.
- Có 3 value có thể có :

    + "loading" : document is loading.
    + "interactive" : document được fully read.
    + "complete" : document được fully read và all resouces như images cũng được load.

- Do đó, ta có thể check readyState và setup sự kiện.

    + function work() { /*...*/ }
    + if (document.readyState == 'loading') {
    +   // still loading, wait for the event
    +   document.addEventListener('DOMContentLoaded', work);
    + } else {
    +   // DOM is ready!
    +   work();
    + }

- readystatechange event là 1 cơ chế theo dõi sự thay đổi của document loading state.

    + <script>
    +   log('initial readyState:' + document.readyState);
    + 
    +   document.addEventListener('readystatechange', () => log('readyState:' + document.readyState));
    +   document.addEventListener('DOMContentLoaded', () => log('DOMContentLoaded'));
    + 
    +   window.onload = () => log('window onload');
    + </script>
    + 
    + <iframe src="iframe.html" onload="log('iframe onload')"></iframe>
    + 
    + <img src="http://en.js.cx/clipart/train.gif" id="img">
    + <script>
    +   img.onload = () => log('img onload');
    + </script>

- ouput ở trên sẽ là 
    
    + [1] initial readyState:loading
    + [2] readyState:interactive
    + [2] DOMContentLoaded
    + [3] iframe onload
    + [4] img onload
    + [4] readyState:complete
    + [4] window onload

- number trong [] diễn tả thời gian tương đối nó xảy ra.
- document.readyState trở thành interactive ngay trước khi DOMContentLoaded.
- document.readyState trở thành complete khi all resources (iframe and img) được loaded. Ở đay ta có thể thấy nó xảy ra cùng thời gian với img.onload và window.onload.
- Switching thành complete state có nghĩa là window.onload. Chỉ khác ở window.onload luôn hoạt động sau tất cả load handlers khác.