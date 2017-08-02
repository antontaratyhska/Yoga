
$(".hoverToTop").on("mouseover",function(){
    $(this).addClass("lightEffect")
    $(this).closest(".topHover").addClass("lightEffect")
}) 
$(".hoverToTop").on("mouseout",function(){
    $(this).removeClass("lightEffect")
    $(this).closest(".topHover").removeClass("lightEffect")
})
function stickyHeader() {
    if (window.matchMedia('(min-width: 992px)').matches & $(document).scrollTop() >= 30) {
        $("body").addClass("sticky_header");
    }else{
        $("body").removeClass("sticky_header");
    }
};
stickyHeader()
$(window).resize(function() {
    stickyHeader();
})
$(window).scroll(function() {
    stickyHeader();
});



$(document).on("blur", ".nameValid", function( event ) {
    if($(this).val() != '') {
        $(this).removeClass("error");
        var pattern = /^[a-zA-Z][a-zA-Z-_\.]{1,30}$/;
        if(pattern.test($(this).val())){
        } else {
            $(this).prev().remove(".error_text")
            $(this).addClass("error");
        }
    }
})
