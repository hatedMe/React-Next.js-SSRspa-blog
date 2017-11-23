

import React from 'react'
import { bindActionCreators } from 'redux';
import { initializeStore }  from '../store/index';
import * as ActionCreactres from '../store/index2';
import { initStore } from '../store/index2';
import withRedux from 'next-redux-wrapper'


import Head from './head';
import Nav from '../components/nav';
import ContentFooter from '../components/contentFooter';


export default Page => withRedux(
    initStore,
    state => state,
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(
    class Layout extends React.Component {
        static async getInitialProps({store,isServer}) {
            return { isServer }
        }
        render() {
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
    }
)

