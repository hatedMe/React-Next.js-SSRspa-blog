import React from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import moment from '../lib/moment.min';

import Loyout from '../components/layout';
import Item from '../components/article/item'

import { initializeStore } from '../store/index';
import * as ActionCreactres from '../actions/index'



class Archive extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }
    async componentWillMount(){
       
    }
    
    render() {
        return (
            <Loyout>
                <div className="content article-list archive">
                    <div className="collection-title" >
                        <h2 className="archive-year">2017</h2>
                    </div>
                    
                </div>
            </Loyout>
        )
    }
}


export default withRedux(
    initializeStore, 
    state => state, 
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(Archive)









