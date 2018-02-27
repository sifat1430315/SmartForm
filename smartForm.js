// Your jQuery goes here

var userData = {
	name:'',
	email: '',
	html: {likes: [], dislikes: []},
	css: {likes: [], dislikes: []},
	js: {likes: [], dislikes: []},
	strength : {css: '', js: '', html: ''},
	currentQuestion: '#welcome'
};
//var val=[];
 console.log(localStorage.getItem('userData'));
if(localStorage.getItem('userData')){
	userData = JSON.parse(localStorage.getItem('userData'));
	
	$('#welcome').hide();
	$(userData.currentQuestion).show();
	$('#name').val(userData.name);//.val();
	$('#email').val(userData.email);//.val();
}
else {
	localStorage.getItem('userData',JSON.stringify(userData));
	}

$('#start').click(function(){
	console.log("start");
	$('#welcome').fadeOut();
	$('#q1').fadeIn();
	userData.currentQuestion = "#q1";
	localStorage.getItem('userData',JSON.stringify(userData));

});

$('#name').change(function(event){

	console.log($('#name').val());
});

$('#email').change(function(event){

	console.log($('#email').val());
});


function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#email').val()))
  {
    return (true)
  }
    //alert("You have entered an invalid email address!")
    return (false)
}



$('#q1Next').click(function(){
	if(($('#name').val()) && ValidateEmail())
	{
	userData.name = ($('#name').val());
	userData.email = ($('#email').val());
	userData.currentQuestion = "#q2";
	$('#q2').fadeIn();
	$('#q1').fadeOut();
	localStorage.setItem('userData',JSON.stringify(userData));
}else{
	alert('Invalid name or email');
}
});


$('#qhtml').click(function(){
	$('#q2').fadeOut();
	$('#q2a').fadeIn();
	userData.currentQuestion = "#q2a";
	localStorage.setItem('userData',JSON.stringify(userData));
});

$('#q2aNext').click(function(){
	
		$.each($("input[name='likesHTML']:checked"), function(){
			var j=0;

			for(var i=0; i<userData.html.likes.length; i++){
				if(userData.html.likes[i] == this.value){
					j=1;
				}
			}

			if(j==0){userData.html.likes.push(this.value);}


		});

		$.each($("input[name='dlikesHTML']:checked"), function(){
			var j=0;
			for(var i=0; i<userData.html.dislikes.length; i++){
				if(userData.html.dislikes[i] == this.value){
					j=1;
				}
			}

			if (j==0) {userData.html.dislikes.push(this.value);}


		});
	$('#q3').fadeIn();
	$('#q2a').fadeOut();
	userData.currentQuestion = "#q3";
	localStorage.setItem('userData',JSON.stringify(userData));
});


