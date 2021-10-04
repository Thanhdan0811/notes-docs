# ========== Block and Inline boxes.
- Nhìn chung có 2 loại boxes - block boxes và inline boxes.
- Boxes còn có type là inner display và outer display.
- Nếu là block boxes :

  + box sẽ chiếm new line.
  + box sẽ chiếm space có thể có trong container.
  + width và height sẽ được xem xét.
  + padding, margin, border sẽ lm cho các element lân cận bị đẩy đi.

- Nếu là inline boxes :

  + Box sẽ ko chiếm ở new line
  + width và height properties sẽ ko được áp dụng.
  + padding, margin, border theo chiều vertical vẫn sẽ được apply nhưng sẽ ko đẩy các inline boxes ra.
  + padding, margin, border theo chiều horizontal vẫn sẽ được apply và sẽ đẩy các inline boxes ra.

- Ta có thể hiểu các tác động đến block bên ngoài là outer display type.(block, inner)
- Boxes còn có inner display type. ám chỉ các mà các elements bên trong được layout
- Về mặc định, các elements bên trong sẽ được layout theo kiểu normal flow nghĩa là block hoặc inline.
- Ví dụ nếu ta dùng flex, thì outer display của block đó sẽ là block, nhưng inner display sẽ là flex.

# ========== CSS box modal.
- CSS box modal nhìn chung sẽ áp dụng cho block boxes.
- inline box thì sẽ chỉ dùng 1 số behavior được định nghĩa trong box modal.
- Box sẽ được cấu thành từ các phần như sau :

  + Content box : khu vực mà nội dung được displayed. Nơi có thể sử dụng size như width và height.
  + Padding box : khoảng trống đệm xung quanh content. có thể được kiểm soát bằng cách dùng padding.
  + Border box : sẽ wrap content và padding , có thể size được bằng border.
  + Margin box : là outter most layer , wrap content, padding và border , là space giữa box và các element khác. Dùng margin để kiểm soát.


# ========== Standard CSS box modal.
- Trong standard box modal, nếu ta set width và height thì nó sẽ định nghĩa width height của content box.
- Bất cứ padding hoặc border được thêm vào được thêm vào content. được tính vào tổng của box.
- Ví dụ : ta xét css như sau :

> .box {
>   width: 350px;
>   height: 150px;
>   margin: 10px;
>   padding: 25px;
>   border: 5px solid black;
> }

- Thí lúc này size thực của box sẽ là 410px chiều rộng  và 210px chiều height.
- margin sẽ ko được tính. nó là space bên ngoài box.

# ========== The alternative CSS box model
- CSS có 1 alternative box model khác, ở đây, width của content sẽ là width trừ đi padding và border.
- width, height của box được view trên page sẽ bằng đúng với width height được set.
- Ta sẽ dùng : box-sizing: border-box;


# ========== Margins, padding, and borders

## ===== Margin
- là space vô hình xung quanh box. nó sẽ đẩy element xung quanh cách xa box.
- Margin có thể âm hoặc dương.
- Dù ta có dùng standard hay là alternative box thì margin cũng sẽ luôn được thêm vào sau khi size của visible box đã được tính toàn.
- Việc ta set giá trị âm cho margin ở 1 bên sẽ làm cho nó chồng lên các elements khác trong page.

### Margin collapsing
- Nếu ta có 2 element :
  + Nếu 2 margin chạm nhau và có value dương : margin sẽ kết hợp lại thành 1 margin và sẽ lấy giá trị value lớn nhất.
  + Nếu có 1 margin là âm : thì nó sẽ bị trừ đi khỏi total.
  + Nếu cả 2 đều là âm : margin sẽ collapse và giá trị min sẽ được dùng.

- Ví dụ : div 1 có margin bototm là 50px nếu div 2 có margin top là -10px thì sẽ bị đẩy là 40px
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

# ========== The box model and inline boxes
- Đối với inline box :
  + vertical : width và height sẽ bị loại bỏ; margin, padding và border sẽ được áp dụng nhưng sẽ ko làm thay đổi hành vi của
              của các box khác đối với nó. dó đó có thể bị chồng lên nhau.
  + horizontal : padding, margin và border đều được áp dụng và tác động lên các element xung quanh.

- Nếu sử dụng inline-block sẽ có thể thay đổi. Nhưng size sẽ chỉ lớn hơn content khi ta set width, heigth bên ngoài.
