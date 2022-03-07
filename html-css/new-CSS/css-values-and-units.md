# ========== Numbers, lengths, and percentages
- Các class sau được xem là numeric :
  + <integer> : là các số.
  + <number> : là số nhưng có thể có thập phân.
  + <dimension> : là <number> với unit thêm ở sau : 45deg, 10px. bao gồm luôn cả <length>, <angle>, <time>, <resolution>.
  + <percentage> : là %.

## ===== Absolute length units
- các value này là tuyệt đối, ko phụ thuộc vào gì , gồm có :

  + cm (Centimeters) : 1cm = 38px = 25/64in
  + mm (Millimeters) : 1mm = 1/10th of 1cm
  + Q (Quarter-millimeters) : 1Q = 1/40th of 1cm
  + in (Inches) : 1in = 2.54cm = 96px
  + pc (Picas) : 	1pc = 1/6th of 1in = 16px
  + pt (Points) : 1pt = 1/72th of 1in = 4/3px
  + px (Pixels) : 1px = 1/96th of 1in

- Ta có thể dùng cho print(cm) hoặc screen.

## ===== Relative length units
- sẽ phụ thuộc vào 1 cái gì đó. bao gồm :

  + em : sẽ là font-size của parent, và font-size của chính element khi set với width.
  + ex : x-height of the element's font.
  + ch : 	The advance measure (width) of the glyph "0" of the element's font.
  + rem : Font size of the root element.
  + lh : 	Line height of the element.
  + vw : 1% of the viewport's width.
  + vh : 1% of the viewport's height.
  + vmin : 1% of the viewport's smaller dimension.
  + vmax : 1% of the viewport's larger dimension.

## ===== ems and rems
- ems có nghĩa là "my parent element's font-size" trong trường hợp typography.
- rem có nghĩa là "The root element's font-size"
