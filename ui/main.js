//counter code

var button = document.getElementById("counter");

button.onClick = function() {
   
 //Create A Request oject 
 
 var request = new XMLHttpRequest();
 
 //Capture The Response And Store In HTML
 
 request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
      
      //Take Some Action
          if (request.status === 200) {
              var counter= request.responseText; 
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
          }
      }
      // not done yet
 };
 //Make A Request
  request.open('GET', 'http://kogam22.imad.hasura-app.io/counter', true);
  request.send(null);
};