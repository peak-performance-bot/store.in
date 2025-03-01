
$(document).ready(function () {
    var products = [{ "sku": "", "name": "Fingerprint Smart Door Lock", "src": "/fingerprint-door-lock.jpg" }, { "sku": "", "name": "Video Call Smart Door Lock", "src": "/video-door-lock.jpg" }, { "sku": "", "name": "Face Detection Smart Door Lock", "src": "/face-door-lock.jpg" }, { "sku": "", "name": "Fingerprint Smart Drawer Lock", "src": "/fingerprint-drawer-lock.jpg" }];

    function PageViewModel() {
        this.category = ko.observableArray(category);
        this.products = ko.observableArray(products);
        this.footer = ko.observable(footer);
    }
    ko.applyBindings(new PageViewModel());
});