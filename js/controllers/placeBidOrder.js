Stock.PlaceBidOrderController = Ember.ObjectController.extend({
    sortBuyProperties: ['purchasePrice:desc'],
    sortedBuyOrders: Ember.computed.sort('model.buyOrder', 'sortBuyProperties'),
    sortSellProperties: ['purchasePrice:asc'],
    sortedSellOrder: Ember.computed.sort('model.sellOrder', 'sortSellProperties'),

    actions: {
        submit: function (company) {
            var sellOrder = this.get('sortedSellOrder');
            var buyShares = this.get('numOfShares');

            var companyPrice;
            var companyShareVolume = 0;
            var transaction = false;

            for (var i = 0; i < sellOrder.length; i++) {
                //compare sellorder price and inputted price
                if (parseFloat(this.get('purchasePrice')) >= sellOrder[i].get('purchasePrice')) {
                    companyPrice = this.get('purchasePrice');
                    transaction = true;
                    if (parseInt(buyShares) > sellOrder[i].get('numOfShares')) { //more buy than sell shares
                        //delete sell order
                        //adjust buy order

                        buyShares = buyShares - sellOrder[i].get('numOfShares');
                        companyShareVolume += parseInt(sellOrder[i].get('numOfShares'));
                        this.store.find('sellOrder', sellOrder[i].id).then(function (sellOrder) {
                            sellOrder.destroyRecord();
                        });
                    }
                    else if (parseInt(buyShares) < sellOrder[i].get('numOfShares')) { //more sell than buy shares
                        //don't add buy oder
                        //adjust sell order

                        var sellShares = sellOrder[i].get('numOfShares') - buyShares;
                        companyShareVolume += parseInt(buyShares);
                        this.store.find('sellOrder', sellOrder[i].id).then(function (sellOrder) {
                            sellOrder.set('numOfShares', sellShares);
                        });
                        buyShares = 0;
                        break;
                    }
                    else { //equal
                        //remove sell order
                        //don't add buy order
                        companyShareVolume += parseInt(buyShares);
                        this.store.find('sellOrder', sellOrder[i].id).then(function (sellOrder) {
                            sellOrder.destroyRecord();
                        });
                        buyShares = 0;
                        break;
                    }
                }

            }

            //update company data
            if (transaction) { 
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

                    Company.set('changeVolume', companyChangeNet.toFixed(2));
                    var companyChangePercent = parseFloat(Company.get('changeVolume')) / parseFloat(Company.get('openPrice'));
                    Company.set('changePercent', Math.abs(companyChangePercent).toFixed(3));

                });
            }

            if (parseInt(buyShares) > 0) { //add the buy order
                var newPurchase = this.store.createRecord('buyOrder', {
                    company: company,
                    numOfShares: buyShares,
                    purchasePrice: this.get('purchasePrice')
                });
            }
            this.transitionToRoute('marketByOrder', company.id);
        },

        cancel: function () {
            console.log("cancel");
            this.transitionToRoute('stockStateSummary');
        }
    }
});