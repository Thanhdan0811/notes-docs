# ========== Styling backgrounds in CSS

## ===== Background colors
- background-color

## ===== Background colors
- background-image
- Nếu ta set background img đồng thời set background color thì img bg sẽ ở trên top của color.
- Controlling background-repeat :
  + no-repeat : ko lặp lại.
  + reeat-x : lặp lại theo horizontal.
  + repeat-y : lặp lại theo vertical.
  + repeat : lặp lại ở cả 2 hướng. default.

- Sizing the background image : length hoặc %.
  + cover : lớn vừa đủ để cover hết container trong khi vẫn giữ ratio. 1 phần của img có thể ở ngoài box.
  + contain : đúng size để fit bên trong box.
  + background-size : x-size y-size;

- Positioning the background image : background-postion : x-cord y-cord; mặc định là 0:0

## ===== Gradient backgrounds
- 1 gradient khi được dùng cho background sẽ thao tác giống với img, cũng sẽ sử dụng background-image property.


## ===== Multiple background images
- Ta có thể có nhiều background images - định nghĩa nhiều background-image values trong cùng 1 property.
- Mỗi value sẽ cách nhau bằng dấu ,
- Lúc này cách images có thể sẽ chồng lên nhau
- hình được khai báo cuối sẽ nằm ở bottom
- Các background-* properties khác có thể được có nhiều value tương ứng cho hình và cách nhau bằng dấu ,
- Ví dụ :

> background-image: url(image1.png), url(image2.png), url(image3.png), url(image4.png);
> background-repeat: no-repeat, repeat-x, repeat;
> background-position: 10px 20px,  top right;

- có 4 hình nhưng chỉ có 2 position lúc này 2 hình đầu sẽ sử dụng 2 position, các hình tiếp theo sẽ sửa dụng lặp lại.

## ===== Background attachment
- 1 option mà ta có cho background là xác định cách mà chúng sẽ scroll khi mà content scroll.
- background-attachment property sẽ điều khiển nó. Có các value nha :

  + scroll : làm element background sẽ scroll khi mà page scroll. Nếu element content bị scroll thì background sẽ ko scroll. Thực tế, background được fixed cùng 1 vị trí trong page , nên nó scroll khi page scroll.
  + fixed : làm element background fixed với viewport , nên nó sẽ ko scroll khi mà page hoặc element scroll. Nó sẽ luôn giữ vị trí trên screen.
  + local : fix background với element mà nó đc set, nên khi scroll element thì background sẽ scroll với nó.

## ===== Accessibility considerations with backgrounds
- Khi có text ta cũng nên set background color để nếu img ko load thì vẫn có thể nhìn thấy text.
- Screen readers không thể load background image.


# ========== Borders
- border ở 4 hướng đều sẽ map với logic property liên quan đến writing-mode củ document.
- 
