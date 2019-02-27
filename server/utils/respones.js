



module.exports = {
    success (data) {
        return {
            status : 200 , 
            message : 'ok',
            data
        }
    }, 
    error( status = 400, message ){
        return {
            status : status ,
            message : message || 'operation failed',
        }
    }
}
