/**
 * 
 * 
 * 
 */


var Flower = function() {};

var xiaoming = {
    sendFlower: function(target) {
        var flower = new Flower();
        target.receiveFlower(flower)
    }
};

var A = {
    receiveFlower: function() {
        console.log('收到花' + flower);
    }
}

xiaoming.sendFlower(A);





//  ajax(...) 是某个库中提供的某个ajax函数
var data = ajax(url);

console.log(data);
//  啊哦！data通常不会包含ajax的结果


//  ajax(...) 是某个库中提供的某个ajax函数
var data = ajax(url, function mycallback(data) {
    console.log(data); //  耶！得到了一些数据
});


function now() {
    return 21;
}

function later() {
    answer = answer * 2;
    console.log('meaning of life :', answer);
}

var answer = now();

setTimeout(later, 1000); // meaning of life : 42