


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../compontents/Header.js';
import Pagination from '../compontents/Pagination.js';
import Footer from '../compontents/Footer.js';
import ArticleFooter from '../compontents/articleFooter.js';
import 'isomorphic-fetch';
import moment from '../lib/moment.min';
import hljs from 'highlight.js';


class Article extends React.Component {
    constructor(props){
        super(props);
    }    
    static async getInitialProps({query, pathname}) {

        let rusllut = await fetch(`http://api.djui.cn/front/api/user/findid/${ query.id }`);
        let res = await rusllut.json();

        return { data: res.data }
    }

    componentDidUpdate(){
        this.highlightCode();
    }

    async componentDidMount(){
        this.highlightCode();
    }

    highlightCode(){
        const domNode = ReactDOM.findDOMNode(this);
        const nodes = domNode.querySelectorAll('pre code');
        for (let i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }
    }

    render() {
        let { content ,title , createTime , category , labels } = this.props.data;
        let iNow = moment(createTime).format('YYYY-MM-DD');
        // console.log( this.props.data );
        return (
            <div className="page">
                <Header />
                <div id="content">
                    <div id="primary">
                        <article className="post">
                            <header className="post-header">
                                <h1 className="post-title">{ title }</h1>
                                <time className="post-time">{ iNow }</time>
                            </header>
                            <div className="post-content">
                                {
                                    <div className="language-name-of-snippet markdown-body" dangerouslySetInnerHTML={{__html : content}}></div>
                                }
                            </div>
                            <ArticleFooter labels={labels} />
                        </article>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Article;
