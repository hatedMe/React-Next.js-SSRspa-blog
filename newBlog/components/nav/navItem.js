

import React from 'react';
import Router from 'next/router';





class NavItem extends React.Component {
    render() {
        return (
            <li className={`menu-item`}>
                <a href={this.props.url}>
                    <i className={`iconfont ${this.props.classNames}`}></i>
                    <span className="menu-title">{this.props.navName}</span>
                </a>
            </li>
        )
    }
}

export default NavItem;