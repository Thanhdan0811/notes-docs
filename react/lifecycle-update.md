
- method shouldComponentUpdate() {} : sẽ chạy sau method componentWillReceiveProps và sẽ return về true hoặc false, nếu return về false sẽ không thực hiện việc render component, return true thì sẽ thực hiện việc render lại component.
- Tại method shouldComponentUpdate ta có thể set điều kiện để render lại. method này nhận vào tham số là nextProps , là props mới chuẩn bị được cập nhật.
- Để thay thế cách kiểm tra bằng shouldComponentUpdate, ta có thể dùng PureComponent và cho extends từ PureComponent. Nhưng ở đây có 1 chú ý là PureComponent sẽ thực hiện check nông.

# ======== 
- Constructor là method đầu tiên được gọi trong giai đoạn mounting.
- render sẽ được gọi sau trong giai đoạn mounting, sau constructor.
- render cũng sẽ được gọi trong quá trình update hay re-render.
- componentDidMount : sẽ là method cuối cùng trong giai đoạn mounting. sẽ được gọi sau khi component được render.
- Ngoài ra getDerivedStateFromProps cũng sẽ được gọi ở giữa 2 method đó là render và constructor.



- Component có 3 level :
- Mounting là khi component được khởi tạo và đặt vào DOM ở lần đầu tiên.
- Update : khi component được update do sự thay đổi của staet hoặc props.
- Unmounting : khi component được remove khỏi DOM.


- componentWillUnmount : được gọi trong giai đoạn unmounting, ngay trước khi component bị loại bỏ hoàn toàn.
- Khi ta update props được pass vào 1 component thì component đó sẽ re-render.

- componentDidUpdate : sẽ nhận vào 1 props là prevProps 