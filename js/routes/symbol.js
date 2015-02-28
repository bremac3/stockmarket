
Stock.SymbolRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('company', params.company_id);
    }


});