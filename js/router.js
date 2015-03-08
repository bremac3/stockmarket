Stock.Router.map(function() {
    this.resource('stockStateSummary', {path: '/'},  function(){
        this.resource('placeBidOrder', {path: '/placeBidOrder/:company_id'});
        this.resource('marketByOrder', {path: '/market/:company_id'});
        this.resource('placeSaleOrder', {path: '/placeSaleOrder/:company_id'});
    });
});