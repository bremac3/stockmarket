
Stock.StockStateSummaryController = Ember.ObjectController.extend({
    actions: {
        buy: function(company_id){
            console.log("buying");
            console.log(company_id);
            this.transitionToRoute('placeBidOrder', company_id);

        },
        sell: function(company_id){
            console.log("selling ");
            console.log(company_id);
            this.transitionToRoute('placeSaleOrder', company_id);
        },
        mostActive: function() {
            $("a").parent().removeClass("active");
            $("a:contains('Most Active by Volume')").parent().addClass("active");
        },
        gainers: function() {
            $("a").parent().removeClass("active");
            $("a:contains('Gainers')").parent().addClass("active");
        },
        losers: function() {
            $("a").parent().removeClass("active");
            $("a:contains('Losers')").parent().addClass("active");
        }
    },
    sortProperties: ['name'],
    sortedCompanies: Ember.computed.sort('model', 'sortProperties')
});