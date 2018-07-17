$(function() {
    $('#web').on("mouseover", function (){
//        $("#slider").animate({"right":"50%"}, "slow");
        $(".web-detail").css("visibility", "visible");
        $(".web-pic").css("visibility", "hidden")
    }).on("mouseleave", function (){
//        $("#slider").animate({"right":"-99%"}, "fast");
        $(".web-detail").css("visibility", "hidden")
        $(".web-pic").css("visibility", "visible")
    });
});