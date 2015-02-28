
Stock.Company = DS.Model.extend({
    name: DS.attr(),
    openPrice: DS.attr(),
    currentPrice: DS.attr(),
    changeVolume: DS.attr(),
    shareVolume: DS.attr(),
    url: DS.attr(),
    buyOrder: DS.hasMany('buyOrder')
});

Stock.Company.FIXTURES = [
    {
        id: 1,
        name: 'Micro',
        openPrice: '10',
        currentPrice: '20',
        changeVolume: '10',
        shareVolume: '15',
        url: 'microsoft.png',
        buyOrder: [1]
    },
    {
        id: 2,
        name: 'Facebook',
        openPrice: '10',
        currentPrice: '20',
        changeVolume: '10',
        shareVolume: '15',
        url: 'facebook.png'
    },
    {
        id: 3,
        name: 'Apple',
        openPrice: '10',
        currentPrice: '20',
        changeVolume: '10',
        shareVolume: '15',
        url: 'apple.jpg'
    }
];