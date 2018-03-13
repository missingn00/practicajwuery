$("document").ready(function(){
    $("#anuncio").text("Haz click aquí para cambiar de color")
    .hide()
    .fadeIn(3000)
    .width(500)
    .height(500);

});


let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"]
let color =  colores[Math.floor(Math.random() * colores.length)];


$("#anuncio").on("click", function(){
   $("#anuncio").css("background-color", color);
    console.log("prueba()");
    color = colores[Math.floor(Math.random() * colores.length)];
});



