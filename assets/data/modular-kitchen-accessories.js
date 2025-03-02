
$(document).ready(function () {
    
    var products = [{ "sku": "", "name": "Kitchen Accessories (SKU: KA0001)", "src": "/modular-kitchen-accessories-11.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0002)", "src": "/modular-kitchen-accessories-12.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0003)", "src": "/modular-kitchen-accessories-13.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0004)", "src": "/modular-kitchen-accessories-14.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0005)", "src": "/modular-kitchen-accessories-15.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0006)", "src": "/modular-kitchen-accessories-16.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0007)", "src": "/modular-kitchen-accessories-22.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0008)", "src": "/modular-kitchen-accessories-25.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0009)", "src": "/modular-kitchen-accessories-26.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0010)", "src": "/modular-kitchen-accessories-27.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0011)", "src": "/modular-kitchen-accessories-28.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0012)", "src": "/modular-kitchen-accessories-29.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0013)", "src": "/modular-kitchen-accessories-30.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0014)", "src": "/modular-kitchen-accessories-31.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0015)", "src": "/modular-kitchen-accessories-32.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0016)", "src": "/modular-kitchen-accessories-35.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0017)", "src": "/modular-kitchen-accessories-36.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0018)", "src": "/modular-kitchen-accessories-37.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0019)", "src": "/modular-kitchen-accessories-38.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0020)", "src": "/modular-kitchen-accessories-39.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0021)", "src": "/modular-kitchen-accessories-40.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0022)", "src": "/wardrobe-accessories-5.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0023)", "src": "/wardrobe-accessories-6.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0024)", "src": "/wardrobe-accessories-7.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0025)", "src": "/wardrobe-accessories-8.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0026)", "src": "/wardrobe-accessories-9.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0027)", "src": "/wardrobe-accessories-15.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0028)", "src": "/wardrobe-accessories-16.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0029)", "src": "/wardrobe-accessories-17.jpg" }, { "sku": "", "name": "Kitchen Accessories (SKU: KA0030)", "src": "/wardrobe-accessories-18.jpg" }];

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