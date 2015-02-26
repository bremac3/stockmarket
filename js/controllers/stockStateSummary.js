
Stock.StockStateSummaryController = Ember.ObjectController.extend({
    actions: {

        //load: function () {
        //    console.log("Loading");
        //    var newPurchase = this.store.createRecord('company', {
        //        name: "MircroSoft",
        //        openPrice: "0",
        //        currentPrice: "0",
        //        changeVolume: "0",
        //        shareVolume: "0"
        //    });
        //    newPurchase.save();
        //    var newPurchase = this.store.createRecord('company', {
        //        name: "Apple",
        //        openPrice: "0",
        //        currentPrice: "0",
        //        changeVolume: "0",
        //        shareVolume: "0"
        //    });
        //    newPurchase.save();
        //    var newPurchase = this.store.createRecord('company', {
        //        name: "Facebook",
        //        openPrice: "0",
        //        currentPrice: "0",
        //        changeVolume: "0",
        //        shareVolume: "0"
        //    });
        //    newPurchase.save();
        //},
        buy: function(){
            console.log("buying");
            //this.store.unloadAll('company');
            this.store.destroy();

        },
        sell: function(){
            console.log("selling");
        }
    }
});