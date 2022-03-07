- DOM là Document Object Model là 1 abstraction của 1 structured text.
- Với web dev thì đây là HTML code Và DOM được gọi là HTML DOM.
- HTML element thì sẽ là nodes của DOM.
- Do đó, HTML là text , DOM là 1 in-memory biểu diễn text này.
- The Virtual DOM là 1 bản tóm tắt của HTML DOM. React ko tạo ra nó mà là sử dụng nó.
- virtual DOM nhẹ và được tách khỏi các chi tiết triển khai cho browser.
- Sự khác nhau giữa real DOM và virtual DOM : 
    + Có 3 attributes cúa Virtual DOM sẽ ko xuất hiện trong real DOM : key, rref, dangerouslySetInnerHTML
    
# ========= ReactElement vs ReactComponent
- A ReactElement is a light, stateless, immutable, virtual representation of a DOM Element.
- ReactElements tồn tại trong virtual DOM. do tính bất biến cửa nó làm cho nó dễ dàng và nhanh cho việc so sánh và update.
- ReactElement có thể là hầu hết các HTML tags.
- ReactComponent sẽ khác so với ReactElement đó là ReactComponent là stateful. (khi thay đổi state thì component sẽ được rerender.)
- ReactComponent sẽ không thể acccess tới virtual DOM nhưng nó có thể dễ dàng convert thành ReactElements.


# ========= What makes the difference?
- ReadtComponent không thể access tới virtual DOM, đây là điều cần thiết.
- Mỗi khi ReactComponent thay đổi state, ta sẽ muốn càng cso ít sự thay đổi tới real DOM càng tốt.
- Do đó, khi ReactComponent được convert thành ReactElement , sau đó ReactElemnet sẽ được insert vào virtual DOM.
- Sau đó sẽ được so sánh và update 1 cách nhanh chóng.
