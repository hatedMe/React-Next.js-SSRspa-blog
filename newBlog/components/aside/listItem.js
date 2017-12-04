

import React, { Component } from 'react'


class ListItem extends Component {


    changeHeight(){
        let scrollWrapHeight = document.body.clientHeight;
        let scrollViewH = document.body.offsetHeight;
        let scrollBarH = document.documentElement.scrollTop;

        let scrollBtnH = scrollWrapHeight * scrollBarH / scrollViewH;

        //console.log( scrollBarH ,'sdsafdhgf' );
        let offsetTop = this.props.offsetTop;
        document.documentElement.scrollTop = offsetTop
    }

    render() {
        return (
            <li className="toc-item toc-level-1" onClick={this.changeHeight.bind(this)}>
                <a className="toc-link">
                    <span className="toc-number"></span>
                    <span className="toc-text">{this.props.html}</span>
                </a>
            </li>
        )
    }
}

export default ListItem