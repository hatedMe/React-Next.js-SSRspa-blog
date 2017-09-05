import Link from 'next/link'

import React from 'react';

export default class Article extends React.Component {
    constructor(props){
        super(props)
    }
    static async getInitialProps({query, pathname}) {

        return {}

    }

    render() {
        const { title,articleId ,createTime ,category} = this.props
        console.log(this.props);
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
                            <time>{createTime}</time>
                        </a>
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
                <p>希桅是一个乐观主义差不多派，他的乐观也是差不多的。这个时候，他正在车上，去往一场面试。在车上他胡乱的想着一些不着边际的事情，完全没有为接下来的面试考虑。希桅虽然性格优柔寡断，但他有船到桥头自然直，以及抱佛脚不够优雅两个护盾驱使他表现的有那么点从容。</p>

                <a className="btn">阅读全文</a>

            </article>

        )
    }
}