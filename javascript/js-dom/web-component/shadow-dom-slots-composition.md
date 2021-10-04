- Nhiều style của component như tabs, menus, image galleries... cần nội dung để render.
- Giống như built-in browser <select> nhận các <option> items.

-   <custom-menu> sẽ như sau :

    + <custom-menu>
    +   <title>Candy menu</title>
    +   <item>Lollipop</item>
    +   <item>Fruit Toast</item>
    +   <item>Cup Cake</item>
    + </custom-menu>

- Sau đó component nên render property của nó như là 1 menu với title và item được cung cấp, handle menu events.
- Nếu ta dùng trong Shadow DOM, thì CSS styles từ document sẽ không apply. 
- Shadow DOM hỗ trợ <slot> elements, sẽ tự động filled bởi content từ light DOM.

# Named Slots.
- <user-card> shadow DOM cung cấp 2 slots, filled từ light DOM.

    + <script>
    + customElements.define('user-card', class extends HTMLElement {
    +   connectedCallback() {
    +     this.attachShadow({mode: 'open'});
    +     this.shadowRoot.innerHTML = `
    +       <div>Name:
    +         <slot name="username"></slot>
    +       </div>
    +       <div>Birthday:
    +         <slot name="birthday"></slot>
    +       </div>
    +     `;
    +   }
    + });
    + </script>
    + 
    + <user-card>
    +   <span slot="username">John Smith</span>
    +   <span slot="birthday">01.01.2001</span>
    + </user-card>

- Trong shadow DOM, <slot name="X"> định nghĩa 1 "insertion point" , 1 nơi mà element với slot="X" được render.
- Đây là DOM structure sau script :

    + <user-card>
    +   #shadow-root
    +     <div>Name:
    +       <slot name="username"></slot>
    +     </div>
    +     <div>Birthday:
    +       <slot name="birthday"></slot>
    +     </div>
    +   <span slot="username">John Smith</span>
    +   <span slot="birthday">01.01.2001</span>
    + </user-card>

-   Ta khởi tạo shadow DOM , dưới #shadow-root, element có cả 2 light và shadow DOM.
- Với mục đích render, mỗi <slot name="..."> trong shadow DOM , browser sẽ tìm slot="..." với cùng tên trong light DOM, Những element này được render bên trong slots.


    + <span slot="username">John Smith</span> => <slot name="username"></slot>
    + <span slot="birthday">01.01.2001</span> => <slot name="birthday"></slot>

- Kết quả này được gọi là "flattened" DOM (DOM phẳng):

- Nhưng flattened DOM tồn tại chỉ cho rendering và mục đích event-handling. 
- Nhưng nodes trong document thực chất không đi đâu cả.

    + // light DOM <span> nodes are still at the same place, under `<user-card>`
    + alert( document.querySelectorAll('user-card span').length ); // 2

- the flattened DOM có nguồn gốc từ shadow DOM bằng cách chèn slots. Nhưng js vẫn thấy document như nó, trước khi flattening.


__NOTE__ : Chỉ có top-level children mới có thể có slot="..." attribute. sẽ chỉ có con trực tiếp mới có tác dụng. nested sẽ bị loại bỏ.

    + <user-card>
    +   <span slot="username">John Smith</span>
    +   <div>
    +     <!-- invalid slot, must be direct child of user-card -->
    +     <span slot="birthday">01.01.2001</span>
    +   </div>
    + </user-card>

__NOTE__ : nếu có nhiều element trong light DOM với cùng slot name, chúng sẽ được appended trong slot theo thứ tự.
- Ví dụ :

    + <user-card>
    +   <span slot="username">John</span>
    +   <span slot="username">Smith</span>
    + </user-card>

- kết quả :

    + <user-card>
    +   #shadow-root
    +     <div>Name:
    +       <slot name="username">
    +         <span slot="username">John</span>
    +         <span slot="username">Smith</span>
    +       </slot>
    +     </div>
    +     <div>Birthday:
    +       <slot name="birthday"></slot>
    +     </div>
    + </user-card>

# Slot fallback content.
Nếu ta đặt 1 something vào 1 <slot> nó sẽ trở thành fallback, "default" content. Browser sẽ show nó nếu không có filter tương ứng trong light DOM.

    + <div>Name:
    +   <slot name="username">Anonymous</slot>
    + </div>

- Anonymous renders nếu không có slot="username" trong light DOM.

# Default slot : first unnamed.
- <slot> đầu tiên trong shadow DOM mà không có name là default "slot". Nó nhận tất cả các nodes không được slotted ở bát cứ đâu từ light DOM.
- Ví dụ : <user-card>  sẽ show all unslotted infomation về user :

    + <script>
    + customElements.define('user-card', class extends HTMLElement {
    +   connectedCallback() {
    +     this.attachShadow({mode: 'open'});
    +     this.shadowRoot.innerHTML = `
    +     <div>Name:
    +       <slot name="username"></slot>
    +     </div>
    +     <div>Birthday:
    +       <slot name="birthday"></slot>
    +     </div>
    +     <fieldset>
    +       <legend>Other information</legend>
    +       <slot></slot>
    +     </fieldset>
    +     `;
    +   }
    + });
    + </script>
    + 
    + <user-card>
    +   <div>I like to swim.</div>
    +   <span slot="username">John Smith</span>
    +   <span slot="birthday">01.01.2001</span>
    +   <div>...And play volleyball too!</div>
    + </user-card>

