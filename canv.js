$(function(){

    var img = document.getElementById("scream");
    $("#myCanv").append(img);

    var ball = '<div id="ball"></div>';
    $("#myCanv").append(ball);

    var video = document.getElementById("video");
    $("#myCanv").append(video);

    var book = document.getElementById("book");
    $("#myCanv").append(book);

    var items = document.getElementById("items");
    $("#myCanv").append(items);

    var parrot = document.getElementById("parrot");
    $("#myCanv").append(parrot);

    var chest = document.getElementById("chest");
    $("#myCanv").append(chest);

    var bok = document.getElementById("bok");
    $("#myCanv").append(bok);

    var friend = document.getElementById("friend");
    $("#myCanv").append(friend);

    var tree = document.getElementById("tree");
    $("#myCanv").append(tree);

    var gun = document.getElementById("gun");
    $("#myCanv").append(gun);

    var battle_ship = document.getElementById("battle_ship");
    $("#myCanv").append(battle_ship);

    var flag = document.getElementById("flag");
    $("#myCanv").append(flag);

    var map = document.getElementById("map");
    $("#myCanv").append(map);

    var choice = document.getElementById("choice");
    $("#myCanv").append(choice);

    var gold = document.getElementById("finalTreasure");
    $("#myCanv").append(gold);


    $(document).keydown(function(e){
        notAllowed();

        var position = $("#ball").position();
        let poss = $( "#ball" ).last().text( "left: " + position.left +"......."+ ", top: " + position.top );
        //console.log(poss.value);

        switch (e.keyCode){

            case 37:
                $("#ball").css('left', position.left - 20 + 'px');
                break;
            case 38:
                $("#ball").css('top', position.top - 20 + 'px');
                break;
            case 39:
                $("#ball").css('left', position.left + 20 + 'px');
                break;
            case 40:
                $("#ball").css('top', position.top + 20 + 'px');
                break;
        }
    });

});