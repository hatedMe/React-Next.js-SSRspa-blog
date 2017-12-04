

import React, { Component } from 'react';
import moment from '../../lib/moment.min'



 class ItemHead extends Component {
     constructor(props){
         super(props)
     }
     render() {
         let { createTime , category ,viewCount , labels } = this.props;
         const iNow = moment(createTime).format('YYYY-MM-DD HH:mm:ss');
         return (
            <div className="article-header text-center">
                <h1 className="article-title">
                    {this.props.title}
                </h1>
                <div className="article-meta">
                    <span className="article-date">
                        <i className="iconfont icon-shijian"></i>
                        
                            <time>
                                { iNow }
                            </time>
                        
                    </span>
                    <span className="article-tag">
                        <i className="iconfont icon-fenlei"></i>
                        <a className="article-tag-link" href="/tags/Hexo/">
                            { category }
                        </a>
                    </span>
                    <span className="article-read">
                        <i className="iconfont icon-yuedu"></i>
                        <span id="busuanzi_container_page_pv">
                            <span id="busuanzi_value_page_pv">
                                { viewCount }
                            </span>
                        </span>
                    </span>
                    <span className="article-read">
                    <i className="iconfont icon-biaoqiandao"></i>
                    <span id="busuanzi_container_page_pv">
                        {
                            typeof labels !== "undefined" ?
                            labels.map( (e,i) => <span key={i}>{e}</span> ) :
                            'undefined'

                        }
                    </span>
                </span>
                </div>
                
            </div>
         );
     }
 }

 export default ItemHead;

