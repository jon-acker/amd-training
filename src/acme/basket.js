define(function() {
    var items = [];

    return {
        add: function(item) {
            items.push(item);
        },

        items: function() {
            return items;
        }
    }
});
