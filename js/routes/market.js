
Stock.MarketRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('company', params.company_id);
    }
    ,
    renderTemplate: function() {
        console.log('rendering templates');
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