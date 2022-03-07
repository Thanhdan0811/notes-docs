- css style cho text thường sẽ có 2 loại : font style và text layout style
# ========== Fonts
- Font families :để set font cho text ta sẽ dùng font-family property.

## ===== Web safe fonts
- Chỉ có 1 số lượng nhất định các font có sẵn trong tất cả các hệ thống có thể dùng mà ko cần bận tâm.
- Được gọi là web safe font.
- Các fonts này gồm có : Arial (sans-serif), Courier New (monospace), Georgia (serif), Times New Roman (serif), Trebuchet MS (sans-serif), Verdana (sans-serif).

## ===== Default fonts
- Có 5 font generic có thể dùng ở mọi browsers : serif, sans-serif, monospace, cursive, and fantasy

# ========== Font size
- Các units phổ biến để size text :
- px :
- em : bằng với font size set cho parent element.
- rem : là size bằng vói size set ở root element hay html

# ========== Font style, font weight, text transform, and text decoration
- font-style : dùng để bặt tắt italic.
- Values cho font-style : normal | italic | oblique (hơi nghiêng giống italic)
- font-weight : normal | bold | lighter | bolder | 100 - 900.
- text-transfrom : none | uppercase | lowercase | capitalize | full-width (Transforms all glyphs to be written inside a fixed-width square).
-  text-decoration : none | underline | overline | line-through. có thể nhận nhiều value cũng lúc cách nhau bằng khoảng cách.

# ========== Text drop shadows
- text-shadow : set shadow cho text.
- text-shadow : 4px 4px 5px red;
- value đầu tiên là horizontal offset của shadow.
- value thứ 2 là vertical offset của shadow.
- value thứ 3 là độ blur của shadow, value càng lớn thì blur càng rộng mặc định là 0.
- value thứ 4 là màu của shadow.
- có thể gán nhiều color cho 1 text :

> text-shadow: 1px 1px 1px red, 2px 2px 1px red;

# ========== Text layout
- text-align.
- Letter and word spacing : letter-spacing và word-spacing.

# ========== Other properties worth looking at
- Text layout styles:
- text-indent : khoảng cách thụt vào của line đầu tiên. value : length | percentage.
- text-overflow : cách ẩn content khi overflow. Values : clip (cắt đi) | ellipsis (...).
  + text-overfow : sẽ ko làm overfow xảy ra. để làm text overflow khỏi content ta cần set 2 properties nữa.
  + Là overflow và white-space lần lượt là : hidden và nowrap.
  + Sẽ chỉ áp dụng với block containing text.
- white-space : cách mà khoảng trống bên trong element được xử lý :
  + Valuse : normal | pre | nowrap | pre-wrap | pre-line | break-spaces (ko hỗ trợ IE và firefox android)
  + nowrap : gộp khoảng trắng như normal, nhưng sẽ ko có line break.
  + pre : Các chuỗi khoảng trắng được giữ nguyên, Line sẽ chỉ broken khi bắt đầu newline character.
  + pre-wrap : Các chuỗi khoảng trắng được giữ nguyên, line broken tại newlien character, <br> và khi cần để vừa boxes.
  + pre-line : các chuỗi khoảng trắng được gộp lại, line broken tại newlien character, <br> và khi cần để vừa boxes.

- word-break : set khi nào line break xuất hiện
  + Values :  normal | break-all | keep-all | break-word (ko hỗ trợ IE)
  + break-all : để tránh overflow , word breaks sẽ được thêm vào giữa 2 character.
  + keep-all : Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal
  + break-word : Has the same effect as word-break: normal and overflow-wrap: anywhere

- direction : định nghĩa hướng của text
  + values : ltr | rtl

- hyphens : on off đường gạch nối khi từ dài và xuống hàng.
  + value : none | manual (break line sẽ có nếu từ quá dài) | auto (do browser quyết dịnh);

- line-break : ko hỗ trợ cho firefox on android .
  + values : auto | loose | normal | strict | anywhere;
  + Việc break line ntn sẽ phụ thuộc nhiều vào language.

- text-orientation : mixed | upright | sideways;

- overflow-wrap: chỉ định browser có thể break line trong word để tránh overflow.
  + values : normal | break-word  | anywhere (ko hỗ trợ nhiều browser)

- writing-mode : horizontal-tb | vertical-rl | vertical-lr ;

# ========= Font shorthand
-font :  font-style, font-variant, font-weight, font-stretch, font-size, line-height,  font-family;
- font-size và font-family là bắt buộc.
