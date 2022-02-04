
var massive = [];
var chosen = null;

function onClick() {
    $(document).ready(function () {
        $(".items").on('click', function (event) {
            $(this).addClass('shadow');
            chosen = $(this).closest('.items').data('id');
            //console.log("chosen is - " + chosen);
        });

        massive.push(chosen);
        massive = $.grep(massive, function (n) {
            return n == 0 || n
        }); // delete null from array//
        console.log("in massive - " + massive);

        if (massive.length == 3) {
            if (massive.includes("parrot" && "map" && "bok")) { ///there is bag
                $(document).ready(function () {
                    $('#pop-outer4').fadeIn('slow');
                    $('#btn4').click(function (){
                        $('#btn4').show("slow", function (){
                            $("#pop-outer4").fadeOut('slow');
                        });
                    });
                });

                onClick();
                console.log("we have f/cking parrot & bok & map here!");
                $(".items").hide("slow", function () {
                    $("#book").hide("slow", function () {
                        while (massive.length > 0) {
                            $(".items").removeClass('shadow');
                            massive.pop();
                        }
                    });
                });
            } else {
                while (massive.length > 0) {
                    $(document).ready(function () {
                        $('#pop-outer3').fadeIn('slow');
                        $('#btn3').click(function (){
                            $('#btn3').show("slow", function (){
                                $("#pop-outer3").fadeOut('slow');
                            });
                        });
                    });
                    $(".items").removeClass('shadow');
                    massive.pop();
                }
                console.log("no things - no problem" + massive);
            }
        }
        return massive;
    });
}
function firstStep(){
    $(document).ready(function () {
        $('#pop-outer1').fadeIn('slow');
        $('#btn1').click(function (){
            $('#btn1').show("slow", function (){
                $("#pop-outer1").fadeOut('slow');
            });
        });
    });
}