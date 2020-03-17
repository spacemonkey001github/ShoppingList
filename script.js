var items = ["Dota 2", "CSGO", "KOH"];

var ul =  document.querySelectorAll("ul")[1];
var doneItems = document.getElementsByClassName("things");
var delIcon = document.getElementsByTagName("img");

var del_btn = document.getElementById("delItem");
var newItem_btn =  document.getElementById("newItem");
var userInput_btn = document.getElementById("userInput");

var icon = "<img src=\"img/trash.svg\" class=\"delIcon\">";


// FUNCTIONS
function showItems(){
	for(var i =0; i < items.length; i++){
		ul.innerHTML += "<li class=\"things\">"+ items[i] + icon +"</li>";
	}
};

function newItem(){
	items.push(userInput_btn.value);
	var li = document.createElement("li");
	li.innerHTML += userInput_btn.value + icon;
	// li.appendChild(document.createTextNode(userInput_btn.value));
	ul.appendChild(li);
	userInput_btn.value = "";
	li.classList.add("things");
};

function delItems() {
	ul.innerHTML = "";
	items = [];
};

function afterClick(){
	if(userInput_btn.value){
		newItem();
		newListener();
	}
};

function afterPress(event){
	if(userInput_btn.value && event.which === 13) {
		newItem();
		newListener();
	}
};

function doneFunc(){
	this.classList.toggle("done");
};

function delIconFunc(){
	this.parentElement.classList.toggle("delete")
}

function newListener(){
	for(var i = 0; i < doneItems.length; i++){
		doneItems[i].addEventListener("click", doneFunc);
		delIcon[i].addEventListener("click", delIconFunc)
	};
};

// OPERATION

showItems();

newItem_btn.addEventListener("click", afterClick);

userInput_btn.addEventListener("keypress", afterPress);

del_btn.addEventListener("click", delItems);

newListener();










