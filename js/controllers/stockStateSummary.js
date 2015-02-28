
Stock.StockStateSummaryController = Ember.ObjectController.extend({
    actions: {

        buy: function(company_id){
            console.log("buying");
            console.log(company_id);
            //this.store.unloadAll('company');
            //this.store.destroy();
            this.transitionToRoute('placeBidOrder', company_id);

        },
        sell: function(company_id){
            console.log("selling ");
            console.log(company_id);
            this.transitionToRoute('placeSaleOrder', company_id);
        }
    }
});