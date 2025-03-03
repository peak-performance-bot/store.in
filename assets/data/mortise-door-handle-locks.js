
$(document).ready(function () {
    
    var products = [ { "sku": "", "name": "A-125 S.S Matt Finish", "src": "/125-SS/125-SS-1.jpg" }, { "sku": "", "name": "A-125 Z Black Matt Finish", "src": "/125-Black/125-Black-1.jpg" }, { "sku": "", "name": "A-125 Brass Antique Finish", "src": "/125-Brass/125-Brass-1.jpg" }, { "sku": "", "name": "A-126 S.S Matt Finish", "src": "/126-SS/126-SS-1.jpg" }, { "sku": "", "name": "A-126 Z Black Matt Finish", "src": "/126-Black/126-Black-1.jpg" }, { "sku": "", "name": "A-126 Brass Antique Finish", "src": "/126-Brass/126-Brass-1.jpg" }, { "sku": "", "name": "A-127 S.S Matt Finish", "src": "/127-SS/127-SS-1.jpg" }, { "sku": "", "name": "A-127 Z Black Matt Finish", "src": "/127-Black/127-Black-1.jpg" }, { "sku": "", "name": "A-127 Brass Antique Finish", "src": "/127-Brass/127-Brass-1.jpg" }, { "sku": "", "name": "A-139 S.S Matt Finish", "src": "/139-SS/139-SS-1.jpg" }, { "sku": "", "name": "A-139 Z Black Matt Finish", "src": "/139-Black/139-Black-1.jpg" }, { "sku": "", "name": "A-139 Brass Antique Finish", "src": "/139-Brass/139-Brass-1.jpg" }, { "sku": "", "name": "A-148 S.S Matt Finish", "src": "/148-SS/148-SS-1.jpg" }, { "sku": "", "name": "A-148 Z Black Matt Finish", "src": "/148-Black/148-Black-1.jpg" }, { "sku": "", "name": "A-148 Brass Antique Finish", "src": "/148-Brass/148-Brass-1.jpg" }, { "sku": "", "name": "A-276 S.S Matt Finish", "src": "/276-SS/276-SS-1.jpg" }, { "sku": "", "name": "A-276 Z Black Matt Finish", "src": "/276-Black/276-Black-1.jpg" }, { "sku": "", "name": "A-276 Brass Antique Finish", "src": "/276-Brass/276-Brass-1.jpg" }, { "sku": "", "name": "A-153 S.S Matt Finish", "src": "/153-SS/153-SS-1.jpg" }, { "sku": "", "name": "A-153 Z Black Matt Finish", "src": "/153-Black/153-Black-1.jpg" }, { "sku": "", "name": "A-153 Brass Antique Finish", "src": "/153-Brass/153-Brass-1.jpg" }, { "sku": "", "name": "A-7072 S.S Matt Finish", "src": "/7072-SS/7072-SS-1.jpg" }, { "sku": "", "name": "A-7072 Z Black Matt Finish", "src": "/7072-Black/7072-Black-1.jpg" }, { "sku": "", "name": "A-7072 Brass Antique Finish", "src": "/7072-Brass/7072-Brass-1.jpg" }, { "sku": "", "name": "A-7073 Z Black Matt Finish", "src": "/7073-Black/7073-Black-1.jpg" }, { "sku": "", "name": "A-7073 Brass Antique Finish", "src": "/7073-Brass/7073-Brass-1.jpg" }, { "sku": "", "name": "A-151 Z Black Matt Finish", "src": "/151-Black/151-Black-1.jpg" }, { "sku": "", "name": "A-151 Brass Antique Finish", "src": "/151-Brass/151-Brass-1.jpg" }, { "sku": "", "name": "A-136 S.S Matt Finish", "src": "/136-SS/136-SS-1.jpg" }, { "sku": "", "name": "A-136 Z Black Matt Finish", "src": "/136-Black/136-Black-1.jpg" }, { "sku": "", "name": "A-136 Brass Antique Finish", "src": "/136-Brass/136-Brass-1.jpg" }, { "sku": "", "name": "A-152 S.S Matt Finish", "src": "/152-SS/152-SS-1.jpg" }, { "sku": "", "name": "A-152 Brass Antique Finish", "src": "/152-Brass/152-Brass-1.jpg" }, { "sku": "", "name": "Round Z Black Matt Finish", "src": "/Round-Black/Round-Black-1.jpg" }, { "sku": "", "name": "Round Brass Antique Finish", "src": "/Round-Brass/Round-Brass-1.jpg" } ];


    function PageViewModel() {
        this.menu = ko.observable(menu);
        this.category = ko.observableArray(category);
        this.products = ko.observableArray(products);
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