
Stock.Router.map(function() {

     // this.resource('stockStateSummary');
    this.resource('stockStateSummary', {path: '/'},  function(){
        this.resource('placeBidOrder', {path: '/placeBidOrder/:company_id'});
        this.resource('marketByOrder', {path: '/market/:company_id'});
        this.resource('marketByPrice', {path: '/markets/:company_id'});
        this.resource('placeSaleOrder', {path: '/placeSaleOrder/:company_id'});
            //function(){
        //    this.resource('symbol', {path: ':company_id'});
        //});
    });
   // this.resource('symbol', {path: ':company_id'});
    //this.resource('posts', {path: '/'}, function(){
    //    this.resource('about');
    //});
    //this.resource('contact', function(){
    //    this.resource('phone');
    //    this.resource('email');
    //});
    //this.resource('post', {path: 'posts/:post_id'});
    //this.resource('addNewPost');

});