import Link from 'next/link'
import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';
//import Highlight from '../node_modules/react-highlight/src/index'
import fetch from '../fetch/http';
import moment from '/static/js/moment.min';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Page from '../components/page';
import ArticleFoot from '../components/article/foot'

import { initializeStore } from '../store/index';
import * as ActionCreactres from '../actions/article'


class Article extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : ''
        }
    }
    static async getInitialProps({query, pathname}) {
        return { id: query.id }
    }
    componentDidUpdate(){
        this.highlightCode();
    }
    async componentDidMount(){
        //if( !this.props.id ) return;
        await this.props.fetchPostsItem( this.props.id ); // 48intcrj8335

        this.highlightCode();

        this.setState({
            data : this.props.articleReducers.item.filter( e => this.props.id == e.articleId)[0]
        })
        console.log(this.state.data);
    }

    highlightCode(){
        const domNode = ReactDOM.findDOMNode(this);
        const nodes = domNode.querySelectorAll('pre code');
        for (let i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }
    }

    add_todo(){
        this.props.fetchPostsItem( '48intcrj8335' )
    }

    render() {
        const { id, data } = typeof this.state.data
        let iNow = moment(this.state.data.createTime).format('YYYY-MM-DD HH:mm:ss');
        return (
            <Page>
                <div className="content">
                    {<div className="language-name-of-snippet markdown-body" dangerouslySetInnerHTML={{__html : this.state.data.content}}></div>}
                    <button onClick={ this.add_todo.bind(this) }>按钮</button>
                    <ArticleFoot />
                </div>
            </Page>
        )
    }
}


export default withRedux(
    initializeStore, 
    state => state, 
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(Article)