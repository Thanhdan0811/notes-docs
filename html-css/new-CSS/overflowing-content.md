# ========== CSS tries to avoid "data loss"
- set height thêm content dài thì tràn xuống phía dưới.
- set width nhưng word lại quá dài chú ý là word. sẽ tràn qua phải.
- bất cứ khi nào có thể, CSS sẽ ko hide content. Nếu ko điều này sẽ dẫn đến data loss.

# ========== The overflow property
- overflow property : là cách để control overflow của element.
- default value là visible.
- Value scroll : sẽ luôn hiện scroll bar dù ko có overflow.
- Ngoài ra còn có overflow-x và overflow-y.


# ========== Overflow establishes a Block Formatting Context
- Khi ta dùng value scroll hoặc auto thì ta đang tạo ra 1 Block Formatting Context (BFC.
- Content bên trong lúc này sẽ bị khép kín bên trong 1 layout.
- Content bên ngoài container sẽ ko thể chen vào bên trong container.
