- Mặc định ko set css thì :
- <ul>, <ol> elements có margin top và bottom là 1 em và padding left là 2.5em (40px).
- list item là <li> không có default cho spacing.
- <ol> có margint top bottom là 16px hay  1em nhưng ko có padding.
- <dd> element có margin left là 40px hay 2.5em.
- <p> element có margin top và bottom là 16px.

# ========== Handling list spacing

# ========== List-specific styles
- list-style-type : Sets the type of bullets được dùng cho list.
- list-style-position <inside | outside> : set vị trí của bullets ở đầu item , xuất hiện bên trong hay bên ngoài list.
- list-style-image : Cho phéo ta dùng custom image thay cho bullet thay vì những cái mặc định có sẵn.

> ul {
>   list-style-image: url(star.svg);
> }

- image cũng như background cần set các thuộc tính :

> ul li {
>   padding-left: 2rem;
>   background-image: url(star.svg);
>   background-position: 0 0;
>   background-size: 1.6rem 1.6rem;
>   background-repeat: no-repeat;
> }

# ========= list-style shorthand
- Ví dụ :

> ul {
>   list-style-type: square;
>   list-style-image: url(example.png);
>   list-style-position: inside;
> }

- Có thể shorthand như sau :

> ul {
>   list-style: square url(example.png) inside;
> }

# ========= Controlling list counting
- Ví dụ :

>  <ol start="4">
>    <li>Toast pita, leave to cool, then slice down the edge.</li>
>    <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
>    <li>Wash and chop the salad.</li>
>    <li>Fill pita with salad, hummus, and fried halloumi.</li>
>  </ol>

=> bắt đầu từ 4 đến 7.

> <ol start="4" reversed>
>   <li>Toast pita, leave to cool, then slice down the edge.</li>
>   <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
>   <li>Wash and chop the salad.</li>
>   <li>Fill pita with salad, hummus, and fried halloumi.</li>
> </ol>

=> sẽ đi từ 4 đến 1. nếu có thêm nữa sẽ là âm.
