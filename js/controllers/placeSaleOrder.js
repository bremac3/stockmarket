
Stock.PlaceSaleOrderController = Ember.ObjectController.extend({
    actions: {

        submit: function(company_id){
            console.log("submitting");
            var newPurchase = this.store.createRecord('sellOrder', {
                companyId: company_id,
                numOfShares: this.get('numOfShares'),
                purchasePrice: this.get('purchasePrice')
            });
            newPurchase.save();
            this.transitionToRoute('/market/'+company_id.id)
        },
        cancel: function() {
            console.log("cancel");
            this.transitionToRoute('/');
        }
    }
});