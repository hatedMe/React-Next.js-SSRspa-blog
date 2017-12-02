

import React, { Component } from 'react';


import ListItem from './listItem'


class AsideIndex extends Component {
    constructor(props){
        super(props)
        console.log(this.props ,'aside');
    }
    



    render() {
        const arr = this.props.title instanceof Array ? this.props.title : [];
        console.log( arr , 'sdsfsd');
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
                                            <ol className="toc">
                                                <ListItem {...e} {...i} />
                                                <li>
                                                    <ol className="toc">
                                                        {
                                                            e.childer.map( (ele,index) => {
                                                                return (
                                                                    <ListItem {...ele} {...index} />
                                                                )
                                                            })
                                                        }
                                                    </ol>
                                                </li>
                                            </ol> :
                                            <ol className="toc">
                                                <ListItem {...e} {...i} />
                                            </ol>
                                                // e.map( (ele ,index) => {
                                                //     <li className="toc-item toc-level-1" key={i}>
                                                        
                                                //     </li>
                                                // })

                                            
                                        
                                    )
                                })
                            }

                            
                                
                                {/*
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
                                */}
                            
                        </nav>
                    </div>
                </div>
            </aside>
        );
    }
}

export default AsideIndex;