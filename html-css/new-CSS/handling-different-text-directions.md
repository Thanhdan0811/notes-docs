- CSS còn hỗ trợ content ở các hướng khác nhau, được gọi là wrting modes.
# ======== What are writing modes?
- writing mode trong css ám chỉ đến việc text sẽ chạy theo chiều vertical hay horizontal.
- writing-mode property cho phép ta chuyển đổi giữa các mode.
- property này có thể có 3 mode ;

  + horizontal-tb : Top-to-bottom block flow direction. sentences sẽ chạy theo horizontal.
  + vertical-rl :  Right-to-left block flow direction. Sentences run vertically.
  + vertical-lr: Left-to-right block flow direction. Sentences run vertically.

# ======== Writing modes and block and inline layout
- block và inline bám sát với writing mode của document không phải là physical screen.
- Khi ta switch mode writing ta đang thay đổi hướng nào là block hướng nào là inline.
- Với horizontal-tb thì block direction sẽ là từ top đến bottom,
- Với vertical-rl thì block direction sẽ là từ right đến left.
- block dimension sẽ luôn là direction của block được thể hiện trên page.
- inline dimension sẽ luôn là direction của 1 setence flows.

      <=> đây là chiều của inline
      ----------
      |  asfasj |
      |         |    
      |         |
      -----------
- chiều từ trên xuống sẽ là chiều của block. đây là horizontal-tb mode.
- Với mode là vertical :

      <=> đây là chiều của block
      ----------
      |  asfasj |
      |         |    
      |         |
      -----------
- chiều từ trên xuống hay ngược lài là chiệu của inline.

# ========== Logical properties and values
- Khi set width, với vertical-rl thì width vẫn sẽ là chiều ngang từ trái qua phải tương tự như horizontal-tb
- Lúc này, ta muốn width height để nó hoạt động theo writing mode.
- CSS có các mapped properties được dùng để thay thế physical properties.

- property map với width khi ở horizontal mode được gọi là : inline-size => là size của inline dimension.
- property map với height khi ở horizontal mode được gọi là : block-size => là size của block dimension.

## ===== Logical margin, border, and padding properties
- Các property như margin-top, padding-top, border-top.... là các physical properties.
- Tương tự width, height các properties nãy cũng có map theo writing mode.
- margin-top => margin-block-start : là margin tại vị trí bắt đầu của block dimension.
- padding-left => paddign-inline-start : là padding tại vị trí bắt đầu của inline dimension.
- border-bottom => border-block-end : border ở vị trí end của block.

## ===== Logical values
- Ta còn có các value logical khác.
- top => block-start
- bototm => block-end
- left => inline-start
- right => inline-end
