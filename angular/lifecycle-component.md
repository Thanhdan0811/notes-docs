- ngOnChanges : Cần implement thêm OnChanges : method nhận vào changes: SimpleChanges :được gọi sau khi property của các @Input() thay đổi.
    + Biến changes sẽ chứa thông tin về value hiện tại và trước đó.
    + changes thường sẽ có 3 properties : currentValue, firstChange, previousValue.
- ngOnInit : được gọi 1 lần khi component được khởi tạo. Sẽ chạy sau constructor.
- ngDoCheck : Được gọi trong mỗi change detection run. Tức là mỗi hành động mà angular làm đều sẽ được xem là check cho dù click vào 1 button không làm gì.
    + Implement thêm DoCheck.
    + Được gọi mỗi khi Angular thực hiện việc check sự thay đổi.

- ngAfterContentInit : được gọi sau khi content (ng-content) được chiếu lên view.
    + Implement thêm AfterContentInit
    + called : has fully initialized all content of a directive

- ngAfterContentChecked :
    + được gọi mỗi khi chiếu content lên view được checked.
    + Implement thêm AfterContentChecked
    + A lifecycle hook that is called after the default change detector has completed checking all content of a directive.

- ngAfterViewInit : 
    + được gọi sau khi component's view và child view đã được khởi tạo.
    + + Implement thêm AfterViewInit

- ngAfterViewChecked : 
    + được gọi mỗi lần view đã được checked.
    + + Implement thêm AfterViewChecked

- ngOnDestroy : Được gọi khi component chuẩn bị xóa đi.
    + + Implement thêm OnDestroy
