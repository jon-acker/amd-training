define([
    'vendor/jquery',
    'acme/basket'
], function($, basket) {

    $('button').click(function(e) {
        alert(basket.items()[0].name);
    });

    basket.add({
        name: 'Shirt',
        price: 10.99
    });
});
