# Routing guard.
- Để bảo vệ rout ta sẽ làm như sau :
- Tạo 1 file auth.service.ts xem như là check đăng nhập giả 

+   export class AuthService {
+       logged = false;
+   
+       isAuthenticated(): Promise<boolean> {
+           return new Promise((res, rej) => {
+               setTimeout(() => res(this.logged), 800)
+           });
+       }
+   
+   
+       login() {
+           this.logged = true;
+       }
+       logout() {
+           this.logged = false;
+       }
+   }

- Tiếp tục tạo file auth-guard.service.ts để xử lý :

+   import { AuthService } from './auth.service';
+   import { Injectable } from "@angular/core";
+   import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
+   import { Observable } from "rxjs";
+   
+   @Injectable()
+   export class AuthGuard implements CanActivate {
+   
+       constructor(private authServide: AuthService, private router: Router) {}
+   
+       canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
+           return this.authServide.isAuthenticated()
+               .then((res: boolean) => {
+                   if (res) {
+                       return true;
+                   } else {
+                       this.router.navigate(["/"]);
+                       return false;
+                   }
+               })
+       }
+   }

- Nhớ import 2 service vào appModule providers.
- Tiếp tục ở file cấu hình router ta sẽ thêm property _canActivate_ sau :
- Đây có thể đặt tên là app-routing.module.ts, ta sẽ cần import AppRoutingModule vào file appModule chính.

+   const appRoutes: Routes = [
+     { path: '', component: HomeComponent },
+     {
+       path: 'users',
+       component: UsersComponent,
+       children: [{ path: ':id/:name', component: UserComponent }],
+     },
+     {
+       path: 'servers',
+       canActivate: [AuthGuard],
+       component: ServersComponent,
+       children: [
+         { path: ':id', component: ServerComponent },
+         { path: ':id/edit', component: EditServerComponent },
+       ],
+     },
+     {
+       path: 'not-found',
+       component: PageNotFoundComponent,
+     },
+     {
+       path: '**',
+       redirectTo: '/not-found',
+     },
+   ];
+   
+   @NgModule({
+     imports: [RouterModule.forRoot(appRoutes)],
+     exports: [RouterModule],
+   })
+   export class AppRoutingModule {}

-  Lúc này nếu trả về false thì ta sẽ ko thể truy cập vào services.

# guard component child
- Nếu ta vẫn muốn vào servers nhưng cần check quyền các con thì sẽ làm như sau :
- Ở file auth-guard.service.ts ta sẽ sửa như sau :

+   @Injectable()
+   export class AuthGuard implements CanActivate, CanActivateChild {
+   
+       constructor(private authServide: AuthService, private router: Router) {}
+   
+       canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
+           return this.authServide.isAuthenticated()
+               .then((res: boolean) => {
+                   if (res) {
+                       return true;
+                   } else {
+                       this.router.navigate(["/"]);
+                       return false;
+                   }
+               })
+       }
+       canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
+           return this.canActivate(childRoute, state);
+       }
+   }

- Sau ở property ta sẽ đổi thành canActivateChild ở path cha.:

+   {
+       path: 'servers',
+   // canActivate: [AuthGuard],
+   canActivateChild: [AuthGuard],
+   
+       component: ServersComponent,
+   children: [
+       { path: ':id', component: ServerComponent },
+       { path: ':id/edit', component: EditServerComponent },
+   ],
+   },

