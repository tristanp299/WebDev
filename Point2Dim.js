'using strict'

class Point2Dim{

  constructor(x, y){
    this.x = x
    this.y = y
  }

  distanceFrom(coord){
    return Math.sqrt((coord.x-this.x)**2+(coord.y-this.y)**2)
  }
}

let p1 = new Point2Dim(1,2);
console.log(p1);
let p2 = new Point2Dim(0,0);
console.log(p1.distanceFrom(p2));

class Point3Dim extends Point2Dim{

  constructor(x, y, z){
    super(x, y);
    this.z =z
  }

  distanceFrom(coord){
    return Math.sqrt((coord.x-this.x)**2+(coord.y-this.y)**2+(coord.z-this.z)**2)
  
  }
}

let p3 = new Point3Dim(1, 2, 3);
console.log(p3);
let p4 = new Point3Dim(3, 4, -5)
console.log(p3.distanceFrom(p4));