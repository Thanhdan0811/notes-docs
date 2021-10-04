# CSS Transitions
- ý tưởng của CSS transition rất đơn giản, tất cả những gì ta cần là thay đổi property và transition sẽ được browser thực hiện.
- Ví dụ :

    + .animated {
    +   transition-property: background-color;
    +   transition-duration: 3s;
    + }

- bây giờ nếu element có class .animated và có bất cứ thay đổi background-color nào sẽ animeted trong 3s.
- Có 4 properties để mô tả CSS transitions :

    + transition-property.
    + transition-duration.
    + transition-timing-function.
    + transition-delay.

- Ta có thể add nhiều property như sau :

    + transition: font-size 3s, color 2s;

- Thứ tự như sau : property duration timing-function delay

# Transition-property.
# Event transitioned.
- Khi css animation kết thúc, event transitioned sẽ kích.
- event object cho transitioned có 1 vài properties nhất định :

    + event.propertyName : property đã kết thúc animating.
    + event.elapsedTime : Thời gian theo giây mà animation thực hiện không tính delay.

# Keyframes.
- 