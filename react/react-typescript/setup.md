npx create-react-app <app-name> --template typescript
- Trong folder sẽ luôn là file tsx.
- Ta props , Ta sẽ khai báo interface cho props sẽ nhận, để định nghĩa type cho props.
- Ví dụ : trong component Child, ở component gọi nó buộc phải truyền props đúng định dạng.

>   interface ChildProps {
>       color : string;
>   }
>   
>   export const Child = ({color}: ChildProps) => {
>       return <div>HI there , Im child!, colof : {color}</div>
>   }


- Khi ta khai báo như trên , typescript sẽ ko thể nhận biết được đây là 1 React Component .
- Lúc này sẽ ko có type narrowing , sẽ ko nhận biết được các thuộc tính có thể có của React.
- Ta sẽ định nghĩa lại component như sau :

>   export const ChildAsFc : React.FC<ChildProps> = ({color, children}) => {
>       return <div>{color}</div>
>   }
=> React.Fc có thể viết lại là React.FunctionComponent


- Ta sẽ báo cho typescript biết là : "ChildAsFc" sẽ là 1 react component function, và nhận props có type là ChildProps  , và sẽ có các properties có thể có như "propTypes". 


# Về props children , 
- Nếu ko dùng React.FC<ChildProps> thì props children sẽ phải khai báo tay trên interface.
- Nếu có React.FC<ChildProps> : thì sẽ tự động có.

# Type cho state.

> const [guest, setGuesst] = useState<string[]>([]);
> 
> const onClick = () => {
>     setName("");
>     setGuesst([...guest, name]); => Cần xác định type chỗ này.
>     console.log(name);
> }

- Trường hợp state có thể có nhiều type :

>   const [user, setUser] = useState<{name: string, age: number} | undefined>();
