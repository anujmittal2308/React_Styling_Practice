//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

var d = new Date(); //taking the date or time 
var n = d.getHours();//taking only time fron d
console.log(d);
console.log(n);
let ans;
//Show a single h1 that says "Good morning" if between midnight and 12PM.
if (n < 12) {
  ans = "Good morning";
}

//or "Good Afternoon" if between 12PM and 6PM.
else if (n < 18) {
  ans = "Good morning";
}
//or "Good evening" if between 6PM and midnight.
else {
  ans = "Good evening";
}

//Apply the "heading" style in the styles.css


ChangeImage(){
  //Morning = red, Afternoon = green, Night = blue.
  var imgStyles = {
    if (n < 12) {
      backgroundColor: 'red',
    }
   else if (n < 18) {
      backgroundColor: 'green',
    }
   else  {
    backgroundColor: 'blue',
     // ans = "Good morning";
    }
  }
}
//Dynamically change the color of the h1 using inline css styles.
ReactDOM.render(<h1 className="img-surround">{ans}</h1>, document.getElementById("root"));



