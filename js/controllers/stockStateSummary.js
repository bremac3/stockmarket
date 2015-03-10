Stock.StockStateSummaryController = Ember.ArrayController.extend({
    state: 'default',
    sortProperties: ['name'],
    sortedCompanies: Ember.computed.sort('filteredCompanies', 'sortProperties'),
    filteredCompanies: function() { //modify model based on filtering
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
            this.transitionToRoute('placeBidOrder', company_id);

        },
        sell: function(company_id){
            this.transitionToRoute('placeSellOrder', company_id);
        },
        mostActive: function() {
            this.set('state','default');
            this.set('sortProperties', ['shareVolume:desc']);
        },
        gainers: function() {
            this.set('state', 'gainers');
            this.set('sortProperties', ['changePercent:desc']);
        },
        losers: function() {
            this.set('state', 'losers');
            this.set('sortProperties', ['changePercent']);
        }
    }
});