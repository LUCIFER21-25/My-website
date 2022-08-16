function pop_up() {

	var x1 = document.querySelector("#hobby1").checked;
	var x2 = document.querySelector("#hobby2").checked;
	var x3 = document.querySelector("#hobby3").checked;
	var x4 = document.querySelector("#hobby4").checked;

	var stra=" You have selected ";
	if(x1){
		document.querySelector(".ballet").style.display="inherit";
		stra=stra+" ballet ";
	}
	
	if(x2){
		document.querySelector(".kathak").style.display="inherit";
		stra=stra+" kathak ";
	}
	if(x3){
		document.querySelector(".reading").style.display="inherit";
		stra=stra+" reading ";

	}
	if(x4){
		document.querySelector(".travel").style.display="inherit";
		stra=stra+" travel ";
	}
	
	if(!x1 & !x2 & !x3 & !x4){
		stra=stra+" none ";
	}

	alert(stra);
}

