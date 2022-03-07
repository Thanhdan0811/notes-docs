- action là 1 js object, có type và payload.
- action creator là 1 function tạo và trả về action object.
- reducer là 1 function nhận 2 parameters là state hiện tại và action object. và trả về state mới.
- Cac buoc :

    + npm install redux
    + import {createStore} from 'redux';
    + const store = createStore(reducer);

- store sẽ có các method sau :

    + store.getState() : trả về current value của state trong store.
    + store.dispatch(action) : dispatch action lên store.

- Về bên trong, khi store thực thi reducer thì nó sẽ dùng store.getState() nhừ là argument state.

    store.dispatch({ type: 'toggle'}); sẽ tương tự với :
    lightSwitchReducer(store.getState(), { type: 'toggle' });

- Trong redux, ta có thể lắng nghe việc dispatch action và phản hồi lại bằng cách sử dụng :
- store.subscribe() method, nhận vào 1 argument là function đc gọi là listener

    const reactToChange = () => console.log('change detected!');
    store.subscribe(reactToChange);

- Ở đây , mỗi lần dispatch action và có state có sự thay đổi thì reactToChange sẽ đc gọi.
- Đôi khi ta muốn dừng việc lắng nghe dispatch , thì store.subscribe sẽ trả về 1 function là unsubscribe.
- Ta sẽ dùng hàm này để ko lắng nghe dispatch nữa.
- Ví dụ :

    // lightSwitchReducer(), toggle(), and store omitted...
 
    const reactToChange = () => {
    console.log(`The light was switched ${store.getState()}!`);
    }
    const unsubscribe = store.subscribe(reactToChange);
    
    store.dispatch(toggle());
    // reactToChange() is called, printing:
    // 'The light was switched off!'
    
    store.dispatch(toggle());
    // reactToChange() is called, printing:
    // 'The light was switched on!'
    
    unsubscribe(); 
    // reactToChange() is now unsubscribed
    
    store.dispatch(toggle());
    // no print statement!
    
    console.log(store.getState()); // Prints 'off'

- Ví dụ với DOM :

+    /* Note to learners: 
+    Normally, you would import redux like this:
+
+    import { createStore } from 'redux';
+
+    Due to Codecademy's technical limitations 
+    for testing this exercise, we are using 
+    `require()`.
+    */
+    const { createStore } = require('redux');
+
+    // Action Creators
+    function increment() { 
+    return {type: 'increment'}
+    }
+
+    function decrement() { 
+    return {type: 'decrement'}
+    }
+
+    // Reducer / Store
+    const initialState = 0;
+    const countReducer = (state = initialState, action) => {
+    switch (action.type) {
+        case 'increment':
+        return state + 1; 
+        case 'decrement':
+        return state - 1; 
+        default:
+        return state;
+    }
+    };  
+    const store = createStore(countReducer);
+
+    // HTML Elements
+    const counterElement = document.getElementById('counter');
+    const incrementer = document.getElementById('incrementer');
+    const decrementer = document.getElementById('decrementer');
+
+    // Store State Change Listener
+    const render = () => {
+    counterElement.innerHTML = store.getState();
+    }
+    store.subscribe(render); // để update ui khi có sự thay đổi.
+
+    // DOM Event Handlers
+    const incrementerClicked = () => {
+    store.dispatch(increment());
+    }
+    incrementer.addEventListener('click', incrementerClicked);
+    
+    const decrementerClicked = () => {
+    store.dispatch(decrement());
+    }
+    decrementer.addEventListener('click', decrementerClicked);
+
+    render();


