- in React, number sẽ mặc định là px.

const styles = {background: 'lightblue', color : 'darkred', marginTop: '100px', fontSize : '50px'};

# ======== propTypes
- propTypes sẽ có 2 công dụng là validation và documentation (để nhận biết component đó là gì làm gì ?);
- Để sử dụng ta cần import types : import PropTypes from 'prop-types';
- chú ý : ký tự in hoa và ko in hoa của propTypes ở class và PropTypes trong property.
- Ví dụ :


>   export class MessageDisplayer extends React.Component {
>     render() {
>       return <h1>{this.props.message}</h1>;
>     }
>   }
>   
>  // This propTypes object should have
>  // one property for each expected prop:
>   MessageDisplayer.propTypes = {
>     message: PropTypes.string
>   };

- Đối với mỗi prop mà component mong muốn nhận được , thì sẽ chỉ có 1 property trong propTypes object.
- Mỗi property trong propTypes object được gọi là propType.
- Ví dụ :

>   Runner.propTypes = {
>     message:   PropTypes.string.isRequired,
>     style:     PropTypes.object.isRequired,
>     isMetric:  PropTypes.bool.isRequired,
>     miles:     PropTypes.number.isRequired,
>     milesToKM: PropTypes.func.isRequired,
>     races:     PropTypes.array.isRequired
>   };

# ========== PropTypes in Function Components
- Đối với function component : 

    +   const Example = (props) => {
    +     return <h1>{props.message}</h1>;
    +   }
    +    
    +   Example.propTypes = {
    +     message: PropTypes.string.isRequired
    +   };

- Controlled vs Uncontrolled Component.
- An uncontrolled component is a component that maintains its own internal state.
- A controlled component is a component that does not maintain any internal state.
- Vì controlled component ko có state thì nó sẽ phải được controlled bởi 1 component khác.
- Hầu hết react component là controlled. 
- Links : https://reactjs.org/docs/forms.html
- Có 1 trường hợp mà ta phải luôn dùng ref hay uncontrolled component là khi xử lý input type='file';
