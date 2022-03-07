- Remember, actions in Redux are represented by plain JavaScript objects that have a type property and are dispatched to the store using the store.dispatch() method. 
- Remember, action creators are functions that return a formatted action object.
- Remember, the store‘s reducer function is called each time an action is dispatched. It is passed the action and the current state as arguments and returns the store‘s next state. 

- Khi ứng dụng lớn lên, ta sẽ dũng kỹ thuật được gọi là reducer composition.

-

import { createStore } from 'redux';
 
// todosReducer and filterReducer omitted
 
const rootReducer = (state = {}, action) => {
  const nextState = {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  };
  return nextState;
};
 
const store = createStore(rootReducer);


# ===== sử dụng combineReducers

+  import { createStore, combineReducers } from 'redux'
+   
+  // todosReducer and filterReducer omitted.
+   
+  const reducers = {
+      todos: todosReducer,
+      filter: filterReducer
+  };
+  const rootReducer = combineReducers(reducers);
+  const store = createStore(rootReducer);

- reducers chứa các reducers nhỏ hơn , combineReducers function sẽ nhận vào object này và trả về 1 rootReducer function.
- hàm rootReducer sẽ được pass vào createStore() để tạo ra object store.

- Cấu trúc redux : src/ => app/store.js (định nghĩa và export store) 
                   src/features =>features/featuresSliceA.js....

# ========== Sử dụng react redux
