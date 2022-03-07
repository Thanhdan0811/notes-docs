# PARENT METHODS
- .parent() : trả về direct parent của selected element.
- .parents() : trả về tất cả ancestors của selected element, up to html(root element).
- .parents("filter") : trả về tất cả ancestors của selected element trùng với filter.
- .parentsUntil() : trả về tất cả ancestors elements giữa 2 given argument : $("span").parentsUntil("div"); giữa span và div

# DESCENDANTS METHODS
- .children() : trả về tất cả direct children của selected element. chỉ travel qua 1 single level tức là 1 cấp.
- $("div").children(); Tất cả con trực tiếp của div.
- .children("filter") : có thể dùng filter;
- .find("selectors") : trả về descendants elements cho tới last descendant.
- $("div").find("span");
- $("div").find("*"); 

# SIBLINGS METHODS
- .siblings() ; trả về tất cả sibling elements của selected elements.
- .siblings("filter") ; trả về tất cả sibling elements theo filter của selected elements. $("h2").siblings("p");
- .next() : trả về next sibling của selected element.
- .nextAll() : trả về tất cả next sibling của selected elment.
- .nextUntill() : trả về tất cả next sibling giữa 2 arguments.  $("h2").nextUntil("h6");
- .prev(), .prevAll(), .prevUntill() : như next nhưng trả về previous.

# FILTERING
- .first() : trả về element đầu tiên của element xác định. $("div").first();
- .last()  : trả về element cuối cùng của element xác định. $("div").last();
- .eq()    : trả về element với số index xác định của selected element. $("p").eq(1);
- .filter(): Cho phép ta xác định 1 tiêu chuẩn hay thuộc tính, element nếu ko match sẽ bị removed ra khỏi selection, match sẽ được return. $("p").filter(".intro");
- .not() : trả về tất cả element không match với thuộc tính hay tiêu chuẩn. $("p").not(".intro");