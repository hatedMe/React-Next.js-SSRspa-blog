

import React from 'react'
import { bindActionCreators } from 'redux';

import * as ActionCreactres from '../actions/index2';
import { initializeStore } from '../store/index';
import withRedux from 'next-redux-wrapper'


import Head from './head';
import Nav from '../components/nav';
import ContentFooter from '../components/contentFooter';


// export default (Page,getInit) => withRedux(
//     initializeStore,
//     state => state,
//     dispatch => bindActionCreators( ActionCreactres ,dispatch )
// )(
//     ABC(Page,getInit)
// )


// let ABC = function(Page , getInit){
//     return class Layout extends React.Component {
//         // static async getInitialProps({store,isServer}) {
//         //     return { isServer , id :56 }
//         // }
//         static async getInitialProps (){
//             getInit ()
//         }

//         render() {
//             return (
//                 <div className="main-center">
//                 <Head />
//                 <Nav />
//                 <section className="main">
//                     <Page {...this.props} />
//                 </section>
//                 <ContentFooter/>
//             </div>
//             )
//         }
//     }
// } 




export default Page => withRedux(
    initializeStore,
    state => state,
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(class Layout extends React.Component {
    static async getInitialProps(ctx) {
        console.log( ctx ,'ctx' );
        var pageInitialProps = {}
        Page.getInitialProps && (pageInitialProps = await Page.getInitialProps(ctx))
        console.log( pageInitialProps ,'layout123' );
        return pageInitialProps
    }
    render() {
        console.log( this.props ,'layout 456 ');
        return (
            <div className="main-center">
            <Head />
            <Nav />
            <section className="main">
               <Page {...this.props} />
            </section>
            <ContentFooter/>
        </div>
        )
    }
})

