
Stock.SellOrder = DS.Model.extend({
    company: DS.belongsTo('company'),
    numOfShares: DS.attr('number'),
    purchasePrice: DS.attr('number')
});

//Stock.SellOrder.FIXTURES = [
//    {
//        id: 1,
//        numOfShares: '15',
//        purchasePrice: '20'
//    }
//];