
Stock.MarketByOrderRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('company', params.company_id);
    }
    ,
    renderTemplate: function() {
        this.render('marketByOrder', {
           outlet: 'test1'
        });
        this.render('marketByPrice', {
            outlet: 'test2'
        });
        this.render('symbol',{
            outlet: 'symbol'
        })
    }

});