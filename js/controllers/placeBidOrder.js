
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

            var companyPrice;
            var companyShareVolume = 0;
            var transaction = false;

            for(var i = 0; i < sellOrder.length; i++) {
                //console.log(sellOrder[i].get('purchasePrice'));
                if (this.get('purchasePrice') == sellOrder[i].get('purchasePrice')) {
                    console.log('match!');
                    companyPrice = this.get('purchasePrice');
                    transaction = true;
                    if (parseInt(buyShares) > sellOrder[i].get('numOfShares')) {
                        //console.log(parseInt(buyShares) < sellOrder[i].get('numOfShares') );
                        //console.log(sellOrder[i].get('numOfShares'));
                        //delete sell order
                        //adjust buy order

                        console.log('case 1');

                        buyShares = buyShares - sellOrder[i].get('numOfShares');
                        companyShareVolume += parseInt(sellOrder[i].get('numOfShares'));
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
                        companyShareVolume += parseInt(buyShares);
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
                        companyShareVolume += parseInt(buyShares);
                        this.store.find('sellOrder', sellOrder[i].id).then(function(sellOrder){
                            sellOrder.destroyRecord();
                        });

                        buyShares = 0;
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
                        Company.set('changeUrl', 'down.png');
                    else if (companyChangeNet > 0)
                        Company.set('changeUrl', 'up.png');
                    else
                        Company.set('changeUrl', 'noChange.png');

                    Company.set('changeVolume', (Math.abs(companyChangeNet)).toFixed(2));
                    var companyChangePercent = parseInt(Company.get('changeVolume')) / parseInt(Company.get('openPrice'));
                    Company.set('changePercent', (Math.abs(companyChangePercent)).toFixed(3) + '%');

                });
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