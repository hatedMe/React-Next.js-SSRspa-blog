






/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */





document.body.addEventListener('click',function(){
	alert( 2 );
},false);

document.body.addEventListener('click',function(){
	alert( 3 );
},false);

document.body.addEventListener('click',function(){
	alert( 4 );
},false);

document.body.click();  // 模拟用户点击



var saleOffices = {}; // 定义售楼处

saleOffices.clientList = [];  // 缓存列表，存放订阅者的回调函数

saleOffices.listen = function( fn ){  // 增加订阅者
	this.clientList.push( fn );   // 订阅的消息添加到缓存列表
};

saleOffices.trigger = function(){
	for ( var i=0; i< this.clientList.length; i++){
		fn = this.clientList[i];
		fn.apply( this ,arguments );  //arguments 是发布消息时带上的参数 
	}
}


saleOffices.listen(function(price ,squareMeter){     //小明订阅的消息
	console.log( `价格 = ${price}`);
	console.log( `squareMeter = ${squareMeter}` );
})

saleOffices.listen(function(price ,squareMeter){     //小红订阅的消息
	console.log( `价格 = ${price}`);
	console.log( `squareMeter = ${squareMeter}` ); 
})

saleOffices.trigger( 200000 , 88 );    // 输出：200万 ， 88平方米
saleOffices.trigger( 300000 , 110 );   // 输出：300万， 110平方米 



