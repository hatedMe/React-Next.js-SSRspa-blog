


import Head from './head'
import React from 'react'
import Nav from '../components/nav';
import ContentFooter from '../components/contentFooter';



class Layout extends React.Component {
    render() {
        return (
            <div className="main-center">
                <Head />
                <Nav />
                <section className="main">
                    {this.props.children}
                </section>
                <ContentFooter/>
            </div>
        )
    }
}

export default Layout;
