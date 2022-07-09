const Rectangle = require('./rectangle');

function CalcRectangle(l, h){

    if(l<=0 || h<=0){
        console.log("Length & Breadth must be greater than 0!");
    } else {
        console.log("Calculating Rectangle!");
        console.log("Area of Rectangle = "+Rectangle.area(l,h));
        console.log("Perimeter of Rectangle = "+Rectangle.perimeter(l,h));
        console.log("\n");
    }
}

CalcRectangle(1, 3);
CalcRectangle(3, 2);
CalcRectangle(0, 1);