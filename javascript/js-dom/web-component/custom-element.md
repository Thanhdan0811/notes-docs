- Ta có thể tạo các custom HTML element được mô tả bởi class riêng của ta.
- Có 2 loại custom elements.

    + Autonomous custom element : tất cả elements mới, kế thừa từ HTMLElement class
    + Customized built-in elemnts : kế thừa từ built-in element như HTMLButtonElement.

- Để tạo custom element, ta cần cho browser biết một số thông tin chi tiết như nó được show như thế nào, cần làm gì khi element được add hoặc remove khỏi page...
- Việc này được thực hiện bằng cách tạo 1 class với các special methods. Sẽ chỉ có vài method và chúng là optioals.
- Ta sẽ xem xét autonomous custom element trước.

    class MyElement extends HTMLElement {
      constructor() {
        super();
        // element created => tạo element
      }

      connectedCallback() {
        // browser calls this method when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)
        // browser gọi method này khi element được add vào document.
        // (có thể được gọi nhiều lần nếu 1 element được tạo hay xóa nhiều lần)
      }

      disconnectedCallback() {
        // browser calls this method when the element is removed from the document
        // (can be called many times if an element is repeatedly added/removed)
        // browser gọi method khi element bị remove khỏi document
        // (có thể được gọi nhiều lần nếu 1 element được gọi nhiều lần)
      }

      static get observedAttributes() {
        return [/* array of attribute names to monitor for changes */];
        // trả về array các attribute names để monitor cho việc thay đổi
      }

      attributeChangedCallback(name, oldValue, newValue) {
        // called when one of attributes listed above is modified
        // được gọi khi 1 trong các attributes listed ở trên bị điều chỉnh.
      }

      adoptedCallback() {
        // called when the element is moved to a new document
        // (happens in document.adoptNode, very rarely used)
        // được gọi khi element bị moved đến 1 new document
        // (xảy ra trong document.adoptNode, rất ít dùng)
      }

      // there can be other element methods and properties
    }

- Sau đó ta cần đăng ký element :

    + // let the browser know that <my-element> is served by our new class
    + customElements.define("my-element", MyElement);

- Lúc này, bất cứ HTML elements với tag <my-element>, 1 instance của MyElement được tạo, và các methods ở trên được gọi.
- Ta cũng có thể dùng : document.createElement('my-element'); 

__NOTE__ : custom element name phải chứa ký tự "-" trong name.


## Example : "time-format"
- Ta sẽ tạo <time-format> :

  + <script>
  + class TimeFormatted extends HTMLElement { // (1)
  + 
  +   connectedCallback() {
  +     let date = new Date(this.getAttribute('datetime') || Date.now());
  + 
  +     this.innerHTML = new Intl.DateTimeFormat("default", {
  +       year: this.getAttribute('year') || undefined,
  +       month: this.getAttribute('month') || undefined,
  +       day: this.getAttribute('day') || undefined,
  +       hour: this.getAttribute('hour') || undefined,
  +       minute: this.getAttribute('minute') || undefined,
  +       second: this.getAttribute('second') || undefined,
  +       timeZoneName: this.getAttribute('time-zone-name') || undefined,
  +     }).format(date);
  +   }
  + 
  + }
  + 
  + customElements.define("time-formatted", TimeFormatted); // (2)
  + </script>
  + 
  + <!-- (3) -->
  + <time-formatted datetime="2019-12-01"
  +   year="numeric" month="long" day="numeric"
  +   hour="numeric" minute="numeric" second="numeric"
  +   time-zone-name="short"
  + ></time-formatted>

- Class chỉ có 1 method connectedCallback() - browser gọi nó khi <time-formatted> element được add vào page. Ta đăng ký element mới này bằng customElements.define(tag, class) và ta có thể dùng nó ở mọi nơi.

__NOTE__ : nếu browser gặp bất cứ <time-formatted> element trước khi customElements.define thì đó sẽ không phải là lỗi. Nhưng element lúc này sẽ là unknown, giống như bất cứ non-standard khác.
- Các "undefined" element có thể được style CSS bằng cách : :not(:defined)
- Khi customElement.define được gọi , chúng sẽ được "upgraded" 1 new instance của TimeFormatted được tạo cho mỗi cái.và connectedCallback được gọi. Và chúng sẽ trở thành :define.
- Để lấy các thông tin về custom element sẽ có các methods :

  + customElements.get(name) : trả về class cho custom element với name được cung cấp.
  + customElements.whenDefined(name) : trả về promise sẽ resolve (không có value) khi 1 custom element với name được cung cấp được defined.

__NOTE__ : Trong ví dụ trên, element content được rendered trong connectedCallback chứ không phải constructor, Lý do là vì khi constructor được gọi thì lúc này là khá sớm. Element được tạo nhưng browser chưa xử lý hay gán attribute, ở giai đoạn này nếu gọi getAttribute sẽ trả về null.
- The connectedCallback được kích khi element được add vào document. Không chỉ là appended vào element khác như là 1 child mà là khi nó trở thành 1 phần của page.


## Observing attributes.
- Ở ví dụ trên, sau khi element được rendered thì các attrtibute kể từ lúc này nếu có thay đổi thì sẽ không có tác dụng. Thông thường khi ta thay đổi attribute như a.href ta mong sự thay đổi sẽ ngay lập tức xảy ra.

_ Ta có thể quan sát (observe) attributes bằng cách cung cấp hay return về list các attributes của nó trong __observedAttributes()__ static getter.

