

/**
 *  validator 类
 */

import Rules from './rules'


export default class Validator {
    constructor(){
        this.cache = [];
    }

    add ( field,strategies ){
        let This = this;
        strategies.forEach( strategy => {
            (function(strategy){
                let ruleArray=strategy.rule.split(":");
                let errorMsg=strategy.errorMsg;

                This.cache.push(function(){
                    var ruleName=ruleArray.shift();
                    ruleArray.unshift(field.value);
                    ruleArray.push(errorMsg);//此时ruleArray的值为 ruleValue,fieldValue,errorMsg
                    var ruleErrorMsg=Rules[ruleName].apply(null,ruleArray);
                    if(ruleErrorMsg) return {field:field,msg:ruleErrorMsg};
                });
            })(strategy)
        })
    }

    start (){
        for(var i=0,valiFn;valiFn=this.cache[i++];){
            var error=valiFn();
            if(error)return error;
        }
    }

}