- Có thể tạo tay name.directive.ts
- Hoặc dùng lệnh : ng g d name-directive

- Ví dụ :


+   import { Directive, ElementRef, OnInit } from "@angular/core";
+   
+   @Directive({
+       selector: "[appBasicHighlight]",
+   })
+   export class BasicHighlightDirective implements OnInit {
+   
+       constructor(private elementRef: ElementRef) {    }
+   
+       ngOnInit(): void {
+           this.elementRef.nativeElement.style.backgroundColor = "blue";
+       }
+   
+   }
+   <p appBasicHighlight>Style me with basic directive!</p>


- [appBasicHighlight] : dấu "[]" cho angular biết đây là attribute directive.
- Lưu ý cần import vào module quản lí.
- Chúng ta ko nên sử dụng trực tiêp thay đổi style như trên, ta có thể làm như sau :

+   import { ElementRef, OnInit, Directive,Renderer2} from '@angular/core';
+   
+   @Directive({
+     selector: '[appBetterHighlight]'
+   })
+   export class BetterHighlightDirective implements OnInit{
+   
+     constructor(private elRef : ElementRef ,private renderer: Renderer2) { }
+   
+     ngOnInit(): void {
+       this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor", "green");
+     }
+   
+   }


- Sử dụng renderer để sử dụng các method set style hay class, dùng local Reference để các method thực hiện.
- Nhớ import Renderer2

- 2 Ví dụ trên vẫn gặp vấn đề là bị thụ động do set value mặc định.
- Để react với event xảy ra với element mà directive được gán vào.
- Ví dụ Sử dụng event trong directive :

+   import { ElementRef, OnInit, Directive,Renderer2, HostListener} from '@angular/core';
+   
+   @Directive({
+     selector: '[appBetterHighlight]'
+   })
+   export class BetterHighlightDirective implements OnInit{
+   
+     @HostListener("mouseenter") mouseover(eventData : Event) {
+       this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor", "green");
+     }
+     @HostListener("mouseleave") mouseleave(eventData : Event) {
+       this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor", "transparent");
+     }
+   
+     constructor(private elRef : ElementRef ,private renderer: Renderer2) { }
+   
+     ngOnInit(): void {
+       // this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor", "green");
+     }
+   
+   }

- Để không dùng renderer ta sẽ dùng HostBinding như sau :

+   import { ElementRef, OnInit, Directive,Renderer2, HostListener, HostBinding} from '@angular/core';
+   
+   @Directive({
+     selector: '[appBetterHighlight]'
+   })
+   export class BetterHighlightDirective implements OnInit{
+   
+     @HostBinding("style.backgroundColor") backgroundColor : string = "";
+   
+     @HostListener("mouseenter") mouseover(eventData : Event) {
+       // this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor", "green");
+       this.backgroundColor = "blue";
+     }
+     @HostListener("mouseleave") mouseleave(eventData : Event) {
+       // this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor", "transparent");
+       this.backgroundColor = "transparent";
+     }
+   
+     constructor(private elRef : ElementRef ,private renderer: Renderer2) { }
+   
+     ngOnInit(): void {
+       // this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor", "green");
+     }
+   
+   }

# Binding từ bên ngoài
- Để truyền value từ bên ngoài ta sẽ làm như sau :

+   import { ElementRef, OnInit, Directive,Renderer2, HostListener, HostBinding, Input} from '@angular/core';
+   
+   @Directive({
+     selector: '[appBetterHighlight]'
+   })
+   export class BetterHighlightDirective implements OnInit{
+     @Input() defaultColor: string = "transparent";
+     @Input() highlightColor: string = "blue";
+     @HostBinding("style.backgroundColor") backgroundColor : string = this.defaultColor;
+   
+     @HostListener("mouseenter") mouseover(eventData : Event) {
+       this.backgroundColor = this.highlightColor;
+     }
+     @HostListener("mouseleave") mouseleave(eventData : Event) {
+       this.backgroundColor = this.defaultColor;
+     }
+   
+     constructor(private elRef : ElementRef ,private renderer: Renderer2) { }
+   
+     ngOnInit(): void {
+       this.backgroundColor = this.defaultColor;
+     }
+   
+   }

- ở đây ta dùng input decorator
- Sau đó ở tag ta làm như sau :

+ <p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'">Style me with better directive!</p>


- để giảm bớt : Ta sẽ dùng alias cùng tên với directive.

+   @Input("appBetterHighlight") highlightColor: string = "blue";

=> <p [appBetterHighlight]="'red'" [defaultColor]="'yellow'" >Style me with better directive!</p>


# ========= Custom Structural directive
- Ví dụ sau :

+   import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
+   
+   @Directive({
+     selector: '[appUnless]'
+   })
+   export class UnlessDirective {
+   
+     @Input() set appUnless(condition: boolean) {
+       if (!condition) {
+         this.vcRef.createEmbeddedView(this.templateRef);
+       } else {
+         this.vcRef.clear();
+       }
+     } 
+   
+     constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
+   
+   }

- ví dụ này giống với ngIf

+   <div *appUnless="onlyOdd">
+       <H2>THis is use custom structural directives</H2>
+   </div>

- 