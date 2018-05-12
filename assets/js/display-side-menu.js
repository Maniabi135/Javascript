$(document).ready(function() {
    $(".side-menu-icon").on("click touchstart", function(e) {
        e.preventDefault();
        $(".side-menu-icon").removeClass("active");
        $(this).addClass("active");
        $(this).closest('li').addClass("active");
        $('.show-block').addClass('show-none').removeClass('show-block');
        var href = $(this).find('a').attr("href");
        $(href).addClass('show-block');
    });

    $('.app-container').hide();
    $('#pickCalendar').on('click touchstart', function() {
        $('.app-container').toggle();

    });
});