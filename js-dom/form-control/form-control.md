# Form properties and methods.

## Navigation : form and elements.
- Document forms là member của special collection __document.forms__
- Được gọi là "named collection" : là cả named và ordered. Ta có thể dùng cả name và number trong document để get form.

    + document.forms.my;
    + document.forms[0];

- Khi ta có form thì bất cứ element đều có thể lấy thông qua named collection __form.elements__

     `<form name="my">
        <input name="one" value="1" /> 
        <input name="two" value="2" /> 
      </form>
      <form>
        <input type="radio" name="age" value="10" /> 
        <input type="radio" name="age" value="20" />
      </form>
      let form = document.forms.my; 
      let one = form.elements.one
      let form_2 = document.forms[1];
      let age = form_2.elements.age;
      console.log(age[0]) // [object HTMLInputElement]
    `

- những navigation properties này không phụ thuộc vào tag structure. Tất cả control element bất kể nó deep đến đâu trong form, đều hiện diện trong form.elements.
- NOTE : có 1 cái shorter ta có thể get element như sau : __form[index/name]__ . Nói cách khác, thay vì là form.elements.login thì sẽ là form.login. Nhưng sẽ có 1 issue là nếu ta get element và sau đó thay đổi name của nó thì nó vẫn sẽ hiện diện dưới cái tên cũ.


## Backreference: element.form 
- Với bất cứ element nào, form có thể được get bởi element.form. Do đó form tham chiếu đến mọi elements và elements tham chiếu đến form.

    + let login = form.login;
    + console.log(login.form);


## Form elements 

### input and textarea.
- Ta có thể access giá trị bằng cách input.value hoặc input.checked cho checkboxes.
- NOTE : textarea.value chứ ko phải .innerHTML.

### select và option
- <select> có 3 properties quan trọng
    + select.options : là collection của <option> subelement.
    + select.value : value của currently selected <option>
    + select.selectedIndex : number của currently selected <option>

- Có 3 cách để set value cho <select>
    + Tìm <option> element và set option.selected = true.
    + Nếu ta biết new value : set select.value = new value;
    + Nếu ta biết new option number : set select.selectedIndex thành number đó.

- Ví dụ :

    `
        <select id="select">
            <option value="apple">Apple</option>
            <option value="pear">Pear</option>
            <option value="banana">Banana</option>
        </select>

        <script>
            // all three lines do the same thing
            select.options[2].selected = true;
            select.selectedIndex = 2;
            select.value = 'banana';
            // please note: options start from zero, so index 2 means the 3rd option.
        </script>
    `

- <select> cho phép chọn nhiều option bằng cách thêm multiple attribute.

## Focusing: Focus/blur
- 