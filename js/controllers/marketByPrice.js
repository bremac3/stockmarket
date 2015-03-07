Stock.MarketByPriceController = Ember.ObjectController.extend({

   sortProperties: ['purchasePrice:desc'],
   sortedBuyOrders: Ember.computed.sort('model.buyOrder', 'sortProperties'),
   sortedSellOrders: Ember.computed.sort('model.sellOrder', 'sortProperties'),

   model: function() {
   	console.log("dvd");
   }
});