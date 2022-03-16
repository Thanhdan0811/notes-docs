- Với các file css thì angular sẽ đóng gói css chỉ dành cho từng component. 
- Để tắt ta sẽ làm như sau :
Trong @Component({
    ...,
    encapsulation: ViewEncapsulation.None,
    encapsulation: ViewEncapsulation.Native,
    encapsulation: ViewEncapsulation.Emulated,
})

- None sẽ tắt đóng gói
- Native sẽ dùng kỹ thuật ShadowDom 
- Emulated : là mặc định.
