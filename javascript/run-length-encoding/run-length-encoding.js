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


  for (let index = 0; index < data.length; index++) {
    let element = data.charAt(index);
    let nextElement = data.charAt(index + 1);

    if (element >= '0' && element <= '9') {
      // console.log('number');

      if (condition) {
        
      }
      for (let index = 0; index < element; index++) {
        decodedData += nextElement;
      }

    } else {
      // console.log('character');
    }

    
    
  }
  // console.log(decodedData);
  return decodedData;

}

// decode("2A3  B4C");

export { encode, decode };