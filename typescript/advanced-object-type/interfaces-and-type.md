# Interfaces and Types.
- Vơi type :

>   type Mail = {
>     postagePrice: number;
>     address: string;
>   }
>    
>   const catalog: Mail = ...

- với interface

>   interface Mail {
>     postagePrice: number;
>     address: string;
>   }
>    
>   const catalog: Mail = ...

=> interface sẽ ko có dấu =, Sự khác biệt khác nữa ở đây là :
+ Interface chỉ có thể được dùng cho type object.
+ Type thì có thể dùng cho object , primitives và more.


# Interfaces and Classes.
- Interface keyword trong typescript phù hợp để thêm type cho class.

>   interface Robot {
>     identify: (id: number) => void;
>   }
>    
>   class OneSeries implements Robot {
>     identify(id: number) {
>       console.log(`beep! I'm ${id.toFixed(2)}.`);
>     }
>    
>     answerQuestion() {
>       console.log('42!');
>     }
>   }

- Vì Robot được áp dụng cho OneSeries nên trong OneSeries phải định nghĩa methof identify.

# Deep Types
- Với class phức tạp :

>  class OneSeries implements Robot {
>    about;
>   
>    constructor(props: { general: { id: number; name: string; } }) {
>      this.about = props;
>    }
>   
>    getRobotId() {
>      return `ID: ${this.about.general.id}`;
>    }
>  }

- Ta sẽ cần khai báo interface như sau :

>    interface Robot {
>      about: {
>        general: {
>          id: number;
>          name: string;
>        };
>      };
>      getRobotId: () => string;
>    }

# Composed Types.

- Ta có thể kết hợp các types lại với nhau :


>    interface About {
>      general: General;
>    }
>     
>    interface General {
>      id: number;
>      name: string;
>      version: Version;
>    }
>     
>    interface Version {
>      versionNumber: number;
>    }

# Extending Interfaces.
- ĐÔi khi ta cần phải copy tất cả type members từ 1 type vào type khác. 
- Ta sẽ dùng extends.


>   interface Shape {
>     color: string;
>   }
>    
>   interface Square extends Shape {
>     sideLength: number;
>   }
>    
>   const mySquare: Square = { sideLength: 10, color: 'blue' };

Ví dụ khác như sau :

>   interface Developer extends Human{
>     code: () => void;
>   }
>   
>   // Add your interface here
>   interface Human  {
>     name : string,
>     hobbies : string[]
>   }
>   
>   const me: Developer = { 
>     code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
>     name: 'Corrina', 
>     hobbies: ['Building rockets']
>   }
>   
>   me.code();

# Index Signatures
- Ta có thể viết 1 object type cho phép thêm vào biến name với vai trò là property name.
- Ví dụ :

>   {
>     '40.712776': true;
>     '41.203323': true;
>     '40.417286': false;
>   }

- Ta biết property name sẽ là string, tất cả value là boolean, nhưng ta ko biết property name sẽ là gì ko xác định rõ đc.
- Ta có thể tận dụng index signature để type object này.

>   interface SolarEclipse {
>     [latitude: string]: boolean;
>   } 

- 1 ví dụ khác :

>   import { getBudgetAsync } from './api';
>   
>   // Write an interface here
>   interface Budget {
>     [category: string]: number;
>   }
>   
>   async function getBudget() {
>     const result : Budget = await getBudgetAsync();
>     console.log(result);
>   }
>   
>   getBudget();


# Optional Type Members.
- Các thành phần trong type có thể là optional.
- Ví dụ :


>  interface OptionsType {
>    name: string;
>    size?: string;
>  }
>   
>  function listFile(options: OptionsType) {
>    let fileName = options.name;
>   
>    if (options.size) {
>      fileName = `${fileName}: ${options.size}`;
>    }
>   
>    return fileName;
>  }
>  listFile({ name: 'readme.txt' }) => ko có size property.

- ? operator : sẽ đứng sau tên property và trước dấu :
- Vì là optional nên ta sẽ cần check trước khi dùng nó.

==================
# BT Final

import { getObstacleEvents } from './computer-vision';
// Type
interface AutonomousCar {
  isRunning?: boolean;
  respond :(events : Events) => void;
}
interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl : Steering;
}
interface Events {
  [name : string] : boolean;
}
interface Control {
  execute : (command : string) => void; 
}
interface Steering extends Control {
    turn : (direction : string) => void;
}
// Classes
class Car implements AutonomousCar{
  isRunning;
  steeringControl;
  constructor(props : AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }
  respond = (events : Events) => {
    if (this.isRunning === false) {
      return "car off";
    }
    Object.keys(events).forEach((eventKey)=> {
      if(events[eventKey] !== true) {
        return;
      }
      if(eventKey === "ObstacleLeft") {
        this.steeringControl.turn("right");
      }
      if(eventKey === "ObstacleRight") {
        this.steeringControl.turn("left");
      }
    })
  }
}
class SteeringControl  implements Steering {
  execute = (command : string) => {
      console.log("Executing: ",command );
  }
  turn = (direction : string) => {
    this.execute("turn " + direction);
  }
}
// Executes
let steering = new SteeringControl() ;
// steering.turn("left");
let autonomousCar = new Car({isRunning : false, steeringControl : steering});
// console.log(autonomousCar.isRunning);
console.log(autonomousCar.respond(getObstacleEvents()));

