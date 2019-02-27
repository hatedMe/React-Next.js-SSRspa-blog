const mongoose = require('mongoose');


let articlemd = new mongoose.Schema({
    // articleId : String,
    // value : String
    id : String ,
    content : String,
},{ versionKey: false })





let Articlemd = mongoose.model('article_md', articlemd , 'article_md');

module.exports = Articlemd;