- Với img ta có thể gán cho nó max-width: 100%; để nó ko tràn ra ngoài.
- Ta có thể dùng object-fit để làm ảnh fit với container, nó sẽ cover the box.


# ========== forms
- Vì trong 1 số browser thì form element sẽ ko inherit font styling theo mặc định.

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
