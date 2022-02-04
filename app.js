$(document).ready(function () {
    $('#pop-outer0').fadeIn('slow');
    $('#btn0').click(function (){
        $("#pop-outer0").fadeOut('slow');
    });
});



$("#start").click(function(){
    var position = $("#ball").position();
    $("#ball").css('left', position.left + 25 + 'px');
    $("#ball").css('top', position.top + 230 + 'px');
    $("#ball").show("slow", function(){
        $("#start").hide("slow", function(){
        });
    });
});



function playVideo() {
    var position = $("#video").position();
    $("#video").css('left', position.left + 40 + 'px');
    $("#video").css('top', position.top + 10 + 'px');
    $("#video").show("fast", function(){
        $('#video').trigger('play');
        $('#video').delay( 1200 ).hide('fast', function (){
            console.log("success!!");
        });
    });
}







        ///////TRASH/////////////
/*massive.push(chosen);
                event.preventDefault();
                $(this).data('clicked', true);
                $(this).toggleClass('shadow');
            if ($(this).hasClass('shadow') === true) {
                    console.log("next");
                    massive.push(this.id);*/
//console.log('1' + massive);

//}
//console.log('2' + massive);



//console.log('3' + massive);


//console.log('4' + getClass("parrot"));

/*$(".items").click(function() {
     var massive1 = new Array();



     if ($(this).data('clicked') === true) {
         var a = this.id;
         massive.push(a);
         console.log(massive);
     }

 });

 if (massive.includes("bok") == true){
     console.log("yes");
 }*/

//document.getElementById("demo").innerHTML = massive;


// });

//}