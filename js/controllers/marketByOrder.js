Stock.MarketByOrderController = Ember.ObjectController.extend({
    sortBuyProperties: ['purchasePrice:desc'],
    sortSellProperties: ['purchasePrice:asc'],
    sortedBuyOrders: Ember.computed.sort('model.buyOrder', 'sortBuyProperties'),
    sortedSellOrders: Ember.computed.sort('model.sellOrder', 'sortSellProperties')
});