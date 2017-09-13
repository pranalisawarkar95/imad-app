//Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
//CREATE A REQUEST OBJECT
var request=new XMLHttpRequest();

//capture the response and store it in a variable

    if(request.onreadyState===XMLHttpRequest.DONE){
        
//TAKE SOME ACTION
if(request.status===200){
var counter=request.responseText;
//render the variable in correct span
counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
}
}
// NOT DONE YET
};

//Make A Request
  request.open('GET', 'http://pranalisawarkar95.imad.hasura-app.io/counter', true);
  request.send(null);
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit-btn');
submit.onclick=function(){

var names=['name1','name2','name3','name4'];
var list='';
for(var i=0;i<name.length;i++){
list+='<li>'+names[i]+'</li>';
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;

};

