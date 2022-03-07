# ======== PROXY VÀ REFLECT.
- 1 Proxy object sẽ wrap object khác và chặn các thao tác cơ bản như đọc/ghi các properties.
- Cú pháp : 

`
    let proxy = new Proxy(target, handler);
`
+ target : là object bị wrap, có thể là bất cứ giá trị gì kể cả function.
+ handler : là các cấu hình của proxy, là 1 object với các methods được dùng thay thế hay chặn các thao tác của target. Ví dụ : get sẽ tương ứng với đọc 1 property của object...

- Khi thao tác trên proxy, Nếu có 1 thao tác tương ứng với 1 handler trong proxy thì nó sẽ chạy handler đó. Nếu không có tương ứng thì nó sẽ thực hiện trực tiếp trên target.
- ví dụ, với object proxy không có bất cứ traps nào :

`
    let target = {};
    let proxy = new Proxy(target, {}); // empty handler

    proxy.test = 5; // ghi vào proxy.
    alert(target.test); // 5, property và giá trị của nó xuất hiện trong target.
    alert(proxy.test); // ta cũng có thể đọc property từ proxy.
    
    for(let key in proxy) alert(key); // test, vòng lặp vẫn chạy.
`

- Vì không có các hanlders, tất cả các thao tác trên proxy sẽ hướng đến target.
- Proxy là 1 object đặc biệt, nó không có property riêng, Không có handler nó sẽ chuyển các thao tác đến target.
- proxy có thể chặn được thao tác nào ??
- proxy có thể chặn các "internal method" bên trong 1 object. Đối với mỗi "internal methods" sẽ có 1 handler, ta có danh sách các methods sau :

+ [[Get]] => get : đọc property.
+ [[Set]] => set : ghi vào property.
+ [[HasProperty]] => has : hoạt động thay cho in operator.
+ [[Delete]] => deleteProperty : hoạt động thay cho delete operator.
+ [[Call]] => apply : gọi hàm.
+ [[Constructor]] => construct : hoạt động thay thế cho new operator.
+ [[GetPrototypeOf]] => getPrototypeOf : hoạt động thay cho Object.getPrototypeOf.
+ [[SetPrototypeOf]] => setPrototypeOf : Object.setPrototypeOf.
+ [[IsExtensible]] => isExtensible : Object.isExtensible.
+ [[PreventExtensions]] => preventExtensions : Object.preventExtensions.
+ [[DefineOwnProperty]] => defineProperty : Object.defineProperty, Object.defineProperties.
+ [[GetOwnProperty]] => getOwnPropertyDescriptor : Object.getOwnPropertyDescriptor, for...in, Object.keys, Object.values, Object.entries.
+ [[OwnPropertyKeys]] => ownkeys : 	Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object.keys/values/entries.

NOTE : JS yêu cầu 1 vài điều kiện bắt buộc khi thực hiện các handler. Vì hầu hết các methods internal đều trả về values : [[Set]] return về true nếu ghi thành công, false ngược lại. 1 trường hợp khác là [[GetPrototypeOf]] được áp dụng vào proxy phải trả về giá trị giống như [[GetPrototypeOf]] được áp dụng vào target object của proxy object. 
- Việc viết lại các internal cần tuân thủ các luật này, xem thêm ở spec : https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots

# ======== GIÁ TRỊ MẶC ĐỊNH CHO GET HANDLER.
- Hanlder phổ biến nhất là reading và writing properties.
- Để chặn reading, handler sẽ cần có get method như sau :

`
    get(target, property, receiver)
`
+ target : là object target, là object được passed ở argument đầu tiên của new Proxy.
+ property : là tên của property.
+ receiver : Nếu target của property là 1 getter, thì receiver là object được dùng như là this khi nó được gọi. Thông thường sẽ là bản thân proxy object.

- Bình thường nếu ta lấy value tại index ko tồn tại trong 1 array thì sẽ trả về 1 undefined. Ta sẽ custom lại như sau :

`
  let numbers = [0,1,2];
  numbers = new Proxy(numbers, {
      get(target, prop) {
          if(prop in target) {
              return target[prop];
          } else {
              return 0; // giá trị mặc định.
          }
      }
  });  
  alert(numbers[1]); //1    
  alert(numbers[123]); // 0    
`

- 1 Ví dụ khác về từ điển, nếu tra từ ko có thì cần trả về chính từ đó chứ ko phải undefined.

`
    let dictionary = {
        'Hello': 'Hola',
        'Bye': 'Adios',
    };

    dictionary = new Proxy(dictionary, {
        get(target, phrase) {
            if(phrase in target) {
                return target[phrase];
            } else {
                // Nếu ko có phrase trong target thì trả về từ đó.
                return phrase;
            }
        }
    });
`

# ===== VALIDATION VỚI "SET" METHOD.
- Ví dụ nếu ta muốn 1 array mà chỉ chứa số, nếu value ở dạng khác thì nên báo lỗi.
- set method sẽ được kích hoạt khi property được ghi.
- Cú pháp như sau :

`
    set(target, property, value, receiver);
`
+ target : là object target, là object được passed ở argument đầu tiên của new Proxy.
+ property : là tên của property.
+ value : giá trị gán cho property.
+ receiver : Nếu target của property là 1 getter, thì receiver là object được dùng như là this khi nó được gọi. Thông thường sẽ là bản thân proxy object.

NOTE : set method nên trả về true nếu setting thành công, false cho trường hợp ngược lại.
- Ví dụ :

`
    let numbers = [];
    
    numbers = new Proxy(numbers, {
        set(target, prop, value) {
            if(typeof val === 'number') {
                target[prop] = val;
                return true;
            } else {
                return false;
            }
        }
    });

    numbers.push(1); // thêm vào thành công.
    numbers.push(2); // thêm vào thành công.

    numbers.push('test'); // TypeError ('set' on proxy returned false)
`
- Các methods của array như push, unshift bên trong đều dùng internal method nên ta ko cần ghi đè nó.


# ===== VÒNG LẶP (ITERATION) VỚI “ownKeys” VÀ “getOwnPropertyDescriptor”
- Object.keys, for...in và các vòng lặp khác lặp qua các properties của object bên trong đều sử dụng [[OwnPropertyKeys]] internal method để lấy tất cả các list của properties.
- Ta sẽ dùng ownkeys để ghi đè.
