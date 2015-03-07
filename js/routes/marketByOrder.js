Stock.MarketByOrderRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('company', params.company_id);
    },
    renderTemplate: function() {
        this.render('marketByOrder', {
           outlet: 'outlet1'
        });
        this.render('marketByPrice', {
            outlet: 'outlet2'
        });
        this.render('symbol',{
            outlet: 'symbol'
        })
    }

});