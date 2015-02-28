
Stock.StockStateSummaryController = Ember.ObjectController.extend({
    actions: {

        load: function () {
            console.log("Loading");
            var newPurchase = this.store.createRecord('company', {
                name: "MircroSoft",
                openPrice: "0",
                currentPrice: "0",
                changeVolume: "0",
                shareVolume: "0",
                url: "microsoft.png"
            });
            newPurchase.save();
            var newPurchase = this.store.createRecord('company', {
                name: "Apple",
                openPrice: "0",
                currentPrice: "0",
                changeVolume: "0",
                shareVolume: "0",
                url: "facebook.png"
            });
            newPurchase.save();
            var newPurchase = this.store.createRecord('company', {
                name: "Facebook",
                openPrice: "0",
                currentPrice: "0",
                changeVolume: "0",
                shareVolume: "0",
                url: "apple.jpg"
            });
            newPurchase.save();
        },
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
            this.transitionToRoute('placeSaleOrder');
        }
    }
});