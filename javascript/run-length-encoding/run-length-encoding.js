/* eslint-disable no-console */
function encode(data) {
  var encodedData = "";
  var repeated = 1;

  for (let index = 0; index < data.length; index++) {
    var element = data.charAt(index);
    var nextElement = data.charAt(index + 1);


    if (element === nextElement) {

      repeated++;

    } else if (element !== nextElement) {

      if (repeated === 1) {
        encodedData += element;
      } else {
        encodedData += repeated + element;
        repeated = 1;
      }


    }
  }

  return encodedData;

}


function decode(data) {
  var decodedData = "";

  //iterate over string
  for (let index = 0; index < data.length; index++) {
    let prevElement = data.charAt(index - 1);
    let element = data.charAt(index);
    let nextElement = data.charAt(index + 1);
    let nextNextElement = data.charAt(index + 2);

    let doubleDigit;
    console.log('index: ' + index);
    

    if (element >= '0' && element <= '9' &&
      nextElement >= '0' && nextElement <= '9') {
      console.log('double digit number');
      doubleDigit = element + nextElement;
      console.log('doubleDigit: ' + doubleDigit);

      for (let index = 0; index < doubleDigit; index++) {
        decodedData += nextNextElement;
      }
      index++;
      console.log('decoded: ' + decodedData);
      
    } else if (element >= '0' && element <= '9') {
      console.log('single digit number');
      
      for (let index = 0; index < element; index++) {
        decodedData += nextElement;
      }
      index++;
      console.log('decoded: ' + decodedData);
    } else {
      console.log('character');
      decodedData += element;
      console.log('decoded: ' + decodedData);
    }


    console.log('----------------');
  }
  console.log(decodedData);
  
    
  return decodedData;

}

// decode("2A3B4C");

export { encode, decode };