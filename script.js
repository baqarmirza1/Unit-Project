var rawr = []; 
var rar; 
$(".add").click(function(){
    rar=$(".picture-url").val(); 
    rawr.push(rar); 
    $(".gallery").append("<img src='"+ rar + "'>"); 
}); 

$(".remove").click(function(){ 
    $("img:last").remove(); 
}); 