$(Document).ready(function(){
    $("#logotipo").on("mouseover", function(){
        $("#banner h1").addClass("efeito");
    }).on("mouseout", function(){
        $("#banner h1").removeClass("efeito");
    });
    $("#input-search").on("focus", function(){
        $("li.search").addClass("ativo");
    }).on("blur", function(){
        $("li.search").removeClass("ativo");
    });
    $(".thumbmails").owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        // navText: ["Anterior","Proximo"],
        responsive: {
            // breakpoint from 0 up
            0 : {
                item: 1
            },
            // breakpoint from 480 up
            480 : {
                item: 3
            },
            // breakpoint from 768 up
            768 : {
                item: 4
            },
            // breakpoint from 1200 up
            1200 : {
                item: 6
            }
        },
    });
});