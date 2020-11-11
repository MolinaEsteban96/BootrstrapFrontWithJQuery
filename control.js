$(document).ready(function(){
    $("#title h1").addClass("onTheRight")
    .animate({
        left:"200px",
        opacity: 1
    },1000);
    $("#codingPhoto").animate({
        opacity: 1
    },1000);
    $("#pythonlogo,#javalogo,#javascriptlogo").animate({
        opacity:1
    },1000)
    $("#pythondiv, #javadiv, #javascriptdiv").mouseenter(function(){
        $(this).addClass("hoverMouse")
    })
    .mouseleave(function(){
        $(this).removeClass("hoverMouse")
    })
});

