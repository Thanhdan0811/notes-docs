- local reference có thể được đặt ở bất cứ html element nào.
- Cú pháp : #Ten-Reference
- Tham chiếu sẽ trả về element cùng toàn bộ properties của nó.

# ViewChild
- Để lấy local reference trong typescript ts. ta sẽ dùng ViewChild.
- Ta dùng decorator : 
    @ViewChild('ten_local_reference' | component-chứa-reference , {static: true}) ten_bien;
    
- static : true => giúp ta sử dụng ViewChild trong onInit nếu cần.
- component-chứa-reference : nếu truyền vào component chứa reference thì sẽ lấy cái đầu tiên ?

- ten_bien sẽ có type là : ElementRef
- ten_bien.nativeElement.

NOTE : Ta ko nên dùng cách này để gán value cho element.