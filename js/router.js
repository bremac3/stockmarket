
Stock.Router.map(function() {

     // this.resource('stockStateSummary');
    this.resource('stockStateSummary', {path: '/'},  function(){
        this.resource('placeBidOrder');
    });
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