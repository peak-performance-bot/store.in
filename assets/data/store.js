
$(document).ready(function () {
    function PageViewModel() {
        this.category = ko.observableArray(category);
        this.footer = ko.observable(footer);
    }
    ko.applyBindings(new PageViewModel());
});