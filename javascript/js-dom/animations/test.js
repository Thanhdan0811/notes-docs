const a = [1,2,3,4,5];
const arr = [
    {
      y: {
        a: [1,2]
      },
    },
    {
      h: {
        f: [1]
      }
    },
    {
      d: {
        v: [4,7,8]
      }
    },
    {
      a:{
        l:[0]
      }
    } 
  ]

const rel = arr.filter(x => {
    return check(x)
})
console.log("kết quả ", rel);
function check(type) {
    let chekcObj = typeof type;
    if(chekcObj == "object" && !Array.isArray(type)) {
        let values = Object.values(type);
        let checkRel = false;
        for(let val of values) {
            let ck = check(val)
            console.log("ádf",val,ck);
            return ck;
        }
    } 
    if(Array.isArray(type)) {
        for(let item of type) {
            if(a.includes(item)) {
                return true;
            }
        }
        return false;
    }
}