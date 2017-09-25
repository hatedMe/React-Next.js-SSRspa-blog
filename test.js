






/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */





// document.body.addEventListener('click',function(){
// 	alert( 2 );
// },false);

// document.body.addEventListener('click',function(){
// 	alert( 3 );
// },false);

// document.body.addEventListener('click',function(){
// 	alert( 4 );
// },false);

// document.body.click();  // 模拟用户点击



// var saleOffices = {}; // 定义售楼处

// saleOffices.clientList = [];  // 缓存列表，存放订阅者的回调函数

// saleOffices.listen = function( fn ){  // 增加订阅者
// 	this.clientList.push( fn );   // 订阅的消息添加到缓存列表
// };

// saleOffices.trigger = function(){
// 	for ( var i=0; i< this.clientList.length; i++){
// 		fn = this.clientList[i];
// 		fn.apply( this ,arguments );  //arguments 是发布消息时带上的参数 
// 	}
// }


// saleOffices.listen(function(price ,squareMeter){     //小明订阅的消息
// 	console.log( `价格 = ${price}`);
// 	console.log( `squareMeter = ${squareMeter}` );
// })

// saleOffices.listen(function(price ,squareMeter){     //小红订阅的消息
// 	console.log( `价格 = ${price}`);
// 	console.log( `squareMeter = ${squareMeter}` ); 
// })

// saleOffices.trigger( 200000 , 88 );    // 输出：200万 ， 88平方米
// saleOffices.trigger( 300000 , 110 );   // 输出：300万， 110平方米 



var saleOffices = {};

saleOffices.clientList = [];

saleOffices.listen = function(key ,fn){
	if( !this.clientList[key] ){    // 如果没有订阅过此类消息，给该消息创建一个缓存列表
		this.clientList[key] = fn ;
	}
	this.clientList[key].push( fn );  // 订阅的消息添加进消息缓存列表
}

saleOffices.trgger = function(){  // 发布消息
	var key = [].shift.call( arguments );  // 取出消息类型
	var fns = this.clientList[key];
	if( !fns || fns.length === 0 ) {  // 如果没有订阅该消息，则返回
		return false;
	}
	for( var i=0;i<fn.length ;i++){
		fn.apply( this, arguments );  // arguments 是发布消息的附加参数
	}
}

saleOffices.listen('squareMeter88',function(price){   // 小明订阅88平米房子的消息
	console.log( `价格 = ${price}`);   // 输出 2000000
});
saleOffices.listen('squareMeter100',function(price){   // 小红订阅88平米房子的消息
	console.log( `价格 = ${price}`);   // 输出 3000000
});

saleOffices.trgger('squareMeter88', 2000000);   // 发布88平方米房子的价格
saleOffices.trgger('squareMeter100', 3000000);   // 发布100平方米房子的价格



var event = {
	clientList : [],
	listen : function(key ,fn ){
		if( !this.clientList[key] ){    
			this.clientList[key] = fn ;
		}
		this.clientList[key].push( fn );  
	},
	trgger : function(){
		var key = [].shift.call( arguments );  
		var fns = this.clientList[key];
		if( !fns || fns.length === 0 ) {  
			return false;
		}
		for( var i=0;i<fn.length ;i++){
			fn.apply( this, arguments );  
		}
	}
}


var installEvent = function(obj){
	for( var attr in event ){
		obj[attr] = event[attr]
	}
};


var saleOffices = {};
installEvent( saleOffices );

saleOffices.listen('squareMeter88',function(price){   // 小明订阅88平米房子的消息
	console.log( `价格 = ${price}`);   // 输出 2000000
});
saleOffices.listen('squareMeter100',function(price){   // 小红订阅88平米房子的消息
	console.log( `价格 = ${price}`);   // 输出 3000000
});

saleOffices.trgger('squareMeter88', 2000000);   // 发布88平方米房子的价格
saleOffices.trgger('squareMeter100', 3000000);   // 发布100平方米房子的价格


event.remove = function(key ,fn){
	var fns = this.clientList[key];
	if( !fns){
		return false;
	}
	if( !fn ){
		fn && ( fns.length = 0 )
	}else{
		for( var i=0;i<fns.length-1;i-- ){
			var _fn = fns[i];
			if( _fn === fn ){
				fns.splice(i,1)
			}
		}
	}
};

var saleOffices = {};
var installEvent = function(obj){
	for( var attr in event ){
		obj[attr] = event[attr]
	}
};

installEvent( saleOffices );

saleOffices.listen('squareMeter88',fn1 = function(price){   // 小明订阅88平米房子的消息
	console.log( `价格 = ${price}`);   
});
saleOffices.listen('squareMeter100',fn1 = function(price){   // 小红订阅88平米房子的消息
	console.log( `价格 = ${price}`);   
});

saleOffices.remove('squareMeter88', fn1);   // 发布88平方米房子的价格
saleOffices.trgger('squareMeter100', 3000000);   // 发布100平方米房子的价格


login.succ(function(data){
	header.setAvatar( data.avatar );    // 设置header模块的头像
	nav.setAvatar( data.avatar );       // 设置导航模块的头像
	Message.refresh();                  // 刷新消息列表
	cart.refresh();                     // 刷新购物车列表
	Address.refresh();                  // 增加这行代码
});


$.ajax('api/login',function(data){    // 登录成功
	login.trigger('loginSucc',data)   // 发布登录成功的消息
})





var header = (function(){       // header 模块
	login.listen('loginSucc',function(data){
		header.setAvatar(data.avatar)
	});
	return {
		setAvatar:function(avatar){
			console.log( '这里设置header模块的头像');
		}
	}
})();

var nav =(function(){           // nav 模块
	login.listen('loginSucc',function(data){
		nav.setAvatar( data.avatar );
	})
	return {
		setAvatar :function(avatar){
			console.log( '这里设置nav模块的头像');
		}
	}
})();

var address = (function(){    // nav模块
	login.listen('loginSucc',function(obj){
		address.refresh(obj);
	});
	return {
		refresh : function( list){
			console.log('刷新收货地址列表');
		}
	}
})();













