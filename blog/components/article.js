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
        const { content,articleId} = this.props
        const basepath = '../article?id='
        return (
            <article className="article article-type-post">
                <div className="article-header">
                    <h1>
                        <a
                            className="article-title"
                            href={ basepath + articleId }>{content}</a>
                    </h1>
                </div>
                <p className="article-meta">
                    <span className="article-date">
                        <i className="fa fa-calendar-check-o"></i>
                        <a
                            href="/2017/08/16/hexo-blogs-comonly-used-plugins-and-usage.html"
                            className="article-date">
                            <time>8月 16</time>
                        </a>
                    </span>
                    <span className="article-tag">
                        <i className="fa fa-tag"></i>
                        <a className="article-tag-link" href="/tags/Hexo/">Hexo</a>
                    </span>
                    <span className="post-comment">
                        <i className="fa fa-commenting-o"></i>
                        <a href="" className="article-comment-link">评论</a>
                    </span>
                    <span className="post-wordcount hidden-xs">字数统计: 915(字)</span>
                    <span className="post-readcount hidden-xs">阅读时长: 4(分)</span>
                </p>
            </article>

        )
    }
}