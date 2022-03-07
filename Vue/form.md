- v-model sẽ luôn bỏ qua value, checked và selected attributes ở các form element.
- Với mỗi element khác nhau sẽ có các properties và event khác nhau.
- text và textarea sẽ dùng value property và input event
- checkbox và radio sẽ dùng checked property và change event.
- Select field dùng value như là props và change là event.


# Value binding 
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
// when checked:
vm.toggle === 'yes'
// when unchecked:
vm.toggle === 'no'

- true-value và false-value attributes ko ảnh hưởng đến input value attribute.


# Modifiers
- .lazy : v-model sẽ synced dựa vào event change thay vì input.
- .number : nếu ta muốn 
- .trim

