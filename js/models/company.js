
Stock.Company = DS.Model.extend({
    name: DS.attr(),
    openPrice: DS.attr(),
    currentPrice: DS.attr(),
    changeVolume: DS.attr(),
    shareVolume: DS.attr(),
    url: DS.attr(),
    buyOrder: DS.hasMany('buyOrder'),
    sellOrder: DS.hasMany('sellOrder')

});

Stock.Company.FIXTURES =
    [
        {
            id: 1,
            name: "Microsoft Corporation (MSFT)",
            openPrice: 42.59,
            url: 'microsoft.png'
        },
        {
            id: 2,
            name: "Apple Inc. (AAPL)",
            openPrice: 121.62,
            url: 'apple.png'
        },
        {
            id: 3,
            name: "Facebook, Inc. (FB)",
            openPrice: 74.98,
            url: 'facebook.png'
        },
        {
            id: 4,
            name: "Cisco Systems, Inc.",
            openPrice: 27.41,
            url: 'cisco.png'
        },
        {
            id: 5,
            name: "Intel Corporation",
            openPrice: 0.55,
            url: 'intel.png'
        }
    ];

//
//Stock.Company.FIXTURES = [
//    {
//        id: 1,
//        name: 'Microsoft',
//        openPrice: '10',
//        currentPrice: '20',
//        changeVolume: '10',
//        shareVolume: '15',
//        url: 'microsoft.png'
//    },
//    {
//        id: 2,
//        name: 'Facebook',
//        openPrice: '10',
//        currentPrice: '20',
//        changeVolume: '10',
//        shareVolume: '15',
//        url: 'facebook.png'
//    },
//    {
//        id: 3,
//        name: 'Apple',
//        openPrice: '10',
//        currentPrice: '20',
//        changeVolume: '10',
//        shareVolume: '15',
//        url: 'apple.jpg'
//    }
//];