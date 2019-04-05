
//    $("button").click(function() {
//        $("h1").css("color", "purple");
//    });

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});