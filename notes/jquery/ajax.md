# LOAD() method
- .load() : $(selector).load(URL,data,callback);
- Sẽ load data từ 1 server và put data trả về vào selected element.
- callback có 3 parameters : 
+ responseTxt : chứa nội dung kết quả nếu thành công
+ statusTxt : chứa status của call.
+ xhr : chứa XHLHttpRequest object.
# GET VS POST
- $.get(URL, callback); callback is executed if request succeeds.
- callback có 2 parameters : first parameter lưu content của page requested, second parameter lưu status của request.

- $.post(URL,data,callback);  data được gửi đi cùng với request, callback như get.
