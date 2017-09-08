import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import Article from '../components/article';

export default class Index2 extends React.Component {

    render() {
        return (
            <div className="main-center">
                <Head title="Home"/>
                <Nav/>
                <section className="main">
                    <header className="article-header">
                        <h1 data-itemprop="title">文章列表</h1>
                        <p className="text-muted">Total 1 articles</p>
                    </header>
                    <div className="content article-list">
                        {
                            [1,2,3,1].map((e,i)=>{
                                return <Article key={i} />
                            })
                        }   
                    </div>
                </section>
            </div>
        )
    }
}
