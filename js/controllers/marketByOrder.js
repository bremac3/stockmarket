
Stock.MarketByOrderController = Ember.ObjectController.extend({

    sortProperties: ['purchasePrice:desc'],
    sortedBuyOrders: Ember.computed.sort('model.buyOrder', 'sortProperties'),
    sortedSellOrders: Ember.computed.sort('model.sellOrder', 'sortProperties')

    //sortedBuyOrders: function () {
    //    return this.get('buyOrder').sortBy('purchasePrice');
    //}.property('buyOrder.@each.purchasePrice')
});