function solve(x, y) {
    const innerCirclePoints = 10;
    const middleCirclePoints = 5;
    const outterCirclePoints = 1;
    const outsideCirclePoints = 0;


    const outerCicle = 10;
    const middleCicle = 5;
    const innerCicle = 1;


    var result;


    if (isNaN(x) || isNaN(y)) {
        return null;        
    } else if (x <= innerCicle || y <= innerCicle) {
        result = innerCirclePoints;        
    } else if (x <= middleCicle || y <= middleCicle) {
        result = middleCirclePoints;
    } else if (x <= outerCicle || y <= outerCicle) {
        result = outterCirclePoints;        
    } else if (x > outerCicle || y > outerCicle) {
        result = outsideCirclePoints;
    }

    return result;


    
}

// solve(10, 0);

export { solve };