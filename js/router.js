Stock.Router.map(function() {
    this.resource('stockStateSummary', {path: '/'},  function(){
        this.resource('placeBidOrder', {path: '/placeBidOrder/:company_id'});
        this.resource('marketByOrder', {path: '/market/:company_id'});
        this.resource('placeSellOrder', {path: '/placeSellOrder/:company_id'});
    });
});