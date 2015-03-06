
Stock.PlaceBidOrderController = Ember.ObjectController.extend({
    sortBuyProperties: ['purchasePrice:desc'],
    sortedBuyOrders: Ember.computed.sort('model.buyOrder', 'sortBuyProperties'),
    sortSellProperties: ['purchasePrice:asc'],
    sortedSellOrder: Ember.computed.sort('model.sellOrder', 'sortSellProperties'),

    actions: {

        submit: function(company){
            var sellOrder = this.get('sortedSellOrder');
            //console.log(this.get('sortedSellOrder'));
            var buyShares = this.get('numOfShares');


            for(var i = 0; i < sellOrder.length; i++) {
                //console.log(sellOrder[i].get('purchasePrice'));
                if (this.get('purchasePrice') == sellOrder[i].get('purchasePrice')) {
                    console.log('match!');

                    if (parseInt(buyShares) > sellOrder[i].get('numOfShares')) {
                        //console.log(parseInt(buyShares) < sellOrder[i].get('numOfShares') );
                        //console.log(sellOrder[i].get('numOfShares'));
                        //delete sell order
                        //adjust buy order

                        console.log('case 1');

                        var buyShares = buyShares - sellOrder[i].get('numOfShares');
                        this.store.find('sellOrder', sellOrder[i].id).then(function(sellOrder){
                            sellOrder.destroyRecord();
                        });

                        console.log('destroyed');



                    }
                    else if (parseInt(buyShares) < sellOrder[i].get('numOfShares')) {
                        console.log('case 2');
                        //don't add buy oder
                        //adjust sell order

                        var sellShares = sellOrder[i].get('numOfShares') - buyShares;
                        this.store.find('sellOrder', sellOrder[i].id).then(function(sellOrder){
                            sellOrder.set('numOfShares', sellShares);
                        });
                        buyShares = 0;
                        //record.set('numOfShares', sellShares);
                        break;
                    }
                    else { //equal
                        console.log('case 3');

                        //remove sell order
                        //don't add buy order

                        this.store.find('sellOrder', sellOrder[i].id).then(function(sellOrder){
                            sellOrder.destroyRecord();
                        });

                        buyShares = 0;
                        break;
                    }


                }
            }

            if(parseInt(buyShares) > 0){
                console.log("adding");
                var newPurchase = this.store.createRecord('buyOrder', {
                    company: company,
                    //numOfShares: this.get('numOfShares'),
                    numOfShares: buyShares,
                    purchasePrice: this.get('purchasePrice')
                });
            }





            //newPurchase.save();
            this.transitionToRoute('/market/'+company.id);
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
    //,
    //sortProperties: ['numOfShares'],
    //sortAscending: true

});