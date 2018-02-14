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
	$('#welcome').hide();
	$('#q1').show();
	userData.currentQuestion = "#q1";
	localStorage.getItem('userData',JSON.stringify(userData));

});

$('#name').change(function(event){

	console.log($('#name').val());
});

$('#q1Next').click(function(){
	if(($('#name').val()) && ($('#email').val())){
	userData.name = ($('#name').val());
	userData.email = ($('#email').val());
	localStorage.setItem('userData',JSON.stringify(userData));
	$('#q2').show();
	$('#q1').hide();
}else{
	alert('please enter name and email');
}


});