//$("#start").click(function(){

function begin() {
    let position = $("#parrot").position();

    $("#book").show("slow", function () {
        $("#parrot").show("fast", function () {
            $("#parrot").css('left', position.left + 965 + 'px');
            $("#parrot").css('top', position.top - 360 + 'px');
            });

            $("#chest").show("fast", function () {
                $("#chest").css('left', position.left + 1010 + 'px');
                $("#chest").css('top', position.top - 361 + 'px');
            });

            $("#battle_ship").show("fast", function () {
                $("#battle_ship").css('left', position.left + 520 + 'px');
                $("#battle_ship").css('top', position.top - 210 + 'px');
            });

            $("#bok").show("fast", function () {
                $("#bok").css('left', position.left + 931 + 'px');
                $("#bok").css('top', position.top - 240 + 'px');
            });

            $("#friend").show("fast", function () {
                $("#friend").css('left', position.left + 1070 + 'px');
                $("#friend").css('top', position.top - 290 + 'px');
            });

            $("#map").show("fast", function () {
                $("#map").css('left', position.left + 742 + 'px');
                $("#map").css('top', position.top - 241 + 'px');
            });

            $("#tree").show("fast", function () {
                $("#tree").css('left', position.left + 1062 + 'px');
                $("#tree").css('top', position.top - 350 + 'px');
            });

            $("#gun").show("fast", function () {
                $("#gun").css('left', position.left + 868 + 'px');
                $("#gun").css('top', position.top - 381 + 'px');
            });

            $("#flag").show("fast", function () {
                $("#flag").css('left', position.left + 700 + 'px');
                $("#flag").css('top', position.top - 218 + 'px');

            });
        });
    }
