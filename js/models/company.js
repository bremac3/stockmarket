
Stock.Company = DS.Model.extend({
    name: DS.attr(),
    openPrice: DS.attr(),
    currentPrice: DS.attr(),
    changeVolume: DS.attr(),
    changePercent: DS.attr(),
    shareVolume: DS.attr(),
    url: DS.attr(),
    changeUrl: DS.attr(),
    buyOrder: DS.hasMany('buyOrder'),
    sellOrder: DS.hasMany('sellOrder')

});

Stock.Company.FIXTURES =
    [
        {
            id: 1,
            name: "Microsoft Corporation (MSFT)",
            openPrice: 42.59,
            url: 'images/microsoft.png'
        },
        {
            id: 2,
            name: "Apple Inc. (AAPL)",
            openPrice: 121.62,
            url: 'images/apple.png'
        },
        {
            id: 3,
            name: "Facebook, Inc. (FB)",
            openPrice: 74.98,
            url: 'images/facebook.png'
        },
        {
            id: 4,
            name: "Cisco Systems, Inc.",
            openPrice: 27.41,
            url: 'images/cisco.png'
        },
        {
            id: 5,
            name: "Intel Corporation",
            openPrice: 0.55,
            url: 'images/intel.png'
        }
    ];

