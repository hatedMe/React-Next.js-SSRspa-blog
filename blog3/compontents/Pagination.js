import React, { Component } from 'react';
import Link from 'next/link';


class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="pagination">
                <Link href="/">
                    <a className="prev">
                        <i className="iconfont icon-left"></i>
                        <span className="prev-text">Prev</span>
                    </a>
                </Link>
                <Link href="/about">
                    <a className="next">
                        <span className="next-text">Next</span>
                        <i className="iconfont icon-right"></i>
                    </a>
                </Link>
            </nav>
        );
    }
}

export default Pagination;