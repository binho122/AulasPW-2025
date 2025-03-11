$("#esconder").click(function(){
    $("#teste1").hide();
});

$("#mostrar").click(function(){
    $("teste").show();
});

$("#alterarCSS").click(function(){
    $("#teste2").css({
        "background-color": "blue",
        "font-size":"200%",
    });
})