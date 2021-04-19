# Tạo nested list 
Tạo nested list như sau :

    1. ádjflksf
    2. áljfsdf
        2.1 lsdjfsaf
        2.2 sldjsaf

- Ta làm như sau :

ol { counter-reset: item }
li{ display: block }
li:before { content: counters(item, ".") " "; counter-increment: item }

- counter-reset : none | name number | initail | inherit;

    + name number : lần lượt là tên cần reset counter và number là số bắt đầu, mặc định là 0.

- counter-increment : increase or decrease value của 1 hoặc nhiều CSS counters. Thường được dùng với counter-reset và content property.

    + counter-increment: none | name number | initail | inherit;
    + counter-increment: my-counter; => tăng 1.
    + counter-increment: my-counter -1; => giảm 1.
    + counter-increment: my-counter 1; => tăng 1.
    + counter-increment: counter1 counter2 -4; => tăng 1 cho counter1, giảm 4 cho 
    
- counter() function trả về string là current value của named counter. 

    + counter(name, style-list);
    + counter(countername);
    + counter(countername, upper-roman)

- 
