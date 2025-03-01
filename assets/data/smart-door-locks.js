
$(document).ready(function () {

    var category = [{ "id": "mortise-door-handle-locks", "text": "Mortise Door Handle Locks", "className": "mortise-door-handle-locks", "href": "mortise-door-handle-locks.html", "footer": true }, { "id": "bathroom-accessories", "text": "Bathroom Accessories", "className": "bathroom-accessories", "href": "bathroom-accessories.html", "footer": true }, { "id": "modular-kitchen-accessories", "text": "Modular Kitchen Accessories", "className": "modular-kitchen-accessories", "href": "modular-kitchen-accessories.html", "footer": true }, { "id": "door-pull-handles", "text": "Door Pull Handles", "className": "door-pull-handles", "href": "door-pull-handles.html", "footer": true }, { "id": "wardrobe-accessories", "text": "Wardrobe Accessories", "className": "wardrobe-accessories", "href": "wardrobe-accessories.html", "footer": true }, { "id": "zula-fittings", "text": "Zula Fittings", "className": "zula-fittings", "href": "zula-fittings.html", "footer": false }, { "id": "smart-door-locks", "text": "Smart Door Locks", "className": "smart-door-locks", "href": "smart-door-locks.html", "footer": false }];
    var products = [{ "sku": "", "name": "Fingerprint Smart Door Lock", "src": "/fingerprint-door-lock.jpg" }, { "sku": "", "name": "Video Call Smart Door Lock", "src": "/video-door-lock.jpg" }, { "sku": "", "name": "Face Detection Smart Door Lock", "src": "/face-door-lock.jpg" }, { "sku": "", "name": "Fingerprint Smart Drawer Lock", "src": "/fingerprint-drawer-lock.jpg" }];

    function PageViewModel() {
        this.category = ko.observableArray(category);
        this.products = ko.observableArray(products);
        this.popular = ko.observableArray(category.filter(x => x.footer === true));
    }
    ko.applyBindings(new PageViewModel());
});