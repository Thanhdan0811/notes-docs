- JSX element được xem là javascript expression.
- jsx có thể ở bất cứ đâu nơi nào có thể có js expression.
- Để render ta sẽ import React từ 'react' và ReactDOM từ 'react-dom'.
- sau đó gùn hàm ReactDOM.render(jsx, document.querySelector(selector));
- argument đầu tiên sẽ là jsx và nó sẽ được append vào elemnt được get ở argument thứ 2.

# The Virtual DOM
- 1 điều đặc biệt ở ReactDOM đó là nó sẽ chỉ update DOM element mà có sự thay đổi.
- Để React có thể lm được điều này thì nó cần có virtual DOM.
- DOM manipulation là trái tim, cốt lõi của modern web.
- Nhưng DOM lại chậm hơn so với hầu hết các operations của Js.
- Sự chậm này sẽ tệ hơn do hầu hết các js frameworks sẽ update DOM nhiều hơn mức cần thiết.
- Ví dụ ta có ul và có 10 li bên trong, nếu chỉ có 1 li thay đổi nhưng khi update ta lại phải 
- update toàn bộ ul sẽ gây ra chậm trễ.

- TRong React, với mỗi DOM object thì sẽ tương ứng có 1 'Virtual DOM object',.
- 1 Virtual DOM object sẽ biếu thị cho 1 DOM object, nó giống như là 1 bản copy.
- 1 virtual DOM object sẽ có property giống như DOM object.
- Nhưng virtual DOM sẽ thiếu những chức năng cho việc thay đổi cái gì sẽ hiện trên screen.
- Thao tác với DOM thì chậm, nhưng với Virtual DOM thì lại nhanh hơn do nó ko được hiển thị trên screen.
- Ta có thể hình dung Virtual DOM giống như ta chỉnh sửa trên bản thiết kế, còn DOM thì là chỉnh sửa công trình đã được xây dựng.


- KHi ta render 1 jsx element, mỗi virtual DOM Object sẽ được update.
- Điều này nghe có vẻ ko thực sự hiệu quá, nhưng có thể bỏ qua do virtual DOM update rất nhanh.
- Sau khi virtual DOM được update React sẽ so sánh với 1 bản virtual DOM snapshot đã được lưu lại ngay trước khi nó được update.
- Việc so sánh này sẽ tìm ra được chính xác virtual DOM object nào đã thay đôi. Quá trình này được gọi là 'diffing'.
- Khi React đã biết virtual DOM object  nào thay đổi thì nó sẽ chỉ update objects đó trong real DOM.

=> Tóm lại : 
    + Toàn bộ virtual DOM sẽ được updates.
    + Virtual DOM sẽ được so sánh với bản snapshot trước đó và tìm ra cái nào thay đổi. 
    + Sau đó sẽ chỉ update nó ở real DOM.
    

# ========== Curly Braces in JSX
- Bất kỳ code nào nằm ở giữa tags của jsx element sẽ được đọc như là jsx chứ ko phải là js.
- Ta sẽ dùng curly braces {} để nói rằng dù trong jsx nhưng ta sẽ xem nó như là js.

# ========== Variables in JSX
- Khi nhúng js vào jsx , thì js đó là 1 phần của cùng environment như js trong file.
