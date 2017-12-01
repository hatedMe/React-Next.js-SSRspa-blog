

import React, { Component } from 'react';



class AsideIndex extends Component {
    constructor(props){
        super(props)
        console.log(this.props ,'aside');
    }
    



    render() {
        const arr = this.props.title instanceof Array ? this.props.title : [];
        console.log( arr );
        return (
            <aside className="sidebar sidebar-toc collapse in">
                <div className="slimScrollDiv">
                    <div className="slimContent">
                        <nav className="toc">
                            <h3>文章目录</h3>
                            <ol className="toc">
                                
                                {
                                    arr.map( (e,i) => {
                                        return (
                                            <li className="toc-item toc-level-1" key={i}>
                                                <a className="toc-link">
                                                    <span className="toc-number"></span>
                                                    <span className="toc-text">{e.html}</span>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </nav>
                    </div>
                </div>
            </aside>
        );
    }
}

export default AsideIndex;