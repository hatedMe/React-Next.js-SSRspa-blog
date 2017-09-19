const mongoose = require('mongoose');


let articlemd = new mongoose.Schema({
    articleId : String,
    value : String
},{ versionKey: false })





let Articlemd = mongoose.model('articlemd', articlemd);

module.exports = Articlemd;