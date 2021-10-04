
- Xết trường hợp sau : nếu viết hàm handle inline thì sẽ ko có lỗi ở argument e.


> const EventComponent : React.FC= () => {
> 
>    return <div>
>        <input type="text" onChange={e => console.log(e)} />
>    </div>
> }

- Nếu viết tách handle ra thì sẽ có lỗi ở parameter e :

>  const EventComponent : React.FC= () => {
>    const onChange = (e) => {  => sẽ có lỗi ở e.
>         console.log(e);
>    };
>  
>    return <div>
>          <input type="text" onChange={onChange} />
>      </div>
>  }


- Điều này là do : hệ thống type inference system , ở trường hợp 1 thì do có thẻ input nên typescript sẽ tự động nhận biết được type của argument e truyền vào.
- nhưng ở trường hợp số 2 thì sẽ ko biết đc do hàm định nghĩa bên ngoài.

- Một số dạng type của event 

+ onChange : React.ChangeEvent<HTMLInputElement>
+ 

