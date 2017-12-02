import Link from 'next/link'
import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';

import fetch from '../fetch/http';
//import moment from '/static/js/moment.min';
import moment from 'moment'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Loyout from '../components/layout';
import ArticleFoot from '../components/article/foot'

import Head from '../components/head';
import Nav from '../components/nav';
import ContentFooter from '../components/contentFooter';
import AsideIndex from '../components/aside/index'

import { initializeStore } from '../store/index';
import * as ActionCreactres from '../actions/article'
import ItemHead from '../components/article/head'


class Article extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : '',
            title : ''
        }
    }
    static async getInitialProps({query, pathname}) {
        return { id: query.id }
    }
    componentDidUpdate(){
        this.highlightCode();
        //this.setTitle();
    }
    async componentDidMount(){ 
        //if( !this.props.id ) return;
        await this.props.fetchPostsItem( this.props.id ); // 48intcrj8335

        this.highlightCode();

        this.setState({
            data : this.props.articleReducers.item.filter( e => this.props.id == e.articleId)[0]
        })
        console.log(this.state.data);
        this.setTitle();
    }

    highlightCode(){
        const domNode = ReactDOM.findDOMNode(this);
        const nodes = domNode.querySelectorAll('pre code');
        for (let i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }

       


        


        ///console.log( selectHeaderDom('.markdown-body') ); 
        //const arr = 
        
        // this.setState({
        //     title : arr
        // })
        

    }


    setTitle (){
        const domNode = ReactDOM.findDOMNode(this);
        function selectHeaderDom( parent ){
            let mlarr = [];
            let msarr = [];
            let tmp = 0;
            Array.from( domNode.querySelectorAll(`${parent} > *`) )
                .filter( ele => /^h\d$/i.test( ele.nodeName.toLowerCase() ) )
                .forEach( (ele,index,arr) => {
                    if( ele.nodeName == arr[0].nodeName ){
                        tmp++;
                        msarr = [];
                        mlarr.push({
                            name : ele.nodeName.toLowerCase(),
                            html : ele.innerHTML,
                            offsetTop : ''
                        })
                    }else{
                        msarr.push({
                            name : ele.nodeName.toLowerCase(),
                            html : ele.innerHTML,
                            offsetTop : ''
                        });
                        Object.assign( mlarr[tmp-1] , {  childer :  msarr } );
                    }
                })
            return mlarr;
        }   
        
        let title = selectHeaderDom('.markdown-body')
        console.log( title );  
        this.setState({
            title : title
        })
    }


    render() {
        const { id, data } = this.state.data
        let iNow = moment(this.state.data.createTime).format('YYYY-MM-DD HH:mm:ss');
        return (
            <Loyout>

                <Head />
                <Nav />
                <section className="main">
                    <div className="content">
                        <ItemHead {...this.state.data } />
                        {<div className="language-name-of-snippet markdown-body" dangerouslySetInnerHTML={{__html : this.state.data.content}}></div>}
                        <ArticleFoot />
                    </div>
                    <ContentFooter/>
                </section>
                
                <AsideIndex title={ this.state.title } />

                
            </Loyout>
        )
    }
}


export default withRedux(
    initializeStore, 
    state => state, 
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(Article)