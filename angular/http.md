- Để sử dụng http ta sẽ import module sau : 

+ import {HttpClientModule} from '@angular/common/http';

- Sau đó để trong phần imports.

- Ở Component cần sử dụng ta sẽ import : 

+   import { HttpClient } from '@angular/common/http';
+   constructor(private http: HttpClient) {}

- Và bắt đầu sử dụng các method cần thiết.
- Request chỉ được gửi khi mà ta subscribe.

+   onCreatePost(postData: { title: string, content: string }) {
+       this.http.post('https://ng-guild-http-default-rtdb.firebaseio.com/posts.json', postData).
+           subscribe((resData) => {
+               console.log(resData);
+           });
+   }

- Để handling error ta có thể làm như sau : Cách 1 :

+    this.postService.fetchPosts().subscribe((posts) => {
+      this.isFetching = false;
+      this.loadedPosts = posts;
+    }, (error) => {
+      this.error = error.message;
+      console.log(error);
+    });

- Cách 2 : Dùng Subject

+        error = new Subject<string>();
+
+        this.http
+            .post<{ name: string }>(
+                'https://ng-guild-http-default-rtdb.firebaseio.com/posts.json',
+                postData
+            )
+            .subscribe({
+                next: (resData) => {
+                    console.log(resData);
+                }, 
+                error: error => {
+                    this.error.next(error.message);
+                }
+            });

- Cách 3 dùng catchError từ rxjs

