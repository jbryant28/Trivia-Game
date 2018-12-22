var time = 60;

var right = 0;
var wrong = 0;
var unchecked = 0;

$(document).ready(function(){
  $("#game").hide();
  // $("end").hide();

  $("#start").on("click", function(){
    $("#cover").hide();
    $("#game").show();
    startCountDown();
		return;
		console.log("start");
  });
  function timer() {
    time--;
    $('#timeText').html(time + "seconds");
    
    
    $("#submit").on("click", function() {
      time = 0;
			return;
			console.log("done");
    });

    if(time == -1) {
      outOfTime();
			// $("#game").hide();
			console.log("time up");
			$("#timeText").hide();
    }

  }

  function startCountDown() {
    setInterval(timer, 1000);
  }
  function outOfTime() {
    var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
    var Q10 = $('input:radio[name="q10"]:checked').val();
	 
		
		if(Q1 == undefined){
			unchecked++;
		}
		else if(Q1 === "13"){
			right++;
		}
		else{
			wrong++;
		}


		if(Q2 === undefined){
			unchecked++;
		}
		else if(Q2 === "2.71"){
			right++;
		}
		else{
			wrong++;
		}


		if(Q3 === undefined){
			unchecked++;
		}
		else if(Q3 == "opposite over hypotenuse"){
			right++;
		}
		else{
			wrong++;
		}


		if(Q4 == undefined){
			unchecked++;
		}
		else if(Q4 == "(((3)^(1/2)/2)),(1/2)"){
			right++;
		}
		else{
			wrong++;
		}


		if(Q5 == undefined){
			unchecked++;
		}
		else if(Q5 == "1/x"){
			right++;
		}
		else{
			wrong++;
		}


		if(Q6 == undefined){
			unchecked++;
		}
		else if(Q6 == "cos(x)"){
			right++;
		}
		else{
			wrong++;
		}


		if(Q7 == undefined){
			unchecked++;
		}
		else if(Q7 == "a = f/m"){
			right++;
		}
		else{
			wrong++;
		}


		if(Q8 == undefined){
			unchecked++;
		}
		else if(Q8 == "6.674 * 10^-11 m^3 kg^-1 s^-2"){
			right++;
		}
		else{
			wrong++;
		}


		if(Q9 == undefined){
			unchecked++;
		}
		else if(Q9 == "Issac Newton"){
			right++;
		}
		else{
			wrong++;
		}



		if(Q10 == undefined){
			unchecked++;
		}
		else if(Q10 == "A=I*(1/2)^t/h"){
			right++;
		}
		else{
			wrong++;
    }
    
    $('#right').html(right);
		$('#wrong').html(wrong);
		$('#unchecked').html(unchecked);

  }
})