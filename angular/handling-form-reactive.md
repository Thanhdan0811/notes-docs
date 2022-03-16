- Để sử dụng reactive xử lý form ta sẽ import ở module : ReactiveFormsModule
- Trong file ts :

+   signupForm: FormGroup;
+   
+      ngOnInit(): void {
+        this.signupForm = new FormGroup({
+          'username': new FormControl(null),
+          "email": new FormControl(null),
+          "gender": new FormControl('male'),
+        });
+   }

- Gắn vào html

+   <form [formGroup]="signupForm" (ngSubmit)="onSubmit()"></form>
+   <input 
+       type="text" 
+       name="username" 
+       id="username" 
+       class="form-control"
+       formControlName="username"
+   />

- new FormControl sẽ nhận vào 3 arguments : value, validator và asyncValidator.
- ở html form ta sẽ dùng như trên, ở các thẻ input cần có property formControlName để match với object trong ts.
- Lúc này ta ko cần có local reference.

# Thêm Validators

+   ngOnInit(): void {
+        this.signupForm = new FormGroup({
+          'username': new FormControl(null, Validators.required),
+          "email": new FormControl(null, [Validators.required, Validators.email]),
+          "gender": new FormControl('male'),
+        });
+   }

- Để access từng input trong file html 
  
+   <span
+       *ngIf="
+       !signupForm.get('username')?.valid &&
+       signupForm.get('username')?.touched
+       "
+       class="help-block"
+       >Please enter a valid username!</span
+   />

# Group Input lại thành group

+   ngOnInit(): void {
+       this.signupForm = new FormGroup({
+       "userData": new FormGroup({
+           'username': new FormControl(null, Validators.required),
+           "email": new FormControl(null, [Validators.required, Validators.email]),
+       }),
+       "gender": new FormControl('male'),
+       });
+   }

- Để sử dụng trong html , ở element cha của input ta thêm thuộc tính sau :

+ <div class="form-group" formGroupName="userData"></div>
+ <span
+     *ngIf="
+     !signupForm.get('userData.email')?.valid &&
+     signupForm.get('userData.email')?.touched
+     "
+     class="help-block"
+     >Please enter a valid email!</span
+ >

- Ta sẽ sử lại thành userData.email

# FormArray
- Khi muốn lưu input ở dạng array như hobbies :
- Ở file ts : ta sẽ dùng FormArray.

+   ngOnInit(): void {
+       this.signupForm = new FormGroup({
+       "userData": new FormGroup({
+           'username': new FormControl(null, Validators.required),
+           "email": new FormControl(null, [Validators.required, Validators.email]),
+       }),
+       "gender": new FormControl('male'),
+       "hobbies": new FormArray([]),
+       });
+   }
+   
+   onSubmit() {
+       console.log(this.signupForm);  
+   }
+   
+   get hobbies() {
+       return this.signupForm.get('hobbies') as FormArray;
+   }
+   
+   onAddHobby() {
+       const control = new FormControl(null, Validators.required);
+       (<FormArray>this.signupForm.get('hobbies')).push(control);
+   }

- Ở file HTMl : 

`
    <div formArrayName="hobbies">
        <h4>Your Hobbies</h4>
        <button 
            class="btn btn-default" 
            type="button"
            (click)="onAddHobby()"
        >
            Add Hobby
        </button>
        <div 
            class="form-group"
            *ngFor="let hobbyControl of hobbies.controls; let i = index"
        >
            <input type="text" class="form-control" [formControlName]="i">
        </div>
    </div>

`

- hobbies.controls : ở đây ta dùng get vì để tránh lỗi typescript
- Ở trên khi click vào button thì sẽ tạo 1 input cho ta nhập vào 1 hobby.
- chú ý ở div cha có property : _formArrayName="hobbies"_
- Vì khi click button sẽ thêm vào 1 formControl trong array (xem file ts), nên cũng cần có formControlName ở đây chính là index trong array.


# Custom Validator 
- Validator thực chất chỉ là 1 hàm. ta sẽ trả về 1 object và null nếu đúng như sau : 

`
    forbiddenUsernames = ['male', 'female'];

        signupForm: FormGroup;

    ngOnInit(): void {
        this.signupForm = new FormGroup({
        "userData": new FormGroup({
            'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
            "email": new FormControl(null, [Validators.required, Validators.email]),
        }),
        "gender": new FormControl('male'),
        "hobbies": new FormArray([]),
        });
    }

    onSubmit() {
        console.log(this.signupForm);  
    }

    get hobbies() {
        return this.signupForm.get('hobbies') as FormArray;
    }

    get errorsUserName() {
        return this.signupForm.get("userData.username")?.errors || {};
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    forbiddenNames(control: FormControl): {[s: string]: boolean} | null {
        if (this.forbiddenUsernames.indexOf(control.value) !== 1) {
            return { 'nameIsForbidden': true };
        }
        return null;
    }
`

- Ở file html : 

`
    <span
        *ngIf="
        !signupForm.get('userData.username')?.valid &&
        signupForm.get('userData.username')?.touched
        "
        class="help-block"
    >
            <span 
                *ngIf="errorsUserName['nameIsForbidden']"
            >
                this name is invalid
            </span>
            <span *ngIf="errorsUserName['required']">
                This field is required!
            </span>
    </span>
`

- errorsUserName được dùng để tránh báo lỗi typescript.
- hàm validate trả về object sẽ có dạng : {[s: string]: boolean}