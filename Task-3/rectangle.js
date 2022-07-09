module.exports = (l, h, callback) => {
    if(l<=0 || h<=0){
        setTimeout(() => callback(new Error("L & H must be greater than 0!"), null), 2000);
    } else {
        setTimeout(() => callback(null, {
            area: () => (l*h),
            perimeter: () => 2*(l*h)
        }), 2000);
    }
}