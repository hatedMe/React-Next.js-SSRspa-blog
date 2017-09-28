






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












/******************** 22------代码重构 ********************** */

var getUserInfo = function(){
	ajax('url',function(data){
		console.log( 'userId' + data.userId );
		console.log( 'userName' + data.userName );
		console.log( 'nickName' + data.nickName );
	})
}


var getUserInfo = function(){
	ajax('url',function(data){
		printDetails(data);
	})
}

var printDetails = function (data){
	console.log( 'userId' + data.userId );
	console.log( 'userName' + data.userName );
	console.log( 'nickName' + data.nickName );
}


var paging = function(currPage){
	if( currPage <= 0 ){
		currPage = 0;
		jump( currPage ); // 跳转
	}else if (currPage >= totalPage){
		currPage = totalPage;
		jump( currPage);  // 跳转
	}else{
		jump( currPage);  // 跳转
	}
}


var paging = function(currPage){
	if( currPage <= 0 ){
		currPage = 0;
	}else if (currPage >= totalPage){
		currPage = totalPage;
	}
	jump( currPage);  // 把jump函数独立出来
}

var getPrice =function(price){
	var date = new Date();
	if( date.getMonth() >= 6 &&  date.getMonth() <= 9) { // 夏季
		return price * 0.8 
	}
	return price
}


if( date.getMonth() >= 6 &&  date.getMonth() <= 9) { 
	// ...
}

var isSummer = function(){
	var date = new Date();
	return date.getMonth() >= 6 &&  date.getMonth() <= 9;
}

var getPrice =function(price){
	if( isSummer() ){  //夏季
		return price *0.8;
	}
	return price; 
}





var createXHR = function(){
	var xhr;
	try {
		xhr = new ActiveXObject('MSML2.XMLHttp.6.0');
	} catch (e) {
		try {
			xhr = new ActiveXObject('MSML2.XMLHttp.3.0')
		} catch (e) {
			xhr = new ActiveXObject('MSML2.XMLHttp')
		}
	}
	return xhr;
}

var xhr = createXHR();

var createXHR = function(){
	var versions = ['MSML2.XMLHttp.6.0','MSML2.XMLHttp.3.0','MSML2.XMLHttp'];
	for(var i=0;i<versions.length;i++){
		try {
			return new ActiveXObject(versions[i])
		} catch (e) {
			
		}
	}
}

var xhr = createXHR();

var del = function(obj){
	var ret;
	if( !obj.isReadOnly ){      // 不为只读的才能被删除
		if( obj.isFlader ){     // 如果是文件夹
			ret = deleteFolder( obj );
		}else if( obj.isFile ){  // 如果是文件
			ret = deleteFile( obj );
		}
	}
	return ret;
}

var del = function(obj){
	if( obj.isReadOnly ){ // 反正if表达式
		return ;
	}
	if( obj.isFlader ){
		return deleteFolder( obj );
	}
	if( obj.isFile ){
		return deleteFile( obj );
	}
}



var setUserInfo = function(id,name,address,sex,mobile,qq){
	console.log( 'id=' + id );
	console.log( 'name=' + name );
	console.log( 'address=' + address );
	console.log( 'sex=' + sex );
	console.log( 'mobile=' + mobile );
	console.log( 'qq=' + qq );
}

setUserInfo( 1314 ,'sven' , 'shenzhen' ,'male' ,'137********' ,7548764 )


var setUserInfo = function(obj){
	console.log( 'id=' + obj.id );
	console.log( 'name=' + obj.name );
	console.log( 'address=' + obj.address );
	console.log( 'sex=' + obj.sex );
	console.log( 'mobile=' + obj.mobile );
	console.log( 'qq=' + obj.qq );
}

setUserInfo({
	id : 1314,
	name : 'sven',
	address : 'shenzhen',
	mobile : '137*******',
	qq : 7548764
});


var draw = function(width , height, squaer){};

var draw = function(width , height){
	var squaer = width * height;
};








