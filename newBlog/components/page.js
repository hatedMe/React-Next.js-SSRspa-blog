


import React, { Component } from 'react';
import { connect } from 'react-redux';

import Head from './head';
import Nav from '../components/nav';
import ContentFooter from '../components/contentFooter';




class Page extends Component {
    render() {
        return (
            <div className="main-center">
                <Head />
                <Nav />
                <section className="main">
                    { this.props.children }
                </section>
                <ContentFooter/>
            </div>
        );
    }
}

export default connect(state => state)(Page);

