Stock.PlaceBidOrderRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('company', params.company_id);
    },
    renderTemplate: function() {
        this.render('placeBidOrder', {
            outlet: 'outlet1'
        });
        this.render('symbol',{
            outlet: 'symbol'
        })
    }
});