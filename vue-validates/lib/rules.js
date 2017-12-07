


/**
 * 策略对象
 */




// 值是否为空
const rules = {
    isNonEmpty : ( value , errerMsg ) => {
        if( value === '' ){
            return errerMsg
        }
    },
    
}

export default rules;