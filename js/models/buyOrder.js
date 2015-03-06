
Stock.BuyOrder = DS.Model.extend({
    company: DS.belongsTo('company'),
    numOfShares: DS.attr('number'),
    purchasePrice: DS.attr('number')
});

//Stock.BuyOrder.FIXTURES = [
//    {
//        id: 1,
//        numOfShares: '10',
//        purchasePrice: '20'
//    }
//];