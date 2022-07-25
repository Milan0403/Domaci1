//funkcija za upis novih elemenata
function newElement() {
	let myInput = document.querySelector('#myInput');
	myInput = myInput.value;
	console.log (myInput);
	let ul = document.querySelector('#myUL');
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(myInput));

	//pravljenje dugmeta za brisanje za novo ubacene elemente
	let span = document.createElement('span');
	let txt = document.createTextNode('X');
	span.classList = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	ul.appendChild(li);												//ubacivanje elementa u listu

	//brisanje elementa iz liste za novo ubacene elemente
	let close = document.querySelectorAll(".close");
	for (let cl of close) {
  	cl.onclick = function() {
    	let div = this.parentElement;
    	div.remove();
  	}
	}

	//za stikliranje uradjenih poslova za novo ubacene elemente
	let recenica = document.querySelectorAll('li');
	for (let red of recenica){
  	red.onclick = function() {
  		if ( red.classList.contains('checked')){
    		red.setAttribute('class', 'unchecked');
  		}
  		else{
	  		red.setAttribute('class', 'checked');
	  	}
		}
	}
}

//pravljenje dugmeta za brisanje za stare elemente
let lis = document.querySelectorAll('li');
for ( let li of lis){
	let span = document.createElement('span');
	let txt = document.createTextNode('X');
	span.classList = 'close';
	span.appendChild(txt);
	li.appendChild(span);
}

//brisanje elementa iz liste za stare elemente
let close = document.querySelectorAll(".close");
for (let cl of close) {
  cl.onclick = function() {
    let div = this.parentElement;
    div.remove();
  }
}

//za stikliranje uradjenih poslova za stare elemente
let recenica = document.querySelectorAll('li');
for (let red of recenica){
  red.onclick = function() {
  	if ( red.classList.contains('checked')){
    	red.setAttribute('class', 'unchecked');
  	}
  	else{
  		red.setAttribute('class', 'checked');
  	}
	}
}
