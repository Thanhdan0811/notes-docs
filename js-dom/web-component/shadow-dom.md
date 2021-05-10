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

    + Light tree : là 1 regular DOM subtree, tạo bởi HTML children. Tất cả các subtree mà ta đã thấy ở các ví dụ trước là light trê.
    + Shadow tree : là 1 hidden DOM subtree không được phản ánh trong HTML , ẩn khỏi mắt thường.

- 