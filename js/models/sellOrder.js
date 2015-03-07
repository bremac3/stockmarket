
Stock.SellOrder = DS.Model.extend({
    company: DS.belongsTo('company'),
    numOfShares: DS.attr('number'),
    purchasePrice: DS.attr('number')
});
