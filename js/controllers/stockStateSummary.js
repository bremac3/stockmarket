Stock.StockStateSummaryController = Ember.ArrayController.extend({
    state: 'default',
    sortProperties: ['name'],
    sortedCompanies: Ember.computed.sort('filteredCompanies', 'sortProperties'),
    filteredCompanies: function() {
        var state = this.get('state');
        switch(state) {
            case 'gainers':
                return this.get('model').filter(function(company) {
                    return company.get('changeVolume') > 0;
                });
            case 'losers':
                return this.get('model').filter(function(company) {
                    return company.get('changeVolume') < 0;
                });
            default:
                return this.get('model');
        }
    }.property('model','state'),

    actions: {
        buy: function(company_id){
            console.log("buying");
            console.log(company_id);
            this.transitionToRoute('placeBidOrder', company_id);

        },
        sell: function(company_id){
            console.log("selling ");
            console.log(company_id);
            this.transitionToRoute('placeSellOrder', company_id);
        },
        mostActive: function() {
            $("a").parent().removeClass("active");
            $("a:contains('Most Active by Volume')").parent().addClass("active");
            
            this.set('state','default');
            this.set('sortProperties', ['shareVolume:desc']);
        },
        gainers: function() {
            $("a").parent().removeClass("active");
            $("a:contains('Gainers')").parent().addClass("active");

            this.set('state', 'gainers');
            this.set('sortProperties', ['changePercent:desc']);
        },
        losers: function() {
            $("a").parent().removeClass("active");
            $("a:contains('Losers')").parent().addClass("active");

            this.set('state', 'losers');
            this.set('sortProperties', ['changePercent']);
        }
    }
});