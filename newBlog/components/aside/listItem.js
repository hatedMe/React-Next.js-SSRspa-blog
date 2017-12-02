

import React, { Component } from 'react'


class ListItem extends Component {
    render() {
        return (
            <li className="toc-item toc-level-1" key={this.props.index}>
                <a className="toc-link">
                    <span className="toc-number"></span>
                    <span className="toc-text">{this.props.html}</span>
                </a>
            </li>
        )
    }
}

export default ListItem