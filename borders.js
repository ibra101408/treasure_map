function notAllowed(){
    var position = $("#ball").position();
    //console.log($("#ball").position());

    if (position.top < 51 || position.top > 350){
        playVideo();

        $("#ball").css('left', position.left = 20 + 'px');
        $("#ball").css('top', position.top = 230 + 'px');
        $("#ball").delay(1200).show("slow", function(){
        });
    }
    if (position.left <19){
        playVideo();

        $("#ball").css('left', position.left = 20 + 'px');
        $("#ball").css('top', position.top = 230 + 'px');
        $("#ball").delay(1200).show("slow", function(){
        });
    }

    if (position.left > 90 && position.left < 220 && position.top > 130 && position.top < 280){
        playVideo();

        $("#ball").css('left', position.left = 20 + 'px');
        $("#ball").css('top', position.top = 230 + 'px');
        $("#ball").delay(1200).show("slow", function(){
        });
    }
    if (position.left > 280 && position.left < 400 && position.top > 90 && position.top < 271){
        playVideo();

        $("#ball").css('left', position.left = 20 + 'px');
        $("#ball").css('top', position.top = 230 + 'px');
        $("#ball").delay(1200).show("slow", function(){
        });
    }
    if (position.left > 521 && position.left < 660 && position.top > 249 && position.top < 310){
        playVideo();

        $("#ball").css('left', position.left = 20 + 'px');
        $("#ball").css('top', position.top = 230 + 'px');
        $("#ball").delay(1200).show("slow", function(){
        });
    }
    if (position.left > 480 && position.left < 640 && position.top < 170 && position.top > 100){
        playVideo();

        $("#ball").css('left', position.left = 20 + 'px');
        $("#ball").css('top', position.top = 230 + 'px');
        $("#ball").delay(1200).show("slow", function(){
        });
    }

    if (position.left > 649 && position.left < 680 && position.top > 189 && position.top < 241 ) {
        console.log("You won!");
        flurry();
        win();
    }

    if (position.left > 239 && position.left < 266 && position.top > 169 && position.top < 171 ) {
        console.log("First step!");
        begin();
        firstStep();
    }

    if (position.left > 439 && position.left < 451 && position.top > 269 && position.top < 271 ) {
        console.log("Second step!");
        second_step();
    }
}