

import React, { Component } from 'react';
import Link from 'next/link';
class ArticleFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="post-footer">
                <div className="post-tags">
                    {
                        this.props.labels.map( (e,i) =>{
                            return (
                                <Link key={i} href={e}>
                                    { e }
                                </Link>
                            )
                        })
                    }
                </div>
                <nav className="post-nav" style={ {"display" : "none"} }>
                    <a className="next" href="/2017/07/07/non-root-user-config-for-ssh-key-login/">
                        <span className="next-text nav-default"></span>
                        <span className="prev-text nav-mobile"></span>
                        <i className="iconfont icon-right"></i>
                    </a>
                </nav>
                <div className="comments" id="comments">
                </div>
            </footer>
        );
    }
}

export default ArticleFooter;