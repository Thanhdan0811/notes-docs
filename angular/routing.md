- Để dùng routing ta sẽ khai báo ở app module

+   import { Route, RouterModule, Routes } from '@angular/router';
+   const appRoutes: Routes = [
+     { path: '', component: HomeComponent },
+     { path: 'users', component: UsersComponent },
+     { path: 'users/:id', component: UserComponent },
+     { path: 'servers', component: ServersComponent },
+   ];
+   
+   @NgModule({
+     declarations: [
+       AppComponent,
+       HomeComponent,
+       ServersComponent,
+       UsersComponent,
+       UserComponent,
+       EditServerComponent,
+       ServerComponent
+     ],
+     imports: [
+       BrowserModule,
+       FormsModule,
+       RouterModule.forRoot(appRoutes),
+     ],
+     providers: [
+       ServersService
+     ],
+     bootstrap: [AppComponent]
+   })
+   export class AppModule { }

- Dùng thẻ sau để xác định nơi routing.

<router-outlet></router-outlet>

- Để sử dụng chuyển trang ở html ta sẽ dùng :

+   <li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/">Home</a></li>
+ <li role="presentation" routerLinkActive="active"><a [routerLink]="['/users']">Users</a></li>

- routerLinkActive Sẽ xác định link hiện tại và gán class active cho nó.
- routerLinkActiveOptions : Sẽ xác định đúng đường dẫn.
- routerLink : là Tên đường dẫn
- NOTE : relative path : abc.com/users và có routerLink là /users thì vẫn sẽ là abc.com/users. Nhưng nếu routerLink là users thì lúc này tên miền sẽ là abc.com/users/users

- Để dùng chuyển trang trong file ts, ta sẽ làm như sau :

+   export class HomeComponent implements OnInit {
+   
+     constructor(private router: Router) { }
+   
+     ngOnInit(): void {
+     }
+   
+     onLoadServers() {
+       // Complex Calculation
+       this.router.navigate(['/servers']);
+       // Cách viết này sẽ dùng như là relative Path, /servers/servers
+       // this.router.navigate(["/servers",], { relativeTo: this.route })
+     }
+   
+   }

# ======= Truyền parameter vào đường dẫn.


+   const appRoutes: Routes = [
+     { path: '', component: HomeComponent },
+     { path: 'users', component: UsersComponent },
+     { path: 'users/:id/:name', component: UserComponent },
+     { path: 'servers', component: ServersComponent },
+   ];
 
- Để lấy parameter id :

+   export class UserComponent implements OnInit {
+   
+     user: { id: string, name: string};
+   
+     constructor(private route: ActivatedRoute) { }
+   
+     ngOnInit(): void {
+       console.log("param id", this.route);
+       this.user = {
+         id : this.route.snapshot.params['id'],
+         name: this.route.snapshot.params['name']
+       };
+     }
+   
+   }


- Object ActivatedRoute sẽ cho phép ta access id được passed vào url.
- Cách làm ở trên sẽ ok nếu như ta chuyển từ trang khác đến, nhưng nếu là ở trang hiện tại và 
- ta mún thay đổi user ví dụ : <a href="" [routerLink]="['/users', 10, 'Dan']">/users/10/Dan</a>
- THì khi ta click vào link url sẽ thay đổi nhưng html sẽ ko cập nhật.
- Do Angular hiểu là vẫn đagn ở component hiện tại nên ko cần khởi tạo lại component.
- Để fix lỗi này ta sẽ làm như sau :

+   ngOnInit(): void {
+       console.log("param id", this.route);
+       this.user = {
+         id : this.route.snapshot.params['id'],
+         name: this.route.snapshot.params['name']
+       };
+       this.route.params.subscribe(
+         (params: Params) => {
                this.user = {
                id : params['id'],
                name: params['name']
                };
            }
+       );
+     }

- subscribe sẽ có 3 function paramerter, function đầu tiên sẽ chạy mỗi khi data mới được truyền vào observable subscribe hay mỗi lần params thay đổi.
- Chú ý là subscribe observable vẫn sẽ ko mất đi khi destroy component.
- Để sửa ta sẽ làm như sau :

+   export class UserComponent implements OnInit, OnDestroy {
+   
+     user: { id: string, name: string};
+     paramsSubscription: Subscription; // Subscription được import từ rxjs
+   
+   
+     constructor(private route: ActivatedRoute) { }
+   
+     ngOnInit(): void {
+       console.log("param id", this.route);
+       this.user = {
+         id : this.route.snapshot.params['id'],
+         name: this.route.snapshot.params['name']
+       };
+       this.paramsSubscription =  this.route.params.subscribe(
+         (params: Params) => {
+           this.user = {
+             id : params['id'],
+             name: params['name']
+           };
+         }
+       );
+     }
+   
+     ngOnDestroy(): void {
+       this.paramsSubscription.unsubscribe();
+     }
+   }


# ====== Query paramerter and Fragment.
- Ta có thể tạo link và truyền vào query parameter như sau :

+    <a 
+        href="" 
+        [routerLink]="['/servers',5, 'edit']" 
+        [queryParams]="{allowEdit: '1'}"
+        class="list-group-item"
+    >
+        ProductServer    
+    </a>
+    
+    <a 
+        href="" 
+        [routerLink]="['/servers',5, 'edit']" 
+        [queryParams]="allowEdit: '2'"
+        class="list-group-item"
+    >
+        TestServer
+    </a>

- ở đây ta dùng [queryParams]
- Ta có thể thêm hagh vào url như sau 

+     <a 
+         href="" 
+         [routerLink]="['/servers',5, 'edit']" 
+         [queryParams]="{allowEdit: '1'}"
+         [fragment]="'loading'"
+         class="list-group-item"
+     >
+         ProductServer    
+     </a>


- Ở appModule khai báo path sẽ là : /servers/:id/edit
- Lúc này url sẽ là abc.com/servers/5/edit&allowEdit=1#loading

- Để dùng query params và fragment trong ts ta sẽ làm như sau :


+       constructor(private router: Router) { }
+       onLoadServers(id: number) {
+           // Complex Calculation
+           this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: "1"}, fragment: "loading"});
+       }

## Cách để lấy lại query param và fragment.
- Ta sẽ có 2 cách tiếp cận : 

+       constructor(private router: Router) { }

- Cách đầu tiên :

+   ngOnInit(): void {
+       console.log(this.route.snapshot.queryParams);
+       console.log(this.route.snapshot.fragment);
+   }

- Cách thứ 2 :

+   ngOnInit(): void {
+       this.route.queryParams.subscribe();
+        this.route.fragment.subscribe();
+   }

- Cách 2 sẽ theo dõi sự thay đổi của params và fragment. cần clear khi destroy. angular có thể làm cho chúng ta.
