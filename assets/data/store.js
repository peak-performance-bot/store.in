
$(document).ready(function () {
    var category = [
        {

            "id": "mortise-door-handle-locks",
            "text": "Mortise Door Handle Locks",
            "class": "mortise-door-handle-locks",
            "href": "mortise-door-handle-locks.html",
            "footer": true,
        },
        {
            "id": "bathroom-accessories",
            "text": "Bathroom Accessories",
            "class": "bathroom-accessories",
            "href": "bathroom-accessories.html",
            "footer": true
        },
        {
            "id": "modular-kitchen-accessories",
            "text": "Modular Kitchen Accessories",
            "class": "modular-kitchen-accessories",
            "href": "modular-kitchen-accessories.html",
            "footer": true
        },
        {
            "id": "door-pull-handles",
            "text": "Door Pull Handles",
            "class": "door-pull-handles",
            "href": "door-pull-handles.html",
            "footer": true
        },
        {
            "id": "wardrobe-accessories",
            "text": "Wardrobe Accessories",
            "class": "wardrobe-accessories",
            "href": "wardrobe-accessories.html",
            "footer": true
        },
        {
            "id": "zula-fittings",
            "text": "Zula Fittings",
            "class": "zula-fittings",
            "href": "zula-fittings.html",
            "footer": false
        },
        {
            "id": "smart-door-locks",
            "text": "Smart Door Locks",
            "class": "smart-door-locks",
            "href": "smart-door-locks.html",
            "footer": false
        }
    ];

    jPut.menu.data = category;
    jPut.trendy.data = category;
    jPut.recent.data = category;
    jPut.footer_popular.data = category.filter(x=> x.footer === true);
});