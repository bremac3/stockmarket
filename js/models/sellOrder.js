
Stock.SellOrder = DS.Model.extend({
    numOfShares: DS.attr(),
    purchasePrice: DS.attr()
});

Stock.SellOrder.FIXTURES = [
    {
        id: 1,
        numOfShares: '15',
        purchasePrice: '20'
    }
];