- Tất cả unslotted light DOM content được đưa vào "Other infomation" fieldset.
- Elements được appended vào slot theo thứ tự.
- The flattened sẽ như sau :

    + <user-card>
    +   #shadow-root
    +     <div>Name:
    +       <slot name="username">
    +         <span slot="username">John Smith</span>
    +       </slot>
    +     </div>
    +     <div>Birthday:
    +       <slot name="birthday">
    +         <span slot="birthday">01.01.2001</span>
    +       </slot>
    +     </div>
    +     <fieldset>
    +       <legend>Other information</legend>
    +       <slot>
    +         <div>I like to swim.</div>
    +         <div>...And play volleyball too!</div>
    +       </slot>
    +     </fieldset>
    + </user-card>

# Menu example.


    + <custom-menu>
    +   <span slot="title">Candy menu</span>
    +   <li slot="item">Lollipop</li>
    +   <li slot="item">Fruit Toast</li>
    +   <li slot="item">Cup Cake</li>
    + </custom-menu>

- shadow DOM template với slots

    + <template id="tmpl">
    +   <style> /* menu styles */ </style>
    +   <div class="menu">
    +     <slot name="title"></slot>
    +     <ul><slot name="item"></slot></ul>
    +   </div>
    + </template>

1. <span slot="title"> sẽ vào <slot name="title">.
2. Có nhiều <li slot="item"> trong template, nhưng chỉ có 1 <slot name="title"> trong template. Nên các <li slot="item"> được appended vào <slot name="item"> theo thứ tự.

- The flattened DOM trở thành :

    + <custom-menu>
    +   #shadow-root
    +     <style> /* menu styles */ </style>
    +     <div class="menu">
    +       <slot name="title">
    +         <span slot="title">Candy menu</span>
    +       </slot>
    +       <ul>
    +         <slot name="item">
    +           <li slot="item">Lollipop</li>
    +           <li slot="item">Fruit Toast</li>
    +           <li slot="item">Cup Cake</li>
    +         </slot>
    +       </ul>
    +     </div>
    + </custom-menu>

- Một điều chú ý là : trong 1 valid DOM, <li> phải là direct child của <ul>
- Ta sẽ thêm sự kiện như sau :

    + customElements.define('custom-menu', class extends HTMLElement {
    +   connectedCallback() {
    +     this.attachShadow({mode: 'open'});
    + 
    +     // tmpl is the shadow DOM template (above)
    +     this.shadowRoot.append( tmpl.content.cloneNode(true) );
    + 
    +     // we can't select light DOM nodes, so let's handle clicks on the slot
    +     this.shadowRoot.querySelector('slot[name="title"]').onclick = () => {
    +       // open/close the menu
    +       this.shadowRoot.querySelector('.menu').classList.toggle('closed');
    +     };
    +   }
    + });

# Updating slots.
- Nếu ta muốn add/remove menu items 1 cách linh động từ outer code thì sẽ như thế nào ?

    + Browser sẽ theo dõi slots và updates the redering nếu slotted elements được added/removed.

- Ngoài ra, vì light DOM nodes ko được copied nhưng chỉ là rendered trong slot, các thay đổi bên trong chúng sẽ ngay lập tức hiển thị.
- Nếu component code muốn biết về slot thay đổi, slotchange event sẽ được sử dụng.

    + <custom-menu id="menu">
    +   <span slot="title">Candy menu</span>
    + </custom-menu>
    + 
    + <script>
    + customElements.define('custom-menu', class extends HTMLElement {
    +   connectedCallback() {
    +     this.attachShadow({mode: 'open'});
    +     this.shadowRoot.innerHTML = `<div class="menu">
    +       <slot name="title"></slot>
    +       <ul><slot name="item"></slot></ul>
    +     </div>`;
    + 
    +     // shadowRoot can't have event handlers, so using the first child
    +     this.shadowRoot.firstElementChild.addEventListener('slotchange',
    +       e => alert("slotchange: " + e.target.name)
    +     );
    +   }
    + });
    + 
    + setTimeout(() => {
    +   menu.insertAdjacentHTML('beforeEnd', '<li slot="item">Lollipop</li>')
    + }, 1000);
    + 
    + setTimeout(() => {
    +   menu.querySelector('[slot="title"]').innerHTML = "New menu";
    + }, 2000);
    + </script>

- Ở đây có 2 slotchange events :

    + Tại thời điểm khởi tạo : slotchange : title => kích ngay lập tức, khi slot="title" từ light DOM được đưa vào slot tương ứng.
    + Sau 1 giây : slotchange : item => kích khi 1 new <li slot="item"> được added.

# slot API.
- 
