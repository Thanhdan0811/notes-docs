- là attribute hoặc event listener được pass vào component nhưng ko đc định nghĩa trong props hoặc emits
- Như class, id, style ta có thể access thông qua $attrs.

# attribute inheritance 
- khi gán các non-props thì sẽ được thêm tự động vào root element của component kể cả event.


# Disabling Attribute Inheritance
- Nếu ta ko muốn inheritance ta có thể set inheritAttrs: false
- Trường hợp này khi ta muốn applied các non-props này vào 1 element khác ngoài root element.
- Ta sẽ sử dụng $attrs property (có tất cả các attributes mà ko đc include trong element).
- Ta sẽ dùng kết hợp với v-bind.

    + app.component('date-picker', {
    +   inheritAttrs: false,
    +   template: `
    +     <div class="date-picker">
    +       <input type="datetime-local" v-bind="$attrs" />
    +     </div>
    +   `
    + })

# Attribute Inheritance on Multiple Root Nodes
- Không giống với 1 root node components , component với nhiều root nodes không tự động truyền xuống các attribute.
- Nếu $attrs ko được bound explictly thì sẽ có cảnh báo.

- Ví dụ này sẽ có cảnh báo :

    + app.component('custom-layout', {
    + template: `
    +     <header>...</header>
    +     <main>...</main>
    +     <footer>...</footer>
    + `
    + })

- Ví dụ này sẽ ko có cảnh báo, do $attrs được pass vào main.

    + app.component('custom-layout', {
    + template: `
    +     <header>...</header>
    +     <main v-bind="$attrs">...</main>
    +     <footer>...</footer>
    + `
    + })