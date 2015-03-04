Ember.Handlebars.helper('createTable', function(buyOrders, sellOrders, options){
    console.log(buyOrders);
    console.log(buyOrders.length);

    var length = (buyOrders.length < sellOrders.length) ? sellOrders.length : buyOrders.length;

    var build = '';
    build+='<table>'+
            '<tr>' +
                '<th style = "text-align:center" colspan="2">Buy</th>' +
                '<th style = "text-align:center" colspan="2">Sell</th>' +
            '</tr>' +
            '<tr>' +
                '<td>Volume</td>' +
                '<td>Price</td>' +
                '<td>Price</td>' +
                '<td>Volume</td>' +
            '</tr>';
    for(var i = 0; i < length; i++) {
        build += '<tr>';
        if (i < buyOrders.length) {
            build += '<td>' + buyOrders[i].get('numOfShares') + '</td>';
            build += '<td>' + buyOrders[i].get('purchasePrice') + '</td>';
        }
        else {//buy orders is done
            build += '<td></td><td></td>';
        }
        if(i < sellOrders.length){
            build += '<td>' + sellOrders[i].get('purchasePrice') + '</td>';
            build += '<td>' + sellOrders[i].get('numOfShares') + '</td>';
        }
        else{//buy orders is done
            build += '<td></td><td></td>';
        }
        build+='</tr>';
    }
    build+='</table>';
    return new Ember.Handlebars.SafeString(build);
});

Ember.Handlebars.helper('createMarketByPrice', function(buyOrders, sellOrders, options){

    var length =  buyOrders.length < sellOrders.length ? sellOrders.length : buyOrders.length;

    var build = '<table>' +
                '<tr>' +
                    '<th style = "text-align:center" colspan="3">Sell</th>' +
                '<th style = "text-align:center" colspan="3">Sell</th>' +
                '</tr>' +
                '<tr>' +
                    '<td>#</td>' +
                    '<td>Price</td>' +
                    '<td>Volume</td>' +
                    '<td>Volume</td>' +
                    '<td>Price</td>' +
                    '<td>#</td>' +
                '</tr>';

    //add the buy column

    for(var i = 0; i < length; i++){
        build += '<tr>';
        if (i < buyOrders.length) {
            build += '<td>0</td>';
            build += '<td>' + buyOrders[i].get('numOfShares') + '</td>';
            build += '<td>' + buyOrders[i].get('purchasePrice') + '</td>';
        }
        else {//buy orders is done
            build += '<td></td><td></td><td></td>';
        }
        if(i < sellOrders.length){
            build += '<td>' + sellOrders[i].get('purchasePrice') + '</td>';
            build += '<td>' + sellOrders[i].get('numOfShares') + '</td>';
            build += '<td>0</td>';
        }
        else{//buy orders is done
            build += '<td></td><td></td><td></td>';
        }
        build+='</tr>';
    }




    return new Ember.Handlebars.SafeString(build);
});