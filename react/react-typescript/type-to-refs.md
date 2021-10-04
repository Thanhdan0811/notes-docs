

>   const inputRef = useRef<HTMLInputElement | null>(null);

=> <HTMLInputElement | null> : Lúc mới render , inputRef sẽ bằng giá trị initialValue hay lúc này sẽ là null.
Sau đó nếu ref được dùng thì nó sẽ là HTMLInputElement nên ta mới phải khai báo như trên với typescript.
