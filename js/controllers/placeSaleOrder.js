
Stock.PlaceSaleOrderController = Ember.ObjectController.extend({
    actions: {

        submit: function(company){
            console.log("submitting");
            var newPurchase = this.store.createRecord('sellOrder', {
                company: company,
                numOfShares: this.get('numOfShares'),
                purchasePrice: this.get('purchasePrice')
            });
            //newPurchase.save();
            this.transitionToRoute('/market/'+company.id)
        },
        cancel: function() {
            console.log("cancel");
            this.transitionToRoute('/');
        }
    }
});