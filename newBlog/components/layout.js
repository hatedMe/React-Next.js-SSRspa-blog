

import React from 'react'
import { initializeStore }  from '../store/index';
import withRedux from 'next-redux-wrapper'
import Head from './head'
import Nav from '../components/nav';
import ContentFooter from '../components/contentFooter';




export default (Page) => withRedux(initializeStore)(
    class Layout extends React.Component {
        static async getInitialProps({isServer}) {
            return { isServer }
        }
        componentWillMount(){
            console.log(this.props);
        }
        render() {
            return (
                <div className="main-center">
                <Head />
                <Nav />
                <section className="main">
                    <Page {...this.props} />
                    <ContentFooter />
                </section>
                
            </div>
            )
        }
    }
)


