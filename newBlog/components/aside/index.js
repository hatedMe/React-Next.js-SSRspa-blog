

import React, { Component } from 'react';



class AsideIndex extends Component {
    render() {
        return (
            <aside className="sidebar sidebar-toc collapse in">
                <div className="slimScrollDiv">
                    <div className="slimContent">
                        <nav className="toc">
                            <h3>文章目录</h3>
                            <ol className="toc">
                                <li className="toc-item toc-level-1">
                                    <a className="toc-link">
                                        <span className="toc-number">1.1.</span>
                                        <span className="toc-text">外观</span>
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </aside>
        );
    }
}

export default AsideIndex;