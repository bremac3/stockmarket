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
            currentPrice: 0,
            changeVolume: 0,
            changePercent: 0,
            shareVolume: 0,
            url: 'images/microsoft.png',
            changeUrl: 'images/noChange.png'
        },
        {
            id: 2,
            name: "Apple Inc. (AAPL)",
            openPrice: 121.62,
            currentPrice: 0,
            changeVolume: 0,
            changePercent: 0,
            shareVolume: 0,
            url: 'images/apple.png',
            changeUrl: 'images/noChange.png'
        },
        {
            id: 3,
            name: "Facebook, Inc. (FB)",
            openPrice: 74.98,
            currentPrice: 0,
            changeVolume: 0,
            changePercent: 0,
            shareVolume: 0,
            url: 'images/facebook.png',
            changeUrl: 'images/noChange.png'
        },
        {
            id: 4,
            name: "Cisco Systems, Inc.",
            openPrice: 27.41,
            currentPrice: 0,
            changeVolume: 0,
            changePercent: 0,
            shareVolume: 0,
            url: 'images/cisco.png',
            changeUrl: 'images/noChange.png'
        },
        {
            id: 5,
            name: "Intel Corporation",
            openPrice: 0.55,
            currentPrice: 0,
            changeVolume: 0,
            changePercent: 0,
            shareVolume: 0,
            url: 'images/intel.png',
            changeUrl: 'images/noChange.png'
        }
    ];

