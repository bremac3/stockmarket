Ember.Handlebars.helper('createTable', function(buyOrders, sellOrders, options){

    var length = (buyOrders.length < sellOrders.length) ? sellOrders.length : buyOrders.length;

    var build = '';
    build+='<table class="table table-bordered table-striped">'+
            '<tr class="active">' +
                '<th colspan="2">Buy</th>' +
                '<th colspan="2">Sell</th>' +
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

    var buyGroups = [];
    var sellGroups = [];

    var count = 0;
    var shares = 0;
    var price = 0;

    //aggregating buy orders
    for (var j = 0; j < buyOrders.length; j++) {
        count = 1;
        shares = parseInt(buyOrders[j].get('numOfShares'));
        price = buyOrders[j].get('purchasePrice');

        for (var k=j+1; k < buyOrders.length; k++) {
            if (buyOrders[j].get('purchasePrice') == buyOrders[k].get('purchasePrice')) {
                count += 1;
                shares += parseInt(buyOrders[k].get('numOfShares'));
                j++;
            }
            else {
                break;
            }
        }

        var group = {
            "count" : count,
            "shares" : shares,
            "price" : price
        }

        buyGroups.push(group);
    }

    //aggregating sell orders
    for (var j = 0; j < sellOrders.length; j++) {
        count = 1;
        shares = parseInt(sellOrders[j].get('numOfShares'));
        price = sellOrders[j].get('purchasePrice');

        for (var k=j+1; k < sellOrders.length; k++) {
            if (sellOrders[j].get('purchasePrice') == sellOrders[k].get('purchasePrice')) {
                count += 1;
                shares += parseInt(sellOrders[k].get('numOfShares'));
                j++;
            }
            else {
                break;
            }
        }

        var group = {
            "count" : count,
            "shares" : shares,
            "price" : price
        }

        sellGroups.push(group);
    }

    var length =  buyGroups.length < sellGroups.length ? sellGroups.length : buyGroups.length;

    var build = '<table class="table table-bordered table-striped">' +
                '<tr class="active">' +
                    '<th colspan="3">Buy</th>' +
                    '<th colspan="3">Sell</th>' +
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
        if (i < buyGroups.length) {
            build += '<td>' + buyGroups[i].count + '</td>';
            build += '<td>' + buyGroups[i].price + '</td>';
            build += '<td>' + buyGroups[i].shares + '</td>';
        }
        if(i < sellOrders.length){
            build += '<td>' + sellGroups[i].shares + '</td>';
            build += '<td>' + sellGroups[i].price + '</td>';
            build += '<td>' + sellGroups[i].count + '</td>';
        }
        else{//buy orders is done
            build += '<td></td><td></td><td></td>';
        }
        build+='</tr>';
    }

    return new Ember.Handlebars.SafeString(build);
});