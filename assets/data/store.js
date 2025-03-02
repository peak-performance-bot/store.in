
$(document).ready(function () {
    function PageViewModel() {
        this.menu = ko.observable(menu);
        this.category = ko.observableArray(category);
        this.footer = ko.observable(footer);
    }
    ko.applyBindings(new PageViewModel());

    var $body = $('body');

    $('.mobile-menu-toggler').on('click', function (e) {
        $body.toggleClass('mmenu-active');
        $(this).toggleClass('active');
        e.preventDefault();
    });

    $('.mobile-menu-overlay, .mobile-menu-close').on('click', function (e) {
        $body.removeClass('mmenu-active');
        $('.menu-toggler').removeClass('active');
        e.preventDefault();
    });

    $('.mmenu-btn').on('click', function (e) {
        var $parent = $(this).closest('li'),
            $targetUl = $parent.find('ul').eq(0);

        if (!$parent.hasClass('open')) {
            $targetUl.slideDown(300, function () {
                $parent.addClass('open');
            });
        } else {
            $targetUl.slideUp(300, function () {
                $parent.removeClass('open');
            });
        }
        e.stopPropagation();
        e.preventDefault();
    });
});