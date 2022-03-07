- tất cả component đều phải có thẻ Template
- Mỗi component đều có thể selector element bên trong template.
- ta sẽ gán attribute ref cho các element value sẽ là tên cần access.
- <input type="text" ref="name" /> => console.log(this.$refs.name) (được lấy khi click button)
- Đế style ko là global thì ta cần thêm thuộc tính scoped vào thẻ style.
- emit event ở component con sẽ gọi event ở componenrt cha.
    + ở component con : trong method sẽ gọi this.$emit("ten-event-sẽ-la-attribute-ở-component-cha");

- modifier event : @click.right hoặc @click.alt sẽ chỉ click cùng với alt hoặc click phải.
- @click.self : chỉ khi click vào chính element đó mới kích.

- slot giống như children trong react : <compoent>noidung</compoent> , trong component owr template ta sẽ dùng cặp thẻ <slot> </slot> toàn bộ noidung sẽ thay vào slot.

- Nếu có nhiều nột dung khác nhau cho nhiều slot thì ta có thể dùng :

    <template v-slot:links>
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
    </template>

- Rồi trong component sẽ dùng : <slot name="links"></slot>

- slot còn có default content.

- <teleport to="selector"></teleport> được dùng để render contetn ra 1 root khác