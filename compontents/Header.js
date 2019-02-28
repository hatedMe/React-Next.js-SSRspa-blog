import React, { Component } from 'react';
import Link from 'next/link';
class Header extends React.Component {
    render() {
        return (
            <header id="masthead">
                <div className="site-header-inner">
                    <h1 className="site-title">
                        <Link href="/">
                            <a className="logo">Jiang Min</a>
                        </Link>
                    </h1>
                    <nav id="nav-top">
                        <ul id="menu-top" className="nav-top-items">
                            <li className="menu-item">
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;