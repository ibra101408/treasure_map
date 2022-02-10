
function second_step() {
    $(document).ready(function () {
        //$(".open").click(function () {
            $('#pop-outer2').fadeIn('slow');
            $('#btn2').click(function (){
                $('.joke').show("slow", function (){
                    console.log("joke displayed!");
                });
            });



            //console.log("")
        //});*/
        $("#close").click(function () {
            $("#pop-outer2").fadeOut('slow');
        });
    });
}
