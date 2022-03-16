Sử dụng @input() để nhận data binding từ component cha
Sử dụng @Output() name = new EventEmitter<T>();
        handleName {
            name.emit(value<T>);
        }
        Bên ngoài component cha : (name)="onHandle($event)"