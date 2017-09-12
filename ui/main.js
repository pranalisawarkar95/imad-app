console.log('Loaded!');


//change the text of the main-text div

var element = document.getElementById('main-text');
    element.innerHTML = 'New Value';

//move the image

var element = document.getElementById('madi');
var marginLeft=0;
function moveRight() {
     marginLeft= marginLeft+10;
      log.style.marginLeft =marginLeft +'px';
     
 }
  img.onclick = function() {
      
      var interval = setInterval(moveRight, 100);

      
};