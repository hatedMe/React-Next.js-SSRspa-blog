import Link from 'next/link'
import React from 'react';
import Com from '../components/com'

export default class Article extends React.Component {
    static async getInitialProps({query, pathname}) {
        let rusllut = await fetch(`http://localhost:4040/api/article?id=${query.id}`);
        let res = await rusllut.json();
        return {
            id : query.id,
            data : res.data
        }
    }

    render() {
        const { id ,data } = this.props
        let iNow = data.createTime
        iNow = new Date(iNow).toLocaleString()
        return (
            <Com infos="文章详情" title={ data.title }>
                <div className="content">
                    <div className="markdown-body" dangerouslySetInnerHTML={{__html :data.content }}>
                    </div>
                </div>
            </Com>
        )
    }
}


