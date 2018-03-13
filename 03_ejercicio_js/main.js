$("li").hover(function(){
    $(this).addClass("destacar");
    //$("#contenedor2 img").attr("src","img/arbol.jpg")
    
    if (this.id === "elem1") {
        $("#contenedor2 img").attr("src","img/arbol.jpg");
    } else if (this.id === "elem2") {
        $("#contenedor2 img").attr("src","img/lago.jpg");
    } else if (this.id === "elem3") {
        $("#contenedor2 img").attr("src","img/rio.jpg");
    }else {
        $("#contenedor2 img").attr("src","img/sol.jpg");
        
    }


 }, function(){
    $ (this).removeClass("destacar")
    $ ("#contenedor2 img").attr("src","img/blanco.jpg")
 }

 )

