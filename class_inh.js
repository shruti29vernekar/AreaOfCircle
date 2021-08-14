class  Shape{
    constructor(shapeName, radius, color ){
        this.shape = shapeName;
        this.area = radius ;
        this.color = color;
    }
    drawShape(){
        return `Name of the shape is ${this.shape}.`;
    }

    calculateArea(){
        return `Area of ${this.shape} is ${this.area}`;
    }
    
}

class Circle extends Shape{
    constructor(shapeName, radius, color){
        super(shapeName, radius, color);

    }
    calculateArea(){
        return `Area of ${this.shape} is ${3.14 * this.radius * this.radius}`;
}
}

 circle= new Circle("circle",5, "blue");
console.log(circle.calculateArea());
