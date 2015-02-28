
Stock.BuyOrder = DS.Model.extend({
    companyId: DS.belongsTo('company'),
    numOfShares: DS.attr(),
    purchasePrice: DS.attr()
});

//Stock.BuyOrder.FIXTURES = [
//    {
//        id: 1,
//        numOfShares: '10',
//        purchasePrice: '20'
//    }
//];