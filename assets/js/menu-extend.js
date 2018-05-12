$(document).ready(function() {
    $('#inOutArrow .menu-bar').bind('click touchstart', function() {
        if ($(this).hasClass("fa-arrow-left")) {
            $(this).removeClass('fa-arrow-left');
            $(this).addClass('fa-arrow-right');
            $('.side-menu-bar').css({
                'width': '50px',
                'transition': '.5s'
            });
            $('.container-bar').css({
                'padding-left': '50px',
                'transition': '.5s'
            });
            $('.book-name').css({
                'transition': '.5s',
                'textOverflow ': 'hidden',
                'whiteSpace': 'nowrap'
            });
            $('.book-arrow').css({
                'display': 'none',
                'transition': '.5s',
                'textOverflow ': 'hidden',
                'whiteSpace': 'nowrap'
            });
        } else {
            $(this).removeClass('fa-arrow-right');
            $(this).addClass('fa-arrow-left');
            $('.container-bar').css({
                'padding-left': '230px',
                'transition': '.5s'
            });
            $('.side-menu-bar').css({
                'width': '230px',
                'transition': '.5s',
                'textOverflow ': 'hidden',
                'whiteSpace': 'nowrap'
            })
            $('.book-name').css({
                'transition': '.5s',
                'textOverflow ': 'hidden',
                'whiteSpace': 'nowrap'
            });
            $('.book-arrow').css({
                'display': 'inline-block',
                'transition': '.2s',
                'textOverflow ': 'hidden',
                'whiteSpace': 'nowrap'
            });
        }
    });
});