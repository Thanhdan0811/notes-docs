# Directives 
- are Instructions in the DOM. là các chỉ dẫn, câu lệnh trong DOM.
- Khi ta dùng selector để gọi component thì ta đang chỉ dẫn Angular thêm content của component template và cả logic vào.
- Do đó Component cũng được xem là directives nhưng là directives với 1 template.
- Để khai báo 1 directives ta sẽ dùng Decorator @Directive({selector: "[nameDirective]"})
- Ngoài ra còn có các directive có sẵn.

## ngIF Structural Directives.
- Structural Directives có nghĩa là sẽ thay đổi cấu trúc của DOM.
- Ví dụ :

+   <p *ngIf="serverCreated; else noServer"> Server was created, server name is {{serverName}}</p>
+   <ng-template #noServer> <p>No server was created!</p> </ng-template>

- Dấu # được gọi là local Reference.

## Attribute Directive.
- Attribute directive sẽ không add hay remove element, mà nó sẽ chỉ thay đổi elment mà nó được gán vào.
- ngStyle : là 1 directive
- [ngStyle] : dấu [] chỉ mang ý nghĩa là binding data.
- Ví dụ :

+   <p [ngStyle]="{'backgroundColor': getColor()}" >Server with ID {{ serverID }} is {{ serverStatus }}</p>

- ngClass cũng là 1 Attribute Directive.

## ngFor 
- *ngFor
