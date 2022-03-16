# Nestd routed 
- Để tạo nested route ta sẽ làm như sau :


+   const appRoutes: Routes = [
+     { path: '', component: HomeComponent },
+     {
+       path: 'users',
+       component: UsersComponent,
+       children: [{ path: ':id/:name', component: UserComponent }],
+     },
+     {
+       path: 'servers',
+       component: ServersComponent,
+       children: [
+         { path: ':id', component: ServerComponent },
+         { path: ':id/edit', component: EditServerComponent },
+       ],
+     },
+   ];

- từ path /users sẽ có child là :id/:name 
- Tương tự như servers
- Nhưng ta sẽ cần tạo <router-outlet> ở servers html và users html để load route nested.

# Thay đổi url nhưng vẫn giữ query params 
- Ví dụ ta có adb.com/server/5?name=15
- /server/:id => id ở đây là 5 và có query name=15, và load component ServerComponent. 
- Nếu trong component có link dẫn đến trang /server/:id/edit thì khi ta click vào thì sẽ mất đi query params. Để giữ query ta sẽ làm như sau :

- Trong file ts :

+   onEdit() {
+     this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "string"}) 
+   }

- string ở đây có thể là 'merge' để merge query cũ và mới lại với nhau nếu cần thiết.
- string còn có thể là 'preserve' để lưu lại query cũ.

# Redirec và wildcard path.
- Để redirect path ta làm như sau :

+   const appRoutes: Routes = [
+     { path: '', component: HomeComponent },
+     {
+       path: 'users',
+       component: UsersComponent,
+       children: [{ path: ':id/:name', component: UserComponent }],
+     },
+     {
+       path: 'servers',
+       component: ServersComponent,
+       children: [
+         { path: ':id', component: ServerComponent },
+         { path: ':id/edit', component: EditServerComponent },
+       ],
+     },
+     {
+       path: 'not-found',
+       component: PageNotFoundComponent
+     },
+     {
+       path: 'something',
+       redirectTo: '/not-found'
+     }
+   ];

- Khi truy cập vào abc.com/something thì sẽ redirect về abc.com/not-found.

- Để bắt tất cả các page ko tồn tại ta sẽ làm như sau :

+     {
+       path: '**',
+       redirectTo: '/not-found'
+     }

- Ta sẽ dùng '**' wildcards
- Chú ý là ** sẽ luôn nằm ở cuối.
