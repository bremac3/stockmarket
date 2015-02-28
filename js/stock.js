
Stock = Ember.Application.create();

Stock.ApplicationAdapter = DS.FixtureAdapter.extend();
Stock.ApplicationSerializer = DS.LSSerializer.extend();
//Stock.ApplicationAdapter = DS.LSAdapter.extend({
//    namespace: 'Stock'
//});
