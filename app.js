function XO(str) {
    var splitValue = str.split('');
    var exes = 0;
    var ohs = 0;
  
    for (let i = 0; i < splitValue.length; i++) {
      if (splitValue[i].toLowerCase() === 'x') {
        exes++;
      }
      if(splitValue[i].toLowerCase() === 'o') {
        ohs++;
      }
    }
    
    return exes === ohs;
  }