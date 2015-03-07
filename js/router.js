
Stock.Router.map(function() {

    this.resource('stockStateSummary', {path: '/'},  function(){
        this.resource('placeBidOrder', {path: '/placeBidOrder/:company_id'});
        this.resource('marketByOrder', {path: '/market/:company_id'});
        //this.resource('marketByPrice', {path: '/markets/:company_id'});
        this.resource('placeSaleOrder', {path: '/placeSaleOrder/:company_id'});
        //this.resource('market', {path: '/marketBy/:company_id'});
            //function(){
        //    this.resource('symbol', {path: ':company_id'});
        //});
    });
});