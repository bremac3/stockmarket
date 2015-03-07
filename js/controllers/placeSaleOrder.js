
Stock.PlaceSaleOrderController = Ember.ObjectController.extend({
    sortBuyProperties: ['purchasePrice:desc'],
    sortedBuyOrder: Ember.computed.sort('model.buyOrder', 'sortBuyProperties'),
    sortSellProperties: ['purchasePrice:asc'],
    sortedSellOrder: Ember.computed.sort('model.sellOrder', 'sortSellProperties'),

    actions: {
        submit: function(company){
            console.log("submitting");

            var buyOrder = this.get('sortedBuyOrder');
            //console.log(this.get('sortedSellOrder'));
            var sellShares = this.get('numOfShares');

            var companyPrice;
            //var companyShareChange;
            var companyShareVolume = 0;

            for(var i = 0; i < buyOrder.length; i++) {
                //console.log(sellOrder[i].get('purchasePrice'));
                if (this.get('purchasePrice') == buyOrder[i].get('purchasePrice')) {
                    console.log('match!');
                    companyPrice = this.get('purchasePrice');
                    if (parseInt(sellShares) > buyOrder[i].get('numOfShares')) {
                        //delete buy order
                        //adjust sell order

                        console.log('case 1');

                        sellShares = sellShares - buyOrder[i].get('numOfShares');
                        companyShareVolume += parseInt(sellShares);
                        this.store.find('buyOrder', buyOrder[i].id).then(function(buyOrder){
                            buyOrder.destroyRecord();
                        });

                        console.log('destroyed');

                    }
                    else if (parseInt(sellShares) < buyOrder[i].get('numOfShares')) {
                        console.log('case 2');
                        //don't add sell order
                        //adjust buy order
                        var buyShares = buyOrder[i].get('numOfShares') - sellShares;
                        companyShareVolume += parseInt(sellShares);
                        this.store.find('buyOrder', buyOrder[i].id).then(function(buyOrder){
                            buyOrder.set('numOfShares', buyShares);
                        });
                        sellShares = 0;
                        break;
                    }
                    else { //equal
                        console.log('case 3');

                        //remove buy order
                        //don't add sell order
                        companyShareVolume += parseInt(sellShares);
                        this.store.find('buyOrder', buyOrder[i].id).then(function(buyOrder){
                            buyOrder.destroyRecord();
                        });

                        sellShares = 0;
                        break;
                    }


                }
            }

            console.log(companyShareVolume);

            if(parseInt(sellShares) > 0){
                console.log("adding");
                var newPurchase = this.store.createRecord('sellOrder', {
                    company: company,
                    //numOfShares: this.get('numOfShares'),
                    numOfShares: sellShares,
                    purchasePrice: this.get('purchasePrice')
                });
            }



            //var newPurchase = this.store.createRecord('sellOrder', {
            //    company: company,
            //    numOfShares: this.get('numOfShares'),
            //    purchasePrice: this.get('purchasePrice')
            //});
            ////newPurchase.save();
            this.transitionToRoute('/market/'+company.id)
        },
        cancel: function() {
            console.log("cancel");
            this.transitionToRoute('/');
        }
    }
});