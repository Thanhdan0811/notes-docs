- submit event sẽ kích khi form được submit.
- method form.submit() cho phép form bắt đầu sending từ javascript.

# Event : submit.
- Có 2 cách chính để submit form.
    + <input type="submit"> hoặc <input type="image"> được click.
    + press Enter trong input field.

- Cả 2 đều sẽ kích submit event trên form. Có thể dùng event.preventDefault() để chặn send đến server.
- Ví dụ :

    + <form onsubmit="alert('submit!');return false">
    +   First: Enter in the input field <input type="text" value="text"><br>
    +   Second: Click "submit": <input type="submit" value="Submit">
    + </form>

- Mối quan hệ giữa submit và click, khi form được send sử dụng enter press, thì lúc đó sẽ có 1 sự kiện click được kích trên thẻ input type="submit".

# Method : submit.
- Để submit 1 form thủ công, ta có thể dùng form.submit(). Sau đó submit event sẽ không kích, Nó sẽ giả định khi gọi form.submit() thì script đã làm các việc xử lý còn lại.

    + let form = document.createElement('form');
    + form.action = 'https://google.com/search';
    + form.method = 'GET';
    + 
    + form.innerHTML = '<input name="q" value="test">';
    + 
    + // the form must be in the document to submit it
    + document.body.append(form);
    + 
    + form.submit();