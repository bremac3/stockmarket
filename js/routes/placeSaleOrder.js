
Stock.PlaceSaleOrderRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('sellOrder', company_id);
    }
    //,
    //renderTemplate: function() {
    //    this.render('placeSellOrder');
    //    //this.render('marketByOrder', {
    //    //    outlet: 'test1'
    //    //});
    //    //this.render('marketByPrice', {
    //    //    outlet: 'test2'
    //    //});
    //    //this.render('symbol',{
    //    //    outlet: 'symbol'
    //    //})
    //}

});