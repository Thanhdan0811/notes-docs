- built-in <template> element được dùng như là 1 nơi lưu trữ cho HTML markup templates.
- browser sẽ ignore content của <template>, sẽ chỉ check syntax nhưng ta có thể dùng ở js.
- Đầu tiên, content của <template> có thể là bất cứ valid HTML nào.
- Thông thường nếu browser gặp 1 invalid DOM thì nó sẽ fix lại. Nhưng <template> sẽ giữ chính xác nội dung của nó.
- <template> : style sẽ không apply, script sẽ ko execute, <video autoplay> sẽ không hoạt động...

# Inserting Template.
- template content sẽ available trong content property của nó như là 1 DocumentFragment - 1 special type của DOM node.
- Ta có thể xem nó như là bất cứ DOM node khác, Ngoại trừ việc khi ta insert nó ở đâu đó thì children của nó sẽ được insert chứ không có nó.


    + <template id="tmpl">
    +   <script>
    +     alert("Hello");
    +   </script>
    +   <div class="message">Hello, world!</div>
    + </template>
    + 
    + <script>
    +   let elem = document.createElement('div');
    + 
    +   // Clone the template content to reuse it multiple times
    +   elem.append(tmpl.content.cloneNode(true));
    + 
    +   document.body.append(elem);
    +   // Now the script from <template> runs
    + </script>

- Ta cùng preview lại code sau ;

    + <template id="tmpl">
    +   <style> p { font-weight: bold; } </style>
    +   <p id="message"></p>
    + </template>
    + 
    + <div id="elem">Click me</div>
    + 
    + <script>
    +   elem.onclick = function() {
    +     elem.attachShadow({mode: 'open'});
    + 
    +     elem.shadowRoot.append(tmpl.content.cloneNode(true)); // (*)
    + 
    +     elem.shadowRoot.getElementById('message').innerHTML = "Hello from the shadows!";
    +   };
    + </script>

- Ở dòng (*) khi ta clone và insert tmpl.content nhử là DocumentFragment, children của nó sẽ được insert chứ không phải nó.