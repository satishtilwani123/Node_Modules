const Rectangle = require('./rectangle');

function CalcRectangle(l, h){

    Rectangle(l, h, (err, rec) => {
        if(err){
            console.log(err.message);
        } else {
            console.log("Area of Rectangle = "+rec.area());
            console.log("Perimeter of Rectangle = "+rec.perimeter());
            console.log("\n");
        }
    })
}

CalcRectangle(1, 3);
CalcRectangle(3, 2);
CalcRectangle(0, 1);