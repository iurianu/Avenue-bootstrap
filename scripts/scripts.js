$(document).ready(function($) {
    
    $(".item").click(function() {
        $(this).find('figcaption').toggle();
    });
    
});