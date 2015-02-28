
Stock.PlaceSaleOrderController = Ember.ObjectController.extend({
    actions: {

        submit: function(){
            console.log("submitting");
            var newPurchase = this.store.createRecord('sellOrder', {
                numOfShares: this.get('numOfShares'),
                purchasePrice: this.get('purchasePrice')
            });
            newPurchase.save();
        },
        cancel: function() {
            console.log("cancel");
            this.transitionToRoute('/');
        }
    }
});