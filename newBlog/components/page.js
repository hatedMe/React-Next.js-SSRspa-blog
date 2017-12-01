


import React, { Component } from 'react';
import { connect } from 'react-redux';

import Head from './head';
import Nav from '../components/nav';
import ContentFooter from '../components/contentFooter';

import AsideIndex from '../components/aside/index'



class Page extends Component {
    render() {
        return (
            <div className="main-center">
                <Head />
                <Nav />
                <section className="main">
                    { this.props.children }
                    <ContentFooter/>
                </section>
                <AsideIndex />
            </div>
        );
    }
}

export default connect(state => state)(Page);

