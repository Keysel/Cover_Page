var mostrar = document.getElementById('anuncio');
var boton = document.getElementById('btn');
boton.addEventListener('click',abrir,true);
function abrir(){
  mostrar.style.display='block';
}

var volver = document.getElementById('btn2');
volver.addEventListener('click',cerrar,true);
function cerrar(){
   mostrar.style.display='none';
}

let boton2 = document.getElementById('btnMenu')
let barraMenu= document.getElementById('Menu')
boton2.addEventListener('click',function(){
	if(barraMenu.style.display=='none'){
		barraMenu.style.display='flex';
	} else{barraMenu.style.display='none';}
})