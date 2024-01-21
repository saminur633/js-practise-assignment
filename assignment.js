function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}


const radiansValue = 2; 
const degreesValue = radiansToDegrees(radiansValue);
console.log(degreesValue);
