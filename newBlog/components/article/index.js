import Link from 'next/link'
import React from 'react';
import moment from 'moment';

export default class Article extends React.Component {
    constructor(props){
        super(props)
    }
    static async getInitialProps({query, pathname}) {

        return {}

    }

    render() {
        let { title,articleId ,createTime ,category,summary} = this.props
        createTime = moment(createTime).format('YYYY-MM-DD HH:mm:ss');

        const basepath = '../article?id='
        return (
            <article className="article article-type-post">
                <div className="article-header">
                    <h1>
                        <a
                            className="article-title"
                            href={ basepath + articleId }>{title}</a>
                        <a className="article-meta category">{category}</a>
                    </h1>
                </div>
                <p className="article-meta">
                    <span className="article-date">
                        <i className="fa fa-calendar-check-o"></i>
                        <a
                            href={ basepath + articleId }
                            className="article-date">
                            
                        </a><time>{createTime}</time>
                    </span>
                    {/*<span className="article-tag">
                        <i className="fa fa-tag"></i>
                        <a className="article-tag-link" href="/tags/Hexo/">{category}</a>
                    </span>
                    <span className="post-comment">
                        <i className="fa fa-commenting-o"></i>
                        <a href="" className="article-comment-link">评论</a>
                    </span>
                     <span className="post-wordcount hidden-xs">字数统计: 915(字)</span>
        // <span className="post-readcount hidden-xs">阅读时长: 4(分)</span> */}
                </p>
                <p className="article-summary">{ summary }</p>

                <p><a className="btn" href={ basepath + articleId }>阅读全文</a></p>

            </article>

        )
    }
}