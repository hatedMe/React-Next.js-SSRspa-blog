import React from 'react'
import Link from 'next/link';
import 'isomorphic-fetch';

import PostTile from '../compontents/archive-post-title.js';
import Header from '../compontents/Header.js';
import Pagination from '../compontents/Pagination.js';
import Footer from '../compontents/Footer.js';

//import 'normalize.css';
import '../styles/style.less';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps({query, pathname}) {
        let rusllut = await fetch(`http://api.djui.cn/front/api/user/find?pageNum=20`);
        let res = await rusllut.json();
        return {
            data : res.data
        }
    }
    render() {
        let { lists } = this.props.data;
        return (
            <div className="page">
                <Header />
                <div id="content">
                    <div id="primary">
                        <section id="archive" className="archive">
                            <div className="main">
                                <header className="article-header">
                                    <h1></h1>
                                </header>
                                <div className="content article-list archive">
                                    <div className="collection-title">
                                        <h2 className="archive-year">2017</h2>
                                    </div>
                                    {
                                        lists.map((e,i)=>{
                                            console.log( e,i );
                                            return <PostTile key={i} {...e} />
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    </div>

                    <Pagination />
                </div>
                <Footer />
            </div>
            
        );
    }
}

export default App;



