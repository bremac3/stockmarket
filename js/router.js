Stock.Router.map(function() {
    this.resource('stockStateSummary', {path: '/market/1'},  function(){
        this.resource('placeBidOrder', {path: '/placeBidOrder/:company_id'});
        this.resource('marketByOrder', {path: '/market/:company_id'});
        this.resource('placeSaleOrder', {path: '/placeSaleOrder/:company_id'});
    });
});