# HIDE SHOW
- hide : $(selector).hide(speed,callback);
- show : $(selector).show(speed,callback);
- toggle : $(selector).toggle(speed,callback);#\
- speed parameter : "slow", "fast", miliseconds (number)
- callback : là function sẽ sẽ được executed sau khi hide() hoặc show() completes

# FADING
- .fadeIn() : $(selector).fadeIn(speed,callback);
- .fadeOut() : $(selector).fadeOut(speed,callback);
- .fadeToggle() : $(selector).fadeToggle(speed,callback); 
- .fadeTO() : $(selector).fadeTo(speed,opacity,callback); cho phép fade đến 1 opacity nhất định.
- speed parameter : "slow", "fast", miliseconds (number)
- callback : là function sẽ sẽ được executed sau khi fade() completes

# SLIDING
- .slideDown() : $(selector).slideDown(speed,callback);
- .slideUp() :   $(selector).slideUp(speed,callback);
- .slideToggle() :  $(selector).slideToggle(speed,callback);

# ANIMATE
- .animate() : $(selector).animate({params},speed,callback);
- {params} : định nghĩa các css properties được animated.
- Giá trị của các properties có thể là values, related values, hoặc show, hide, toggle
-   $("div").animate({left: '250px'}); div qua trái 250px
   $("div").animate({
        left: '250px',
        height: '+=150px',
        wi

-   $("div").animate({
        height: 'toggle'
    });

- Tạo liên tiếp các animation.
    var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow");
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");

# STOP ANIMATION 
- .stop() : $(selector).stop(stopAll,goToEnd);
- được dùng để stop animation or effect trước khi finished
- stopAll : xác định the animation queue có nên cleared or not, default là false tức là chỉ có animation đang active sẽ dừng, các animation khác sẽ tiếp tục 
- goToEnd : chỉ định có hay không việc complete current animation immediately. Default là false.
=> Mặc định .stop() sẽ dừng animation hiện tại của selected element.

# METHOD CHAINING
- $("#p1").css("color", "red").slideUp(2000).slideDown(2000);