- Khi dùng composition api ta sẽ dùng setup bên trong object.
- Syxtax :

    export default {
        setup() {
            // data
            let name = "somth"; => đây ko phải là reactive nên khi thay đỏi thì view sẽ ko thay đổi.
            // method
            // computed
            // lifecycle hooks
        }
    }

- setup function sẽ chạy trước tất cả các lifecycle
- reactive ??? tìm hiểu vấn đề này.

- Khi dùng reactive thì nó sẽ ko nhận vào primitive type 
- computed property được dùng để tính toán new value dựa vào value nào đó.

- api : watch và watchEffect.


    +   const stropWatch = watch(search, () => {
    +     console.log("watch function run");
    +   })
    +      
    +   const stopEffect = watchEffect(() => {
    +     console.log("watch effect function run once", search.value)
    +   })
    +   const handleClickStop = () => {
    +     stropWatch();
    +     stopEffect();
    +   }
- watch sẽ nhận vào ref để quan sát sự thay đổi, khi thay đổi nó sẽ gọi callback.
- watchEffect sẽ chạy ở lần đầu và sẽ tiếp tục chạy chỉ khi bên trong function có gọi hay sử dụng refs và refs đó phải thay đổi.
- cả 2 cái đều trả về hàm và khi gọi các hàm trả về này thì nó sẽ dừng watch.


# ====== setup 
- Hàm setup sẽ nhận vào 2 arguments là props và context
- props sẽ là reactive và nó sẽ tự update lại component khi props mới được pass vào.
- Ta ko thể dùng es6 với props.
- Để dùng được es6 ta sẽ phải dùng toRef.


# Event modifier
- .stop : stop propagation 
- .prevent : preventDefault.
- .capture : sử dụng capture mode.
- .self : chỉ khi event.target là bản thân nó.
- .once : event chỉ chạy 1 lần.
- .passive : cho phép canclable.

- Thứ tự sử dụng là quan trọng : @click.prevent.click sẽ prevent tất cả các click, @click.self.prevent sẽ chỉ prevent clicks ở chính element đó.
- Không nên dùng prevent và passive cùng với nhau.


# key modifiers :
- khi dùng keyboard events ta sẽ thường check các keys cố định. Vue ta có thể dùng key ở event.
- @key.enter="submit", @key.page-down="onPageDown"
- .exact sẽ chỉ cho phép event chạy khi click đúng key đó ; 
- <button @click.ctrl="onClick">A</button> sẽ chạy khi shift hoặc ctrl được click.
- <button @click.ctrl.exact="onCtrlClick">A</button> : chỉ có nút button.

# Dynamic Component :
- Đôi khi ta có thể switch giữ các component thông qua 1 attribute đặc biệt có tên là : :is
<component :is="currentTabComponent"></component>

- currentTabComponent có thể là tên của component hoặc options object.


# props validators : 
- Với object và array thì phải sử dụng factory function để return value về.
    + propE: {
    +   type: Object,
    +   // Object or array defaults must be returned from
    +   // a factory function
    +   default() {
    +     return { message: 'hello' }
    +   }
    + },
    + // Custom validator function
    + propF: {
    +   validator(value) {
    +     // The value must match one of these strings
    +     return ['success', 'warning', 'danger'].includes(value)
    +   }
    + },
    + // Function with a default value
    + propG: {
    +   type: Function,
    +   // Unlike object or array default, this is not a factory function - this is a function to serve as a default + value
    +   default() {
    +     return 'Default function'
    +   }
    + }   

- NOTE : props validator sẽ được validated trước khi component instance được tạo, nên instance properties(data, computed) sẽ ko available bên trong default hoặc validator function.