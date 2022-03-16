- ng-content là 1 special directive.

<component-cha>
    <noi-dung></noi-dung>
</component-cha>

Trong Component con có thể dùng như sau :

<div>
    <ng-content select="css or tag selector"></ng-content>
</div>

Mặc định chỉ có 1 sẽ chọn đúng, nếu có nhiều nhưng không xác định nơi match thì sẽ vào ng-content cuối. 

# === ContentChild()
<noi-dung #layNoiDung></noi-dung>

- Bên trong component con muốn lấy local Reference thì ta sẽ dùng : 
 @ContentChild("layNoiDung") parag: ElementRef;

- Tương tự như ViewChild