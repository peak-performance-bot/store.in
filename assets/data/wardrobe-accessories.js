
$(document).ready(function () {

    var products = [{ "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0001)", "src": "/wardrobe-accessories-1.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0002)", "src": "/wardrobe-accessories-2.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0003)", "src": "/wardrobe-accessories-3.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0004)", "src": "/wardrobe-accessories-4.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0005)", "src": "/wardrobe-accessories-10.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0006)", "src": "/wardrobe-accessories-11.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0007)", "src": "/wardrobe-accessories-12.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0008)", "src": "/wardrobe-accessories-13.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0009)", "src": "/wardrobe-accessories-14.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0010)", "src": "/wardrobe-accessories-19.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0011)", "src": "/wardrobe-accessories-20.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0012)", "src": "/wardrobe-accessories-21.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0013)", "src": "/wardrobe-accessories-22.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0014)", "src": "/wardrobe-accessories-23.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0015)", "src": "/wardrobe-accessories-24.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0016)", "src": "/wardrobe-accessories-25.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0017)", "src": "/wardrobe-accessories-26.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0018)", "src": "/wardrobe-accessories-27.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0019)", "src": "/wardrobe-accessories-28.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0020)", "src": "/wardrobe-accessories-29.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0021)", "src": "/wardrobe-accessories-30.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0022)", "src": "/wardrobe-accessories-31.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0023)", "src": "/wardrobe-accessories-32.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0024)", "src": "/wardrobe-accessories-33.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0025)", "src": "/wardrobe-accessories-34.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0026)", "src": "/wardrobe-accessories-35.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0027)", "src": "/wardrobe-accessories-36.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0028)", "src": "/wardrobe-accessories-37.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0029)", "src": "/wardrobe-accessories-38.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0030)", "src": "/wardrobe-accessories-39.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0031)", "src": "/wardrobe-accessories-40.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0032)", "src": "/wardrobe-accessories-41.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0033)", "src": "/wardrobe-accessories-42.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0034)", "src": "/wardrobe-accessories-43.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0035)", "src": "/wardrobe-accessories-44.jpg" }, { "sku": "", "name": "Italian Soft Close Drawer System (SKU: WA0036)", "src": "/wardrobe-accessories-45.jpg" }];

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