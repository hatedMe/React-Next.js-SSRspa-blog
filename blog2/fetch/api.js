




import fetch from './http.js';

const prefix = 'api.djui.cn'



const prefixApi = {
    accessToken : `${prefix}/login`,
    getAllarticle : `${prefix}/api/getAllArticle`
}



const getAllarticle = (pageName, pageSize) =>{
    fetch( prefixApi ).then(response=>{
        response.json()
    }).then(response=>{
        return responses
    }).catch(error=>{
        throw new Error( error );
    })
}

