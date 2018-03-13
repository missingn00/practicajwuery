$ ("#carrete").hide();
$(document).on("click", function(){
    console.log("HEY ESTO VA")
    $ ("#carrete").show();   
    $ ("h1").hide();
})

$ ("img").hover(function(){
 
    $(this).attr("width","300");
    
},
function(){
    $("img").attr("width","250"); 
}
)
    
    