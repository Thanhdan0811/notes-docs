- Khi ta gặp bugs ta sẽ thường gặp 4 trường hợp sau : 
    + Compile-time errors : Errors được tìm thấy bởi compiler.
    + Link-time errors : Errors được tìm thấy bởi linker khi nó combine object files vào executable program.
    + Run-time errors : Errors được tìm thấy trong quá trình kiểm tra chạy program.
    + Logic errors : Errors được tìm thấy bởi programmer 

# Compile-time Errors
- compiler sẽ là nơi bắt lỗi đầu tiên.
- Có 2 loại compile-time errors :
    + Syntax errors : lỗi khi ta vi phạm syntax.
    + Type errors : lỗi khi ta có type ko phù hợp được declared.

# Link-time Errors
- Đôi khi compile ok, nhưng vẫn sẽ có message khi program ko thể tìm đc function hoặc library.
- Đây được gọi là link-time error.
- Khi program bự hơn, ta sẽ tách file nhỏ ra, sau khi compile thì linker sẽ lấy các file này và gộp lại với nhau thành 1 file executable lỗi nếu có sẽ được linker tìm ra.

# Run-time Errors
- Lỗi xảy ra khi compile thành công được gọi là run-time errors.
- Các lỗi này thường có thể là mở 1 file ko tồn tại, hay chia cho 0... computer sẽ ko nhận định được lỗi này.

# Logic Errors