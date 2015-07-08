var stars = document.getElementById('starSet');

stars.onhover = function(event){

console.log(event.target);

}

stars.onclick = function(event){
alert('click')
console.log(event.target);

console.log("clas..."+event.target.className + "..id.."+event.target.id);

}