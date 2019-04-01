$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-add-to-cart]').click(function(e){
        alert('أضيف العنصر إلى عربة الشراء');
        e.stopPropagation();
    });
    
});


