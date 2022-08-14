var audio = new Audio("Moan.mp3");
var loadStatus = 0;

$( window ).on( "load", function() {
    setTimeout(function(){loadStatus=1}, 2000);
});

function playAudio() {
   if (loadStatus === 1) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
   }
}


$(".kewt").click(function() {
    $(this).attr("src", "Images/Uterus.png");
    $(".h1n1").text("Cervix tkiva mariamsa, gaumarjos nakiansa weliwadsa.");
    $(".h1n1").css("font-size", "3rem");
    setTimeout(function(){
        $(".kewt").attr("src", "Images/Mariami.png");
        $(".h1n1").text("Mariami, Gias Asuli");
        $(".h1n1").css("font-size", "5rem");
    },1500);

   playAudio();
});