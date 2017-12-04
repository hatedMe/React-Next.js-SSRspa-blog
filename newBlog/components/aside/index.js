

import React, { Component } from 'react';


import ListItem from './listItem'


class AsideIndex extends Component {
    constructor(props){
        super(props)
        console.log(this.props ,'aside');
    }
    



    render() {
        const arr = this.props.title instanceof Array ? this.props.title : [];
        return (
            <aside className="sidebar article-toc collapse in">
                <div className="slimScrollDiv">
                    <div className="slimContent">
                        <nav className="toc">
                            <h3>文章目录</h3>
                            {
                                arr.map( (e,i) =>{
                                    return (
                                        e.childer ? 
                                        <ol className="toc" key={i}>
                                            <ListItem {...e} />
                                            <li>
                                                <ol className="toc">
                                                    {
                                                        e.childer.map( (e,i) => {
                                                            return (
                                                                <ListItem {...e} key={i} />
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </li>
                                        </ol> :
                                        <ol className="toc" key={i}>
                                            <ListItem {...e} />
                                        </ol> 
                                    )
                                })
                            }
                        </nav>
                    </div>
                </div>
            </aside>
        );
    }
}

export default AsideIndex;