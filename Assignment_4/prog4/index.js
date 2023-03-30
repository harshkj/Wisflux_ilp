const diff=(number) =>{
    const re = Math.abs(number - 13);
    if (number > 13) {
      return re * 2;
    } 
    else {
      return re;
    }
  }
  
  
  console.log(diff(5));
  console.log(diff(40));
  