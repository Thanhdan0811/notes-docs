var Point = function(x,y) {
    this.x = x;
    this.y = y;
}
function Point_toString() {
    return "Point(" +this.x+","+this.y+")";
}
Point.prototype.toString = Point_toString;
var myPoint  = new Point(0,0);
console.log(myPoint.toString());