- Với các attributes có trong list, __attributeChangedCallback__ được gọi khi chúng được thay đổi hay điều chỉnh. Nó sẽ không kích với các attributes không có trong list.

- Ví dụ sửa chửa :

  + <script>
  + class TimeFormatted extends HTMLElement {
  + 
  +   render() { // (1)
  +     let date = new Date(this.getAttribute('datetime') || Date.now());
  + 
  +     this.innerHTML = new Intl.DateTimeFormat("default", {
  +       year: this.getAttribute('year') || undefined,
  +       month: this.getAttribute('month') || undefined,
  +       day: this.getAttribute('day') || undefined,
  +       hour: this.getAttribute('hour') || undefined,
  +       minute: this.getAttribute('minute') || undefined,
  +       second: this.getAttribute('second') || undefined,
  +       timeZoneName: this.getAttribute('time-zone-name') || undefined,
  +     }).format(date);
  +   }
  + 
  +   connectedCallback() { // (2)
  +     if (!this.rendered) {
  +       this.render();
  +       this.rendered = true;
  +     }
  +   }
  + 
  +   static get observedAttributes() { // (3)
  +     return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
  +   }
  + 
  +   attributeChangedCallback(name, oldValue, newValue) { // (4)
  +     this.render();
  +   }
  + 
  + }
  + 
  + customElements.define("time-formatted", TimeFormatted);
  + </script>
  + 
  + <time-formatted id="elem" hour="numeric" minute="numeric" second="numeric"></time-formatted>
  + 
  + <script>
  + setInterval(() => elem.setAttribute('datetime', new Date()), 1000); // (5)
  + </script>



## Rendering order.
- Khi HTML parser build DOM, elements được xử lý liên tiếp nhau. parent trước khi đến child. Ví dụ : <outer><inner></inner></outer> thì <outer></outer> sẽ được khởi tạo và kết nối với DOM trước và sau đó là inner.
- Điều này dẫn đến 1 kết quả quan trọng với custom element.
- Ví dụ , nếu 1 custom element cố gắng access innerHTML trong connectedCallback sẽ không lấy được gì.

  + <script>
  + customElements.define('user-info', class extends HTMLElement {
  + 
  +   connectedCallback() {
  +     alert(this.innerHTML); // empty (*)
  +   }
  + 
  + });
  + </script>
  + 
  + <user-info>John</user-info>

- Điều này là chính xác do lúc này chưa có chhildren, DOM vẫn chưa finished, HTML parser connected custom element <user-info> và tiếp theo sẽ xử lý children của nó nhưng vẫn chưa làm được.

- Nếu ta muốn pass infomation vào custom element ta có thể dùng attributes do chúng xuất hiện ngay lập tức. 
_ Nếu ta muốn sử dụng children thì ta có thể defer bằng cách sử dụng zero setTimeout.

  + <script>
  + customElements.define('user-info', class extends HTMLElement {
  + 
  +   connectedCallback() {
  +     setTimeout(() => alert(this.innerHTML)); // John (*)
  +   }
  + 
  + });
  + </script>
  + 
  + <user-info>John</user-info>

- Tuy nhiên cách này lại không toàn diện, do nếu có nested element mà cũng dùng setTimeout lúc đó sẽ có sự xếp hàng. outer sẽ kích trước sau đó đến children.
- Do đó, outer element hoàn thành khởi tạo trước so với các inner element.

  + <script>
  + customElements.define('user-info', class extends HTMLElement {
  +   connectedCallback() {
  +     alert(`${this.id} connected.`);
  +     setTimeout(() => alert(`${this.id} initialized.`));
  +   }
  + });
  + </script>
  + 
  + <user-info id="outer">
  +   <user-info id="inner"></user-info>
  + </user-info>

- Ouput sẽ là :

  + outer connected
  + inner connected
  + outer initialized
  + inner initialized

- Không có built-in callback nào sẽ kích sau khi nested element sẵn sàng. Nếu cần ta có thể thực hiện theo cách dispatch 1 events như initialized và outer có thể lắng nghe nó.


## Customized built-in elements.

- Các element tạo ở trên không có sematics liên quan, các search engine sẽ không tìm được nó và các accessibility sẽ không handle được nó.
- Ta có thể kế thừa và customize built-in HTML element bằng cách kế thừa class của chúng.
- Ví dụ buttons là instance của HTMLButtonElement, ta có thể build dựa trên nó.

  + Extend HTMLButtonElement với class của chúng ta :
    * class HelloButton extends HTMLButtonElement { }
  + Sử dụng argument thứ 3 của customElement.define(), để xác định tag.
    * customElements.define("hello-button", HelloButton, {extends: 'button'});
  + Cuối cùng, để sử dụng custom element, chèn 1 regular <button> tag nhưng add is="hello-button" vào đó :
    * <button is="hello-button">...</button>.

- Ví dụ :

  + <script>
  + // The button that says "hello" on click
  + class HelloButton extends HTMLButtonElement {
  +   constructor() {
  +     super();
  +     this.addEventListener('click', () => alert("Hello!"));
  +   }
  + }
  + 
  + customElements.define('hello-button', HelloButton, {extends: 'button'});
  + </script>
  + 
  + <button is="hello-button">Click me</button>
  + 
  + <button is="hello-button" disabled>Disabled</button>

- button mới của ta kế thừa từ built-in nên sẽ vẫn giữ các styles và standard features như disable.


## References.

+ HTML Living standard : https://html.spec.whatwg.org/#custom-elements..
+ Compatiblity : https://caniuse.com/#feat=custom-elementsv1.

