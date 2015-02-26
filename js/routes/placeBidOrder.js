
Stock.PlaceBidOrderRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('buyOrder');
    }

});