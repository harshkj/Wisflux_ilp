function marking(examType, marks) {
    if (examType === "Final-exam" && marks >= 90) {
      return true;
    }
     else if (marks >= 89 && marks <= 100) {
        if(examType === "Final-exam"){
            return false;
        }
      return true;
    } 
    else {
      return false;
    }
  }

console.log(marking("Final-exam",91));
console.log(marking("Final-exam",89));

console.log(marking("normal-exam",91));

console.log(marking("semi-final",70));
console.log(marking("semi-final",89));