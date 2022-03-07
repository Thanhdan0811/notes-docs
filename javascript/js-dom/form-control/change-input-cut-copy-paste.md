# Event : change.
- change event sẽ kích khi element finished changing.
- Với input text điều này có nghĩa là khi nó mất focus.
- Với các element khác như select, input: checkbox, radio : nó sẽ kích ngay sau khi selection thay đổi. Tức là nếu giá trị không thay đổi sẽ ko kích.

# Event : input.
- input event sẽ kích ngay sau khi value bị thay đổi bởi user.
- Không giống như sự kiện keyboard, thì nó kích mỗi khi value change. dù là paste từ chuột hay keyboard.

    + <input type="text" id="input"> oninput: <span id="result"></span>
    + <script>
    +   input.oninput = function() {
    +     result.innerHTML = input.value;
    +   };
    + </script>

- input event sẽ không kích với các thao tác ko làm thay đổi value như các nút mũi tên.
__NOTE__ : input event xảy ra sau khi value bị thay đổi, nên ta sẽ không thể dùng event.preventDefault().

# Event : cut, copy, paste.
- Những event này xảy ra khi cutting/copying/pasting 1 value.
- Chúng thuộc về ClipboardEvent class và cho phép access data được copied/pasted.
- Ta cũng có thể dùng event.preventDefault() để loại bỏ action, như vậy không có gì được copied/pasted.

    + <input type="text" id="input">
    + <script>
    +   input.oncut = input.oncopy = input.onpaste = function(event) {
    +     alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
    +     return false;
    +   };
    + </script>

- NOTE : nó có thể copy/paste không chỉ là text mà có thể là bất cứ thứ gì. Ta có thê copy file trong OS system.
- Điều này xảy ra là do clipboardData thực hiện DataTransfer thường được dùng để drag'n'drop và copy/paste. ta có thể tham khảo https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface
- 