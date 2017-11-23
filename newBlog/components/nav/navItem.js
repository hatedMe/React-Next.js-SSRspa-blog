

import React from 'react';
import Router from 'next/router';
import Link from 'next/link'




class NavItem extends React.Component {
    render() {
        return (
            <li className={`menu-item`}>
                <Link href={this.props.url}>
                    <a>
                        <i className={`iconfont ${this.props.classNames}`}></i>
                        <span className="menu-title">{this.props.navName}</span>
                    </a>
                </Link>
            </li>
        )
    }
}

export default NavItem;