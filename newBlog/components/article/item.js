




import Link from 'next/link'
import React from 'react';
// import moment from '/static/js/moment.min';
import moment from 'moment';


export default (state) => {
    let { title,articleId ,createTime ,category,summary } = state
    createTime = moment(createTime).format('YYYY-MM-DD HH:mm:ss');
    const basepath = '../article?id='
    return (
        <article className="article article-type-post">
            <div className="article-header">
                <h1>
                    <Link href={ basepath + articleId }><a className="article-title" >{title}</a></Link>
                    <a className="article-meta category">{category}</a>
                </h1>
            </div>
            <p className="article-meta">
                <span className="article-date">
                    <i className="fa fa-calendar-check-o"></i>
                    <Link href={ basepath + articleId }><a href={ basepath + articleId } className="article-date"></a></Link>
                    <time>{createTime}</time>
                </span>
            </p>
            <p className="article-summary">{ summary }</p>
            <p><Link href={ basepath + articleId }><a className="btn" href={ basepath + articleId }>阅读全文</a></Link></p>
        </article>
    )
}
