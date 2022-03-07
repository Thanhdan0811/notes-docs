# Content
- .text(): set hoặc return về toàn bộ text trong thẻ.
- .html(): set hoặc return về về nội dung thẻ bao gồm luôn các thẻ con.
- .val() : set hoặc return về value của form fields.
* Callback funtion for three method above.
- Các methods trên đều có thể truyền vào 1 callback function, sẽ có 2 parameters :
    + index là index của element được selector trong các selectors được chọn.
    + oldText : sẽ là content cũ của element.
- Sau đó ta có thể return về 1 string mà ta mong muốn ghi đè.
# ATTRIBUTE 
- attr(nameAttr, newValue) - get or set value of attribute of element.
- attr({
    "name-1" : "value-1",
    "name-2" : "value-2",
})
- callback for attr : attr(nameAttr, callback(index, oldValue){return newValueForNameAttr});
# NEW HTML CONTENT
- .append() - thêm content tại vị trí cuối của selected element 
- .prepend() - thêm content tại vị trí bắt đầu của selected element 
- .after() - thêm content tại sau của selected element 
- .before() - thêm content tại trước của selected element 
- Các cách tạo elements mới : 
+ txt1 = "<p>Text.</p>";
+ txt2 = $("<p></p>").text("Text.");
+ txt3 = document.createElement("p"); txt3.innerHTML = "Text.";
# REMOVE ELEMENTS
- .remove() : remove the selected element và cả children. xóa luôn thẻ selected
- .remove() : có nhận vào 1 parameter là selectors syntax, sẽ xóa theo filter. $("p").remove(".test, .demo");
- .empty() : remove child elements khỏi selected element. chỉ xóa toàn bộ nội dung bên trong.
# CLASSES
- .addClass() : thêm 1 hoặc nhiều classes cho elements. cách nhau bằng dấu cách.
- .removeClass : remove 1 hoặc nhiều classes cho elements. cách nhau bằng dấu cách.
- .toggleClass() : toggle class cho element.
# CSS 
- .css() : set hoặc return the style attribute.
- return : .css("name-style") : $("p").css("background-color");
- set : .css("name", "value") ; $("p").css("background-color", "yellow");
- set multiples : .css({"name-1": "value-1","name-2": "value-2"});
# DIMENTION METHOD
- .width(); không tính padding, border and margin ; set or return
- .height(); không tính padding, border and margin ; set or return  
- .innerWidth(); tính padding
- .innerHeight(); tính padding
- .outerWidth(); tính padding, border
- .outerHeight(); tính padding, border
- .outerWidth(true); tính padding, border, margin
- .outerHeight(true); tính padding, border, margin