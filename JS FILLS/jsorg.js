// aside function ==>
$('.exit').click( function(){
    $('aside').css('left' , '-270px')
    
})
// close function ==>
$('.navOpen').click(function(){
    $('aside').css('left' , '0px')
})
// singer toggle ==>
$('.fSinger').click(function(){
    $(this).next().slideToggle();
    $('.pSinger').not($(this).next()).slideUp();
})
// set time ==>
    window.onload = function() {
   
        countDownToTime("10 october 2029 9:56:00");
      }
    
      function countDownToTime(countTo) {
      
            let futureDate = new Date(countTo);
        futureDate = (futureDate.getTime()/1000);
    
        let now = new Date();
        now = (now.getTime()/1000);
    
        timeDifference = (futureDate- now);
            
       let days = Math.floor( timeDifference / (24*60*60));
       let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
       let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
       let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    
    
        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${ mins } m`);
        $('.seconds').html(`${ secs} s`)
    
      
        setInterval(function() {  countDownToTime(countTo); }, 1000);
      }
    
// form text
var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});