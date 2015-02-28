
Stock.PlaceBidOrderController = Ember.ObjectController.extend({
    actions: {

        submit: function(company_id){
            console.log("submitting");
            console.log(company_id)
            var newPurchase = this.store.createRecord('buyOrder', {
                companyId: company_id,
                numOfShares: this.get('numOfShares'),
                purchasePrice: this.get('purchasePrice')
            });
            newPurchase.save();
        },
        cancel: function(){
            console.log("cancel");
            this.transitionToRoute('/');
        }
        //edit: function () {
        //    this.set('isEditing', true);
        //},
        //save: function () {
        //    this.get('model').save();
        //    this.set('isEditing', false);
        //},
        //delete: function () {
        //    if (confirm('Are you sure?')) {
        //        this.get('model').destroyRecord();
        //        this.transitionToRoute('posts');
        //    }
        //}
        //save: function() {
        //    var newPost = this.store.createRecord('post', {
        //        title: this.get('title'),
        //        body: this.get('body')
        //    });
        //    newPost.save();
        //    this.transitionToRoute('posts');
        //}
    }
});