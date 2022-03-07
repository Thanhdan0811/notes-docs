# ======== defaultProps
- Ta có thể set value default cho các props để phòng trường hợp nó ko được truyền.
- Mỗi component sẽ có 1 property là defaultProps.
- property defaultProps ta nên set là object.


    > class Example extends React.Component {
    >   render() {
    >     return <h1>{this.props.text}</h1>;
    >   }
    > }
    >  
    > // Set defaultProps equal to an object:
    > Example.defaultProps = {};

- Khi props được truyền thì giá trị default sẽ bị ghi đè kể cả value đó sẽ tạo ra false.
- Có 2 cách để component nhận được dynamix infomation : props và state 


# ======== state
- để thay đổi state ta sẽ dùng this.setState() nhận vào 2 arguments là object và 1 callback.
- Cách phổ biến để gọi this.setState() là gọi nó trong 1 hàm khác.


>   class Example extends React.Component {
>     constructor(props) {
>       super(props);
>       this.state = { weather: 'sunny' };
>       this.makeSomeFog = this.makeSomeFog.bind(this);
>     }
>    
>     makeSomeFog() {
>       this.setState({
>         weather: 'foggy'
>       });
>     }
>   }

- 