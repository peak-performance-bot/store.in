
$(document).ready(function () {

    var products = [{ "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0001)", "src": "/zula-fittings-1.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0002)", "src": "/zula-fittings-2.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0003)", "src": "/zula-fittings-3.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0004)", "src": "/zula-fittings-4.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0005)", "src": "/zula-fittings-5.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0006)", "src": "/zula-fittings-6.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0007)", "src": "/zula-fittings-7.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0008)", "src": "/zula-fittings-8.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0009)", "src": "/zula-fittings-9.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0010)", "src": "/zula-fittings-10.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0011)", "src": "/zula-fittings-11.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0012)", "src": "/zula-fittings-12.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0013)", "src": "/zula-fittings-13.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0014)", "src": "/zula-fittings-14.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0015)", "src": "/zula-fittings-15.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0016)", "src": "/zula-fittings-16.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0017)", "src": "/zula-fittings-17.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0018)", "src": "/zula-fittings-18.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0019)", "src": "/zula-fittings-19.jpg" }, { "sku": "", "name": "Traditional Zula Fittings (SKU: ZF0020)", "src": "/zula-fittings-20.jpg" }];

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