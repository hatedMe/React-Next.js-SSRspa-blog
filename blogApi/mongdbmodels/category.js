const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    //分类名称
    cateName: { type: String },
    //分类别名
    alias: { type: String },
    //图标地址
    img: { type: String },
    //链接地址
    link: { type: String },
    //创建时间
    createTime: { type: Date, default: +new Date() },
    //修改时间
    modifyTime: { type: Date, default: +new Date() }
});


const Category = mongoose.model('category', CategorySchema);

module.exports = Category;