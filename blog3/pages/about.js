import React, { Component } from 'react';
import Header from '../compontents/Header.js';
import Pagination from '../compontents/Pagination.js';
import Footer from '../compontents/Footer.js';


import '../styles/style.less';

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page">
                <Header />
                <div id="content">
                    <div id="primary">
                        <article className="post"></article>
                        <div className="post-content">
                            <p>gdfhdgfh</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;