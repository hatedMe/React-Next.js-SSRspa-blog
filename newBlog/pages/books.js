

import React from 'react';
import { bindActionCreators } from 'redux'
import Layout from '../components/layout2'
import Link from 'next/link';
import withRedux from 'next-redux-wrapper'
import { initStore, startClock, addCount, serverRenderClock } from '../store/index';
import * as ActionCreactres from '../actions/index2';
import { connect } from 'react-redux';
import 'isomorphic-fetch';

class Books extends React.Component {
    static async getInitialProps ({store, isServer }) {
        return { isServer, id:456 }
    }
    async componentWillMount(){
        await this.props.fetchPostsIfNeeded();
        console.log(this.props  ,'books');
    }
    add_todo(){
        
    }
    render() {
        console.log(this.props  ,'bookssss');
        // let isLoding = ()=> {
        //     if( (typeof this.props.IndexPosts !== "undefined" ) && ( Object.keys( this.props.IndexPosts ).length !=1 )){
        //         return false;
        //     }else{
        //         return true
        //     }
        // }

        return (
            <h1>
                <button onClick={ this.add_todo.bind(this)}>请求</button>
                <Link href='/links'><a>books</a></Link>
                <ul>
                    {
                        
                        /*this.props.IndexPosts.posts.map((e,i)=>{
                            return <li key={i}>{e.articleId}</li>
                        })*/
                    }
                </ul>
            </h1>
            
        );
    }
}



export default connect()(Layout(Books))