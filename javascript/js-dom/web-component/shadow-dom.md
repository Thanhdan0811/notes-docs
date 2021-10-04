- shadow DOM phục vụ cho việc đóng gói. Nó cho phép 1 component có 1 "shadow" DOM tree của riêng nó.Từ đó không thể vô tình được access từ main document có local style rule...

# Build-in shadow DOM
- Ta xét <input type="range"> , browser sử dụng DOM/CSS nội để vẽ lên nó.
- #shadow-root được gọi là "shadow DOM".
- Ta không thể lấy built-in shadow DOM element bằng regular JS hay selector.

    + input::-webkit-slider-runnable-track {
    +   background: red;
    + }
- Ta có thể dùng cách trên để style nhưng đây không phải là cách standard.

# Shadow tree.
- 1 DOM element có thể có 2 loại DOM subtrees.

    + Light tree : là 1 regular DOM subtree, tạo bởi HTML children. Tất cả các subtree mà ta đã thấy ở các ví dụ trước là light tree.
    + Shadow tree : là 1 hidden DOM subtree không được phản ánh trong HTML , ẩn khỏi mắt thường.

- Nếu element có cả 2 loại trên, thì browser sẽ chỉ render shadow tree.
- Nhưng ta có thể setup 1 loại tổ hợp của 2 loại trên.
- Shadow tree có thể được dùng trong Custom Element để ẩn component internals và apply component-local style.

    + <script>
    + customElements.define('show-hello', class extends HTMLElement {
    +   connectedCallback() {
    +     const shadow = this.attachShadow({mode: 'open'});
    +     shadow.innerHTML = `<p>
    +       Hello, ${this.getAttribute('name')}
    +     </p>`;
    +   }
    + });
    + </script>
    + 
    + <show-hello name="John"></show-hello>

- Ta gọi elem.attachShadow({mode:...}) khởi tạo 1 shadow tree.
- Có 2 hạn chế :
    + Ta chỉ có thể tạo 1 shadow root với 1 element.
    + elem phải là custom element, hoặc 1 trong các elements : article, aside, blockquote, body, div, footer, h1 đến h6, header, main, nav, p , section. 

- mode options sets mức độ đóng gói. Nó phải là 1 trong 2 values :
    + "open" : the shadow root is available as elem.shadowRoot. bất cứ code nào cũng có thể access shadow của element.
    + "closed" : elem.shadowRoot sẽ luôn là null.

- Ta chỉ có thể access shadow DOM thông qua tham chiếu được trả về bởi attachShadow. 
- Element với 1 shadow root được gọi là "shadow tree host" và available thông qua shadow root : host property.

    + // assuming {mode: "open"}, otherwise elem.shadowRoot is null
    + alert(elem.shadowRoot.host === elem); // true

# Encapsulation.
- Shadow DOM có sự phân định mạnh mẽ với main document.

    + Shadow DOM elements không visible với querySelector từ light DOM.Đặc biệt, shadow DOM elements có thể có ids xung đột với light DOM. Chúng phải là duy nhất trong shadow tree.
    + Shadow DOM có stylesheet riêng. Style rule từ DOM sẽ không apply.

# Reference 
- DOM: https://dom.spec.whatwg.org/#shadow-trees
- Compatibility: https://caniuse.com/#feat=shadowdomv1
- Shadow DOM is mentioned in many other specifications, e.g. DOM Parsing specifies that shadow root has innerHTML.