$('#q2aPrev').click(function(){
	
		$.each($("input[name='likesHTML']:checked"), function(){
			var j =0;

			for(var i=0; i<userData.html.likes.length; i++){
				if(userData.html.likes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.html.likes.push(this.value);}

				


		});

		$.each($("input[name='dlikesHTML']:checked"), function(){
			var j=0;

			for(var i=0; i<userData.html.dislikes.length; i++){
				if(userData.html.dislikes[i] == this.value){
					j=1;
				}
			}

			if (j==0) {userData.html.dislikes.push(this.value);}


		});

	$('#q2').fadeIn();
	$('#q2a').fadeOut();
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData',JSON.stringify(userData));
});


$('#qcss').click(function(){
	$('#q2').fadeOut();
	$('#q2b').fadeIn();
	userData.currentQuestion = "#q2b";
	localStorage.setItem('userData',JSON.stringify(userData));
});


$('#q2bNext').click(function(){
	
		$.each($("input[name='likesCSS']:checked"), function(){
			var j =0;

			for(var i=0; i<userData.css.likes.length; i++){
				if(userData.css.likes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.css.likes.push(this.value);}
				

		});

		$.each($("input[name='dlikesCSS']:checked"), function(){
			var j =0;
			for(var i=0; i<userData.css.dislikes.length; i++){
				if(userData.css.dislikes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.css.dislikes.push(this.value);}

		});

	$('#q3').fadeIn();
	$('#q2b').fadeOut();
	userData.currentQuestion = "#q3";
	localStorage.setItem('userData',JSON.stringify(userData));
});


$('#q2bPrev').click(function(){
	
		$.each($("input[name='likesCSS']:checked"), function(){
			var j =0;
			for(var i=0; i<userData.css.likes.length; i++){
				if(userData.css.likes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.css.likes.push(this.value);}
		});

		$.each($("input[name='dlikesCSS']:checked"), function(){
			var j =0;
			for(var i=0; i<userData.css.dislikes.length; i++){
				if(userData.css.dislikes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.css.dislikes.push(this.value);}
				

		});

	$('#q2').fadeIn();
	$('#q2b').fadeOut();
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData',JSON.stringify(userData));
});



$('#qjavascript').click(function(){
	$('#q2').fadeOut();
	$('#q2c').fadeIn();
	userData.currentQuestion = "#q2c";
	localStorage.setItem('userData',JSON.stringify(userData));
});


$('#q2cNext').click(function(){
	
		$.each($("input[name='likesJS']:checked"), function(){
			var j =0;
			for(var i=0; i<userData.js.likes.length; i++){
				if(userData.js.likes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.js.likes.push(this.value);}
				

		});

		$.each($("input[name='dlikesJS']:checked"), function(){
			var j =0;
			for(var i=0; i<userData.js.dislikes.length; i++){
				if(userData.js.dislikes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.js.dislikes.push(this.value);}
				

		});

	$('#q3').fadeIn();
	$('#q2c').fadeOut();
	userData.currentQuestion = "#q3";
	localStorage.setItem('userData',JSON.stringify(userData));
});


$('#q2cPrev').click(function(){
	
		$.each($("input[name='likesJS']:checked"), function(){
			var j =0;
			for(var i=0; i<userData.js.likes.length; i++){
				if(userData.js.likes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.js.likes.push(this.value);}
				
		});

		$.each($("input[name='dlikesJS']:checked"), function(){

				var j =0;
			for(var i=0; i<userData.js.dislikes.length; i++){
				if(userData.js.dislikes[i] == this.value){
					j=1;
				}
			}
			if(j==0){userData.js.dislikes.push(this.value);}
				

		});

	$('#q2').fadeIn();
	$('#q2c').fadeOut();
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData',JSON.stringify(userData));
});

$(".radio").click(function(event){

	$.each($("input[name='HTMLOptions']:checked"), function(){

		userData.strength.html= this.value;

});
	$.each($("input[name='CSSOptions']:checked"), function(){

	userData.strength.css= this.value;

});
$.each($("input[name='JSOptions']:checked"), function(){

	userData.strength.js= this.value;

});

	$('#q3').fadeIn();
	//$('#q2c').hide();
	userData.currentQuestion = "#q3";
	localStorage.setItem('userData',JSON.stringify(userData));
});

$('#q3Next').click(function(){

	if(userData.strength.html=="" || userData.strength.css==""||userData.strength.js==""){
		alert("Please select all strength options...");
	}


	else{
	$('#q3').fadeOut();
	$('#thanks').fadeIn();
	userData.currentQuestion = "#thanks";
	localStorage.setItem('userData',JSON.stringify(userData));
}});

$('#q3Prev').click(function(){
	$('#q3').fadeOut();
	$('#q2').fadeIn();
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData',JSON.stringify(userData));
});

$("#answer").click(function(event){

  $("#thanks").fadeOut();
  $("#ans").fadeIn();
	userData.currentQuestion = "#thanks";
	localStorage.setItem('userData',JSON.stringify(userData));

	document.getElementById('ansName').innerHTML = "<strong>Name: </strong>"+userData.name;
	document.getElementById('ansEmail').innerHTML = "<strong>Email: </strong>"+userData.email;

		var temp="";var temp2;
		if(userData.html.likes.length===0){
			 temp="No likes";
		}
		else{
			for(var i=0; i<userData.html.likes.length; i++){
				temp2="# "+userData.html.likes[i];
			 temp=temp+" </br> "+ temp2;
			}
		}

	document.getElementById('ansHTMLlikes').innerHTML = "<strong>HTML Likes: </strong></br>"+ temp;
	var temp=""
	if(userData.html.dislikes.length===0){
		 temp="No dislikes";
	}
	else{
		for(var i=0; i<userData.html.dislikes.length; i++){
			temp2="* "+userData.html.dislikes[i];
		 temp=temp+" </br> "+ temp2;
		}
	}

	document.getElementById('ansHTMLdlikes').innerHTML = "<strong>HTML Dislikes:</strong> </br>"+ temp;
	var temp=""
	if(userData.css.likes.length===0){
		 temp="No likes";
	}
	else{
		for(var i=0; i<userData.css.likes.length; i++){
			temp2="# "+userData.css.likes[i];
		 temp=temp+" </br> "+ temp2;
		}
	}
	document.getElementById('ansCSSlikes').innerHTML = "<strong>CSS likes:</strong> </br>"+ temp;
	var temp=""
	if(userData.css.dislikes.length===0){
		 temp="No dislikes";
	}
	else{
		for(var i=0; i<userData.css.dislikes.length; i++){
			temp2="* "+userData.css.dislikes[i];
		 temp=temp+" </br> "+ temp2;
		}
	}
	document.getElementById('ansCSSdlikes').innerHTML = "<strong>CSS dislikes:</strong> </br>"+ temp;
	var temp=""
	if(userData.js.likes.length===0){
		 temp="No likes";
	}
	else{
		for(var i=0; i<userData.js.likes.length; i++){
			temp2="# "+userData.js.likes[i];
		 temp=temp+" </br> "+ temp2;
		}
	}
	document.getElementById('ansJSlikes').innerHTML = "<strong>javascript likes:</strong> </br>"+ temp;
	var temp=""
	if(userData.js.dislikes.length===0){
		 temp="No dislikes";
	}
	else{
		for(var i=0; i<userData.js.dislikes.length; i++){
			temp2="* "+userData.js.dislikes[i];
		 temp=temp+" </br> "+ temp2;
		}
	}
	document.getElementById('ansJSdlikes').innerHTML = "<strong>javascript dislikes:</strong> </br>"+ temp;


	document.getElementById('HStrength').innerHTML = "<strong>HTML strength level:</strong> </br>"+ userData.strength.html;
	document.getElementById('CStrength').innerHTML ="<strong>CSS strength level:</strong> </br>"+ userData.strength.css;
	document.getElementById('JStrength').innerHTML ="<strong>javascript strength level:</strong> </br>"+ userData.strength.js;
});

$("#del").click(function(event){
	delete userData;
	userData = {
	name:'',
	email: '',
	html: {likes: [], dislikes: []},
	css: {likes: [], dislikes: []},
	js: {likes: [], dislikes: []},
	strength : {css: '', js: '', html: ''},
	currentQuestion: '#welcome'
};
	$("#ans").fadeOut();
	$("#welcome").fadeIn();
	localStorage.setItem('userData', JSON.stringify(userData));

});