<form (ngSubmit)=""></form>

- ngSubmit là directive của angular 
- Ta có thể dùng như ssau :


+   @ViewChild('formEl') signupForm: NgForm;
+   <form (ngSubmit)="obSubmit(formEl)" #formEl="ngForm"></form>
+   
+   onSubmit(formEl: NgForm) {
+       console.log("Submitted!!", formEl);
+   }
+   // OR
+   onSubmit(formEl: NgForm) {
+       console.log("Submitted!!", this.signupForm);
+   }


- NgFrom import từ @angular/forms
- Ví dụ :

+   <input 
+       type="email" 
+       name="email" 
+       id="email" 
+       class="form-control"
+       ngModel
+       required
+       email
+   >

- email property ko phải là HTTML built-in property. Mà nó là directive trong angular.
- Ta có thể dùng formRef để disabled button như sau :

+   <button 
+       class="btn btn-primary" 
+       type="submit"
+       [disabled]="!formEl.valid"
+   >Submit</button>

- Để lấy thông tin về từng input 


+ <input 
+     type="email" 
+     name="email" 
+     id="email" 
+     class="form-control"
+     ngModel
+     required
+     email
+     #emailEl="ngModel"
+ \>
+ <span class="help-block" *ngIf="!emailEl.valid && emailEl.touched">
+     Please enter a valid email!!
+ </span>


- ngModel ở đây sẽ trả về 1 số thông tin về control mà nó tạo ra.
- Ví dụ ta có 1 div cha wrap các input lại , và ta muốn group các input lại thành 1 object, ta sẽ làm như sau : 

+   <div class="user-data" ngModelGroup="userData" #userData="ngModelGroup"></div>
+   <p *ngIf="!userData.valid && userData.touched">User Data is invalid!!!</p>

- Ta sẽ thấy giống như phần email ở trên.
- 

# Set value cho input trong form

- Để xét value cho input như khi ta nhấn nút, ta sẽ làm như sau :

+   <form (ngSubmit)="onSubmit(formEl)" #formEl="ngForm"></form>
+   
+   @ViewChild('formEl') signupForm: NgForm;
+   
+   suggestUserName() {
+       const suggestedName = 'Superuser';
+       // this.signupForm.setValue({
+       //   userData: {
+       //     username: suggestedName,
+       //     email: ""
+       //   },
+       //   secret: "pet",
+       //   questionAnswer: "",
+       //   gender: "male",
+       // });
+       this.signupForm.form.patchValue({
+         userData: {
+           username: suggestedName,
+         }
+       });
+   }

- Ta có thể dùng setValue (phải set toàn bộ value) hoặc .form.patchValue (set cho từng value)
- Để reset lại form ta có thể làm như sau :

+   this.signupForm.reset();

- Cũng có thể truyền vào object để reset lại 1 value có sẵn.
