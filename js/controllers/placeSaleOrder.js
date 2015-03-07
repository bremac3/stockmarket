
Stock.PlaceSaleOrderController = Ember.ObjectController.extend({
    sortBuyProperties: ['purchasePrice:desc'],
    sortedBuyOrder: Ember.computed.sort('model.buyOrder', 'sortBuyProperties'),
    sortSellProperties: ['purchasePrice:asc'],
    sortedSellOrder: Ember.computed.sort('model.sellOrder', 'sortSellProperties'),

    actions: {
        submit: function(company){

            var buyOrder = this.get('sortedBuyOrder');
            var sellShares = this.get('numOfShares');

            var companyPrice;
            var companyShareVolume = 0;
            var transaction = false;

            for(var i = 0; i < buyOrder.length; i++) {
                if (this.get('purchasePrice') == buyOrder[i].get('purchasePrice')) {
                    companyPrice = this.get('purchasePrice');
                    transaction = true;
                    if (parseInt(sellShares) > buyOrder[i].get('numOfShares')) {
                        //delete buy order
                        //adjust sell order
                        sellShares = sellShares - buyOrder[i].get('numOfShares');
                        companyShareVolume += parseInt(buyOrder[i].get('numOfShares'));
                        this.store.find('buyOrder', buyOrder[i].id).then(function(buyOrder){
                            buyOrder.destroyRecord();
                        });
                    }
                    else if (parseInt(sellShares) < buyOrder[i].get('numOfShares')) {
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

            if(transaction) {
                this.store.find('company', company.id).then(function (Company) {
                    if (Company.get('shareVolume'))
                        Company.set('shareVolume', (Company.get('shareVolume') + companyShareVolume));
                    else
                        Company.set('shareVolume', companyShareVolume);
                    Company.set('currentPrice', companyPrice);

                    var companyChangeNet = parseInt(Company.get('currentPrice')) - parseInt(Company.get('openPrice'));
                    if (companyChangeNet < 0)
                        Company.set('changeUrl', 'images/down.png');
                    else if (companyChangeNet > 0)
                        Company.set('changeUrl', 'images/up.png');
                    else
                        Company.set('changeUrl', 'images/noChange.png');

                    Company.set('changeVolume', (Math.abs(companyChangeNet)).toFixed(2));
                    var companyChangePercent = parseInt(Company.get('changeVolume')) / parseInt(Company.get('openPrice'));
                    Company.set('changePercent', (Math.abs(companyChangePercent)).toFixed(3) + '%');
                });
            }

            if(parseInt(sellShares) > 0){
                console.log("adding");
                var newPurchase = this.store.createRecord('sellOrder', {
                    company: company,
                    numOfShares: sellShares,
                    purchasePrice: this.get('purchasePrice')
                });
            }

            this.transitionToRoute('/market/'+company.id)
        },
        cancel: function() {
            console.log("cancel");
            this.transitionToRoute('/');
        }
    }
});