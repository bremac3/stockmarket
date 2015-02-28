
Stock.MareketRoute = Ember.Route.extend({
    renderTemplate: function() {
        console.log('rendering templates');
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