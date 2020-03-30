 var theTotal = 0;
 var theTotal2= 0;

 $('#document').ready(function(){

  $('#score1').text(theTotal);
 $('#score2').text(theTotal2);
 });
//Ao
//Add ippon ao
 $( "#add_ip" ).click(function() {
 	if(theTotal < 12){
  theTotal = Number(theTotal) + Number($(this).val());
   $('#score1').text(theTotal);
}else{
	alert('Ao is a winner');
}
});

 //Wazzari ao

  $( "#add_waz" ).click(function() {
  	if(theTotal < 12){
  theTotal = Number(theTotal) + Number($(this).val());
   $('#score1').text(theTotal);
}else{
	alert('Ao is a winner');
}
});

  //Juko Ao

   $( "#add_juko" ).click(function() {
   	if(theTotal < 12){
  theTotal = Number(theTotal) + Number($(this).val());
   $('#score1').text(theTotal);
}else{
	alert('Ao is a winner');
}
});

 //Aka
 //Add ippon aka

 $( "#add_ippon" ).click(function() { 
 	if(theTotal2 < 12){
  theTotal2 = Number(theTotal2) + Number($(this).val());
   $('#score2').text(theTotal2);
}else{
	alert('Ao is a winner');
}
});

//Wazzari Ao
$( "#add_wazzari" ).click(function() { 
	if(theTotal2 < 12){
  theTotal2 = Number(theTotal2) + Number($(this).val());
   $('#score2').text(theTotal2);
    }else{
	alert('Ao is a winner');
}
});


//Juko Ao

$( "#add_one" ).click(function() { 
	if(theTotal2 < 12){
  theTotal2 = Number(theTotal2) + Number($(this).val());
   $('#score2').text(theTotal2);
}else{
	alert('Ao is a winner');
}
});

//Timer

function _timer(callback)
{
    var time = 0;     //  The default time of the timer
    var mode = 1;     //    Mode: count up or count down
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime(time);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return time;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stoped (1)
    this.getStatus
    {
        return status;
    }
    
    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
      
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
      
        
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
      
    }
}
 
// example use
var timer;
 
$(document).ready(function(e) 
{
    timer = new _timer
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                alert('time out');
            }
        }
    );
    timer.reset(0);
    timer.mode(0);
});


//Check hansoku ao1


//ao1
 $('#hansoku_ao1').click(function() {
  if ($(this).is(':checked')) {
   alert('Aka is a winner');
//console.log(theTotal);
	 timer.reset(0);
    timer.mode(0);
    theTotal=0;
    theTotal2=0;
    $('#score1').text(theTotal);
    $('#score2').text(theTotal2);
    if($('.checkbox:checked').length == $('.punish').length){
                   $('.punish').prop('checked',true);
            }else{
                   $('.punish').prop('checked',false);
            }
 

 

  }
});

 //ao2
	 
 $('#hansoku_ao2').click(function() {
  if ($(this).is(':checked')) {
    alert('Aka is a winner');
    theTotal=0;
    theTotal2=0;
	 $('#score1').text(theTotal);
    $('#score2').text(theTotal2);
	 timer.reset(0);
     timer.mode(0);
     if($('.checkbox:checked').length == $('.punish').length){
                   $('.punish').prop('checked',true);
            }else{
                   $('.punish').prop('checked',false);
            }
  
  }
});

 //aka1

  $('#hansoku_akka1').click(function() {
  if ($(this).is(':checked')) {
     alert('Ao is a winner');
 timer.reset(0);
    timer.mode(0);
    theTotal=0;
    theTotal2=0;
    $('#score1').text(theTotal);
    $('#score2').text(theTotal2);
     if($('.checkbox:checked').length == $('.punish').length){
                   $('.punish').prop('checked',true);
            }else{
                   $('.punish').prop('checked',false);
            }
  
  }
});

//aka2
  $('#hansoku_akka2').click(function() {
  if ($(this).is(':checked')) {
     alert('Ao is a winner');
	 timer.reset(0);
    timer.mode(0);
    theTotal=0;
    theTotal2=0;
    $('#score1').text(theTotal);
    $('#score2').text(theTotal2);
     if($('.checkbox:checked').length == $('.punish').length){
                   $('.punish').prop('checked',true);
            }else{
                   $('.punish').prop('checked',false);
            }

  }
});
 