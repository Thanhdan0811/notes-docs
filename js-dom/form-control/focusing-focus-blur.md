- 1 element nhận focus khi user click vào nó hoặc sử dụng tab key vào nó. Còn có autofocus là HTML attribute sẽ bắt focus vào element khi page load.
- Thời điểm mất focus hay blur còn quan trọng hơn. Đó là khi user click ở nơi khác hoặc tab đến element khác.
- focus có thể hiểu là sẵn sàng nhận data, blur có thể hiểu là data đã đc enter.

# Events focus/blur.
- focus event được gọi khi focusing 
- blur event được gọi khi mất focus.
- HTML hiện đại cho phép ta thực hiện validations bằng cách sử dụng input attributes như required, pattern.... 

# Methods focus / blur.
- Các methods elem.focus(), elem.blur() sẽ set/unset focus element.
- Nó hoạt động trên mọi browser trừ firefox.

    + input.onblur = function() {
    +     if (!this.value.includes('@')) { // not email
    +       // show the error
    +       this.classList.add("error");
    +       // ...and put the focus back
    +       input.focus();
    +     } else {
    +       this.classList.remove("error");
    +     }
    +   };

- Nếu ta enter cái gì đó vào input và sử dụng tab hoặc click vào nơi khác khỏi input, thì onblur sẽ bắt focus lại.
__NOTE__ : ta không thể chặn losing focus bằng cách gọi event.preventDefault() trong onblur vì onblur hoạt động sau khi element lost focus.
- Mất focus có thể xảy ra do nhiều nguyên nhân, 1 trong số đó là khi user click vào nơi khác. Nhưng JS bản thân nó cũng có thể là nguyên nhân gây mất focus. Ví dụ :

    + 1 alert sẽ chuyển focus đến nó, nên nó dẫn đến mất focus trên element (blur event) và khi alert mất, focus comeback (focus event).
    + Nếu element bị removed DOM, điều này cũng dẫn đến mất focus. Nếu element được chèn lại thì focus cũng ko trở lại.

# Allow focusing on any element : tabindex.
- Về mặc định nhiều element sẽ không hỗ trợ focusing. 
- Có thể sẽ khác so với 1 số browser, nhưng có 1 điều luôn đúng là focus/blur sẽ được hỗ trợ với các element sau khi user tương tác với chúng đó là : <button>, <input>, <select>, <a>...
- Mặt khác, element tồn tại để format something như <div>, <span>, <table> lại không thể focus theo mặc định. elem.focus() không hoạt động với chúng, focus/blur event sẽ không bao giờ trigger.


- Điều này có thể thay đổi khi sử dụng HTML attribute đó là : tabindex.
- Bất cứ element nào cũng có thể được focus nếu có tabindex.Value của attribute là số thứ tự của element khi Tab hay cái gì đó để chuyển đổi giữa chúng.
- Thứ tự switch như sau : elements với tabindex từ 1 và lớn hơn sẽ đi trước, và sau đó là element không có tabindex (ví dụ input). Nếu có cùng tabindex thì sẽ theo thứ tự document.

__NOTE__ : Có 2 values tabindex đặc biệt :

    + tabindex = "0" : đặt element ở giữa những elements không có tabindex, điều đó có nghĩa là khi ta switch elements, elements với tabindex = 0 sẽ đến sau tabindex >= 1. Thường được dùng để khiến elements có thể focus, nhưng vẫn giữ default order, 
    + tabindex="-1" : chỉ cho phép programmatic focusing vào 1 element. Tab key sẽ ignore elements nhưng elem.focus() sẽ hoạt động.
     
- Ví dụ :

    + <ul>
    +   <li tabindex="1">One</li>
    +   <li tabindex="0">Zero</li>
    +   <li tabindex="2">Two</li>
    +   <li tabindex="-1">Minus one</li>
    + </ul>
    + 
    + <style>
    +   li { cursor: pointer; }
    +   :focus { outline: 1px dashed green; }
    + </style>

- Nếu ta click focus vào "One", và sử dụng tab thì thứ tự sẽ là 1 - 2 - 0. -1 sẽ không được focus với tab trừ khi click vào.
- Ta có thể dùng js để add tabindex như sau : elem.tabIndex.

# Delegation: focusin/focusout
- Event focus và blur không có bubble.
- Có 2 cách để giải quyết : 
- Cách 1 :focus/blur không bubble nhưng nó lại có thể lan truyền xuống theo capturing pharse. ví dụ :

    + <form id="form">
    +   <input type="text" name="name" value="Name">
    +   <input type="text" name="surname" value="Surname">
    + </form>
    + 
    + <style> .focused { outline: 1px solid red; } </style>
    + 
    + <script>
    +   // put the handler on capturing phase (last argument true)
    +   form.addEventListener("focus", () => form.classList.add('focused'), true);
    +   form.addEventListener("blur", () => form.classList.remove('focused'), true);
    + </script>

- Cách 2 : Sử dụng focusin/focusout events. Giống hệt như focus/blur nhưng chúng bubble. NOTE : phải được gán bằng cách dùng elem.addEventListener không phải on<event>.

    + <form id="form">
    +   <input type="text" name="name" value="Name">
    +   <input type="text" name="surname" value="Surname">
    + </form>
    + 
    + <style> .focused { outline: 1px solid red; } </style>
    + 
    + <script>
    +   form.addEventListener("focusin", () => form.classList.add('focused'));
    +   form.addEventListener("focusout", () => form.classList.remove('focused'));
    + </script>
