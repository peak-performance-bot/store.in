
$(document).ready(function () {

    var category = [ { "id": "mortise-door-handle-locks", "text": "Mortise Door Handle Locks", "className": "mortise-door-handle-locks", "href": "mortise-door-handle-locks.html", "footer": true }, { "id": "bathroom-accessories", "text": "Bathroom Accessories", "className": "bathroom-accessories", "href": "bathroom-accessories.html", "footer": true }, { "id": "modular-kitchen-accessories", "text": "Modular Kitchen Accessories", "className": "modular-kitchen-accessories", "href": "modular-kitchen-accessories.html", "footer": true }, { "id": "door-pull-handles", "text": "Door Pull Handles", "className": "door-pull-handles", "href": "door-pull-handles.html", "footer": true }, { "id": "wardrobe-accessories", "text": "Wardrobe Accessories", "className": "wardrobe-accessories", "href": "wardrobe-accessories.html", "footer": true }, { "id": "zula-fittings", "text": "Zula Fittings", "className": "zula-fittings", "href": "zula-fittings.html", "footer": false }, { "id": "smart-door-locks", "text": "Smart Door Locks", "className": "smart-door-locks", "href": "smart-door-locks.html", "footer": false } ];
    var subcategory = [
        {
            "id": "Opel",
            "text": "Opel Series",
            "className": "Opel",
            "products": [{ "catid": "Opel", "sku": "", "name": "Towel Holder (Gold)", "src": "/opel-gold/opel-gold-1.jpg" }, { "catid": "Opel", "sku": "", "name": "Rob Hook (Gold)", "src": "/opel-gold/opel-gold-2.jpg" }, { "catid": "Opel", "sku": "", "name": "Double Soap Dish (Gold)", "src": "/opel-gold/opel-gold-3.jpg" }, { "catid": "Opel", "sku": "", "name": "Paper Holder (Gold)", "src": "/opel-gold/opel-gold-4.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap Dish (Gold)", "src": "/opel-gold/opel-gold-5.jpg" }, { "catid": "Opel", "sku": "", "name": "Rob Hook (Gold)", "src": "/opel-gold/opel-gold-6.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Ring (Gold)", "src": "/opel-gold/opel-gold-7.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap Dish (Gold)", "src": "/opel-gold/opel-gold-8.jpg" }, { "catid": "Opel", "sku": "", "name": "Liquid Dispenser (Gold)", "src": "/opel-gold/opel-gold-9.jpg" }, { "catid": "Opel", "sku": "", "name": "Tumbler Holder (Gold)", "src": "/opel-gold/opel-gold-10.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap With Tumbler Holder (Gold)", "src": "/opel-gold/opel-gold-11.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Rod (Gold)", "src": "/opel-gold/opel-gold-12.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Rack With Hook (Gold)", "src": "/opel-gold/opel-gold-13.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Rack (Gold)", "src": "/opel-gold/opel-gold-14.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Holder (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-1.jpg" }, { "catid": "Opel", "sku": "", "name": "Rob Hook (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-2.jpg" }, { "catid": "Opel", "sku": "", "name": "Double Soap Dish (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-3.jpg" }, { "catid": "Opel", "sku": "", "name": "Paper Holder (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-4.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap Dish (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-5.jpg" }, { "catid": "Opel", "sku": "", "name": "Rob Hook (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-6.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Ring (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-7.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap Dish (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-8.jpg" }, { "catid": "Opel", "sku": "", "name": "Liquid Dispenser (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-9.jpg" }, { "catid": "Opel", "sku": "", "name": "Tumbler Holder (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-10.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap With Tumbler Holder (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-11.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Rod (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-12.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Rack With Hook (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-13.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Rack (Rose Gold)", "src": "/opel-rose-gold/opel-rose-gold-14.jpg" }, { "catid": "Opel", "sku": "", "name": "Rob Hook (Silver)", "src": "/opel-silver/opel-silver-1.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap Dish (Silver)", "src": "/opel-silver/opel-silver-2.jpg" }, { "catid": "Opel", "sku": "", "name": "Tumbler Holder (Silver)", "src": "/opel-silver/opel-silver-3.jpg" }, { "catid": "Opel", "sku": "", "name": "Liquid Dispenser (Silver)", "src": "/opel-silver/opel-silver-4.jpg" }, { "catid": "Opel", "sku": "", "name": "Double Soap Dish (Silver)", "src": "/opel-silver/opel-silver-5.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap With Tumbler Holder (Silver)", "src": "/opel-silver/opel-silver-6.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap Dish (Silver)", "src": "/opel-silver/opel-silver-7.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Ring (Silver)", "src": "/opel-silver/opel-silver-8.jpg" }, { "catid": "Opel", "sku": "", "name": "Soap With Tumbler Holder (Silver)", "src": "/opel-silver/opel-silver-9.jpg" }, { "catid": "Opel", "sku": "", "name": "Double Soap Dish (Silver)", "src": "/opel-silver/opel-silver-10.jpg" }, { "catid": "Opel", "sku": "", "name": "Paper Holder (Silver)", "src": "/opel-silver/opel-silver-11.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Rod (Silver)", "src": "/opel-silver/opel-silver-12.jpg" }, { "catid": "Opel", "sku": "", "name": "Towel Rack (Silver)", "src": "/opel-silver/opel-silver-13.jpg" }]
        },
        {
            "id": "Ovel",
            "text": "Ovel Series",
            "className": "Ovel",
            "products": [{ "catid": "Ovel", "sku": "", "name": "Rob Hook (Ovel)", "src": "/ovel/ovel-1.jpg" }, { "catid": "Ovel", "sku": "", "name": "Liquid Dispenser (Ovel)", "src": "/ovel/ovel-2.jpg" }, { "catid": "Ovel", "sku": "", "name": "Tumbler Holder (Ovel)", "src": "/ovel/ovel-3.jpg" }, { "catid": "Ovel", "sku": "", "name": "Soap Dish (Ovel)", "src": "/ovel/ovel-4.jpg" }, { "catid": "Ovel", "sku": "", "name": "Paper Holder (Ovel)", "src": "/ovel/ovel-5.jpg" }, { "catid": "Ovel", "sku": "", "name": "Soap With Tumbler Holder (Ovel)", "src": "/ovel/ovel-6.jpg" }, { "catid": "Ovel", "sku": "", "name": "Soap Dish (Ovel)", "src": "/ovel/ovel-7.jpg" }, { "catid": "Ovel", "sku": "", "name": "Double Soap Dish (Ovel)", "src": "/ovel/ovel-8.jpg" }, { "catid": "Ovel", "sku": "", "name": "Soap With Tumbler Holder (Ovel)", "src": "/ovel/ovel-9.jpg" }, { "catid": "Ovel", "sku": "", "name": "Double Soap Dish (Ovel)", "src": "/ovel/ovel-10.jpg" }, { "catid": "Ovel", "sku": "", "name": "Paper Holder (Ovel)", "src": "/ovel/ovel-11.jpg" }, { "catid": "Ovel", "sku": "", "name": "Towel Rod (Ovel)", "src": "/ovel/ovel-12.jpg" }, { "catid": "Ovel", "sku": "", "name": "Towel Rack (Ovel)", "src": "/ovel/ovel-13.jpg" }, { "catid": "Ovel", "sku": "", "name": "Towel Rack With Hook (Ovel)", "src": "/ovel/ovel-14.jpg" }]
        },
        {
            "id": "Recto",
            "text": "Recto Series",
            "className": "Recto",
            "products": [{ "catid": "Recto", "sku": "", "name": "Rob Hook (Recto)", "src": "/recto/recto-1.jpg" }, { "catid": "Recto", "sku": "", "name": "Soap Dish (Recto)", "src": "/recto/recto-2.jpg" }, { "catid": "Recto", "sku": "", "name": "Tumbler Holder (Recto)", "src": "/recto/recto-3.jpg" }, { "catid": "Recto", "sku": "", "name": "Liquid Dispenser (Recto)", "src": "/recto/recto-4.jpg" }, { "catid": "Recto", "sku": "", "name": "Paper Holder (Recto)", "src": "/recto/recto-5.jpg" }, { "catid": "Recto", "sku": "", "name": "Paper Holder (Recto)", "src": "/recto/recto-6.jpg" }, { "catid": "Recto", "sku": "", "name": "Soap Dish (Recto)", "src": "/recto/recto-7.jpg" }, { "catid": "Recto", "sku": "", "name": "Double Soap Dish (Recto)", "src": "/recto/recto-8.jpg" }, { "catid": "Recto", "sku": "", "name": "Soap With Tumbler Holder (Square - Recto)", "src": "/recto/recto-9.jpg" }, { "catid": "Recto", "sku": "", "name": "Soap With Tumbler Holder (Recto)", "src": "/recto/recto-10.jpg" }, { "catid": "Recto", "sku": "", "name": "Double Soap Dish (Recto)", "src": "/recto/recto-11.jpg" }, { "catid": "Recto", "sku": "", "name": "Soap With Tumbler Holder (Square - Recto)", "src": "/recto/recto-12.jpg" }, { "catid": "Recto", "sku": "", "name": "Paper Holder (Recto)", "src": "/recto/recto-13.jpg" }, { "catid": "Recto", "sku": "", "name": "Towel Rack (Recto)", "src": "/recto/recto-14.jpg" }, { "catid": "Recto", "sku": "", "name": "Towel Rack (Recto)", "src": "/recto/recto-15.jpg" }, { "catid": "Recto", "sku": "", "name": "Towel Rack With Hook (Recto)", "src": "/recto/recto-16.jpg" }]
        },
        {
            "id": "Royal",
            "text": "Royal Series",
            "className": "Royal",
            "products": [{ "catid": "Royal", "sku": "", "name": "Rob Hook (Royal)", "src": "/royal/royal-1.jpg" }, { "catid": "Royal", "sku": "", "name": "Soap Dish (Royal)", "src": "/royal/royal-2.jpg" }, { "catid": "Royal", "sku": "", "name": "Paper Holder (Royal)", "src": "/royal/royal-3.jpg" }, { "catid": "Royal", "sku": "", "name": "Tumbler Holder (Royal)", "src": "/royal/royal-4.jpg" }, { "catid": "Royal", "sku": "", "name": "Liquid Dispenser (Royal)", "src": "/royal/royal-5.jpg" }, { "catid": "Royal", "sku": "", "name": "Tumbler Holder (Square - Royal)", "src": "/royal/royal-6.jpg" }, { "catid": "Royal", "sku": "", "name": "Soap Dish (Royal)", "src": "/royal/royal-7.jpg" }, { "catid": "Royal", "sku": "", "name": "Liquid Dispenser (Square - Royal)", "src": "/royal/royal-8.jpg" }, { "catid": "Royal", "sku": "", "name": "Double Soap Dish (Royal)", "src": "/royal/royal-9.jpg" }, { "catid": "Royal", "sku": "", "name": "Soap With Tumbler Holder (Square - Royal)", "src": "/royal/royal-10.jpg" }, { "catid": "Royal", "sku": "", "name": "Soap With Tumbler Holder (Round - Royal)", "src": "/royal/royal-11.jpg" }, { "catid": "Royal", "sku": "", "name": "Soap With Tumbler Holder (Square - Royal)", "src": "/royal/royal-12.jpg" }, { "catid": "Royal", "sku": "", "name": "Soap With Tumbler Holder (Round - Royal)", "src": "/royal/royal-13.jpg" }, { "catid": "Royal", "sku": "", "name": "Double Soap Dish (Royal)", "src": "/royal/royal-14.jpg" }, { "catid": "Royal", "sku": "", "name": "Paper Holder (Royal)", "src": "/royal/royal-15.jpg" }, { "catid": "Royal", "sku": "", "name": "Towel Rod (Royal)", "src": "/royal/royal-16.jpg" }, { "catid": "Royal", "sku": "", "name": "Towel Rack (Royal)", "src": "/royal/royal-17.jpg" }, { "catid": "Royal", "sku": "", "name": "Towel Holder (Royal)", "src": "/royal/royal-18.jpg" }, { "catid": "Royal", "sku": "", "name": "Liquid Dispenser (Royal)", "src": "/royal/royal-19.jpg" }]
        },
        {
            "id": "Triangle",
            "text": "Triangle Series",
            "className": "Triangle",
            "products": [{ "catid": "Triangle", "sku": "", "name": "Rob Hook (Triangle - Black)", "src": "/triangle-black/triangle-black-1.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Black)", "src": "/triangle-black/triangle-black-2.jpg" }, { "catid": "Triangle", "sku": "", "name": "Double Soap Dish (Triangle - Black)", "src": "/triangle-black/triangle-black-3.jpg" }, { "catid": "Triangle", "sku": "", "name": "Paper Holder (Triangle - Black)", "src": "/triangle-black/triangle-black-4.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Ring (Triangle - Black)", "src": "/triangle-black/triangle-black-5.jpg" }, { "catid": "Triangle", "sku": "", "name": "Tumbler Holder (Triangle - Black)", "src": "/triangle-black/triangle-black-6.jpg" }, { "catid": "Triangle", "sku": "", "name": "Liquid Dispenser (Triangle - Black)", "src": "/triangle-black/triangle-black-7.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Black)", "src": "/triangle-black/triangle-black-8.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap With Tumbler Holder (Triangle - Black)", "src": "/triangle-black/triangle-black-9.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap With Tumbler Holder (Triangle - Black)", "src": "/triangle-black/triangle-black-10.jpg" }, { "catid": "Triangle", "sku": "", "name": "Double Soap Dish (Triangle - Black)", "src": "/triangle-black/triangle-black-11.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Rod (Triangle - Black)", "src": "/triangle-black/triangle-black-12.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Rack With Hook (Triangle - Black)", "src": "/triangle-black/triangle-black-13.jpg" }, { "catid": "Triangle", "sku": "", "name": "Rob Hook (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-1.jpg" }, { "catid": "Triangle", "sku": "", "name": "Paper Holder (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-2.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Ring (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-3.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-4.jpg" }, { "catid": "Triangle", "sku": "", "name": "Double Soap Dish (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-5.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap With Tumbler Holder (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-6.jpg" }, { "catid": "Triangle", "sku": "", "name": "Tumbler Holder (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-7.jpg" }, { "catid": "Triangle", "sku": "", "name": "Liquid Dispenser (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-8.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-9.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Rod (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-10.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Rack (Triangle - Gold)", "src": "/triangle-gold/triangle-gold-11.jpg" }, { "catid": "Triangle", "sku": "", "name": "Rob Hook (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-1.jpg" }, { "catid": "Triangle", "sku": "", "name": "Paper Holder (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-2.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Ring (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-3.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-4.jpg" }, { "catid": "Triangle", "sku": "", "name": "Double Soap Dish (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-5.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap With Tumbler Holder (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-6.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-7.jpg" }, { "catid": "Triangle", "sku": "", "name": "Tumbler Holder (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-8.jpg" }, { "catid": "Triangle", "sku": "", "name": "Liquid Dispenser (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-9.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Rose Gold - Square)", "src": "/triangle-rose-gold/triangle-rose-gold-10.jpg" }, { "catid": "Triangle", "sku": "", "name": "Liquid Dispenser (Triangle - Rose Gold - Square)", "src": "/triangle-rose-gold/triangle-rose-gold-11.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Rod (Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-12.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Rack (Triangle - Rose Gold)", "src": "/triangle-rose-gold/triangle-rose-gold-13.jpg" }, { "catid": "Triangle", "sku": "", "name": "Rob Hook (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-1.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Ring (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-2.jpg" }, { "catid": "Triangle", "sku": "", "name": "Liquid Dispenser (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-3.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-4.jpg" }, { "catid": "Triangle", "sku": "", "name": "Liquid Dispenser (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-5.jpg" }, { "catid": "Triangle", "sku": "", "name": "Double Soap Dish (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-6.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap With Tumbler Holder (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-7.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap Dish (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-8.jpg" }, { "catid": "Triangle", "sku": "", "name": "Double Soap Dish (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-9.jpg" }, { "catid": "Triangle", "sku": "", "name": "Soap With Tumbler Holder(Triangle - Silver)", "src": "/triangle-silver/triangle-silver-10.jpg" }, { "catid": "Triangle", "sku": "", "name": "Paper Holder (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-11.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Rod (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-12.jpg" }, { "catid": "Triangle", "sku": "", "name": "Towel Rack With Hook (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-13.jpg" }, { "catid": "Triangle", "sku": "", "name": "Liquid Dispenser Steel (Triangle - Silver)", "src": "/triangle-silver/triangle-silver-14.jpg" }]
        },
        {
            "id": "Jet",
            "text": "Jet Series",
            "className": "Jet",
            "products": [{ "catid": "Jet", "sku": "", "name": "Rob Hook (Jet)", "src": "/jet/jet-1.jpg" }, { "catid": "Jet", "sku": "", "name": "Paper Holder (Jet)", "src": "/jet/jet-2.jpg" }, { "catid": "Jet", "sku": "", "name": "Soap Dish (Jet)", "src": "/jet/jet-3.jpg" }, { "catid": "Jet", "sku": "", "name": "Liquid Dispenser (Square - Jet)", "src": "/jet/jet-4.jpg" }, { "catid": "Jet", "sku": "", "name": "Tumbler Holder (Jet)", "src": "/jet/jet-5.jpg" }, { "catid": "Jet", "sku": "", "name": "Soap Dish (Jet)", "src": "/jet/jet-6.jpg" }, { "catid": "Jet", "sku": "", "name": "Towel Ring (Jet)", "src": "/jet/jet-7.jpg" }, { "catid": "Jet", "sku": "", "name": "Tumbler Holder (Jet)", "src": "/jet/jet-8.jpg" }, { "catid": "Jet", "sku": "", "name": "Liquid Dispenser (Round - Jet)", "src": "/jet/jet-9.jpg" }, { "catid": "Jet", "sku": "", "name": "Soap With Tumbler Holder (Jet)", "src": "/jet/jet-10.jpg" }, { "catid": "Jet", "sku": "", "name": "Towel Rod (Jet)", "src": "/jet/jet-11.jpg" }, { "catid": "Jet", "sku": "", "name": "Towel Rack With Hook (Jet)", "src": "/jet/jet-12.jpg" }]
        },
        {
            "id": "Lance",
            "text": "Lance Series",
            "className": "Lance",
            "products": [{ "catid": "Lance", "sku": "", "name": "Rob Hook (Lance)", "src": "/lance/lance-1.jpg" }, { "catid": "Lance", "sku": "", "name": "Paper Holder (Lance)", "src": "/lance/lance-2.jpg" }, { "catid": "Lance", "sku": "", "name": "Tumbler Holder (Lance)", "src": "/lance/lance-3.jpg" }, { "catid": "Lance", "sku": "", "name": "Liquid Dispenser (Lance)", "src": "/lance/lance-4.jpg" }, { "catid": "Lance", "sku": "", "name": "Towel Ring (Lance)", "src": "/lance/lance-5.jpg" }, { "catid": "Lance", "sku": "", "name": "Soap Dish (Lance)", "src": "/lance/lance-6.jpg" }, { "catid": "Lance", "sku": "", "name": "Soap With Tumbler Holder (Lance)", "src": "/lance/lance-7.jpg" }, { "catid": "Lance", "sku": "", "name": "Double Soap Dish (Lance)", "src": "/lance/lance-8.jpg" }, { "catid": "Lance", "sku": "", "name": "Towel Rod (Lance)", "src": "/lance/lance-9.jpg" }, { "catid": "Lance", "sku": "", "name": "Towel Rack (Lance)", "src": "/lance/lance-10.jpg" }]
        },
        {
            "id": "Puma",
            "text": "Puma Series",
            "className": "Puma",
            "products": [{ "catid": "Puma", "sku": "", "name": "Rob Hook (Puma)", "src": "/puma/puma-1.jpg" }, { "catid": "Puma", "sku": "", "name": "Paper Holder (Puma)", "src": "/puma/puma-2.jpg" }, { "catid": "Puma", "sku": "", "name": "Liquid Dispenser (Puma)", "src": "/puma/puma-3.jpg" }, { "catid": "Puma", "sku": "", "name": "Soap Dish (Steel - Puma)", "src": "/puma/puma-4.jpg" }, { "catid": "Puma", "sku": "", "name": "Towel Ring (Puma)", "src": "/puma/puma-5.jpg" }, { "catid": "Puma", "sku": "", "name": "Tumbler Holder (Steel - Puma)", "src": "/puma/puma-6.jpg" }, { "catid": "Puma", "sku": "", "name": "Tumbler Holder (Puma)", "src": "/puma/puma-7.jpg" }, { "catid": "Puma", "sku": "", "name": "Soap Dish (Puma)", "src": "/puma/puma-8.jpg" }, { "catid": "Puma", "sku": "", "name": "Soap With Tumbler Holder (Puma)", "src": "/puma/puma-9.jpg" }, { "catid": "Puma", "sku": "", "name": "Double Soap Dish (Puma)", "src": "/puma/puma-10.jpg" }, { "catid": "Puma", "sku": "", "name": "Towel Rod (Puma)", "src": "/puma/puma-11.jpg" }, { "catid": "Puma", "sku": "", "name": "Towel Rack With Hook (Puma)", "src": "/puma/puma-12.jpg" }]
        },
        {
            "id": "Torin",
            "text": "Torin Series",
            "className": "Torin",
            "products": [{ "catid": "Torin", "sku": "", "name": "Rob Hook (Torin)", "src": "/torin/torin-1.jpg" }, { "catid": "Torin", "sku": "", "name": "Paper Holder (Torin)", "src": "/torin/torin-2.jpg" }, { "catid": "Torin", "sku": "", "name": "Soap Dish (Steel - Torin)", "src": "/torin/torin-3.jpg" }, { "catid": "Torin", "sku": "", "name": "Tumbler Holder (Steel - Torin)", "src": "/torin/torin-4.jpg" }, { "catid": "Torin", "sku": "", "name": "Towel Ring (Torin)", "src": "/torin/torin-5.jpg" }, { "catid": "Torin", "sku": "", "name": "Tumbler Holder (Torin)", "src": "/torin/torin-6.jpg" }, { "catid": "Torin", "sku": "", "name": "Liquid Dispenser (Torin)", "src": "/torin/torin-7.jpg" }, { "catid": "Torin", "sku": "", "name": "Soap Dish (Torin)", "src": "/torin/torin-8.jpg" }, { "catid": "Torin", "sku": "", "name": "Soap With Tumbler Holder (Torin)", "src": "/torin/torin-9.jpg" }, { "catid": "Torin", "sku": "", "name": "Double Soap Dish (Torin)", "src": "/torin/torin-10.jpg" }, { "catid": "Torin", "sku": "", "name": "Towel Rod (Torin)", "src": "/torin/torin-11.jpg" }, { "catid": "Torin", "sku": "", "name": "Towel Rack With Hook (Torin)", "src": "/torin/torin-12.jpg" }]
        }
    ];

    function PageViewModel() {
        this.category = ko.observableArray(category);
        this.subcategory = ko.observableArray(subcategory);
        this.popular = ko.observableArray(category.filter(x=> x.footer === true));
    }
    ko.applyBindings(new PageViewModel());
});