import React from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import { initializeStore } from '../store/index';
import * as ActionCreactres from '../actions/index2'

import moment from '/static/js/moment.min';
import Page from '../components/page';



class Index extends React.Component {
    constructor(props){
        super(props)
    }
    async componentWillMount(){
        
    }
    
    render() {
        return (
            <Page>
                <div className="content">
                    456
                </div>
            </Page>
        )
    }
}


export default withRedux(
    initializeStore, 
    state => state, 
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(Index)









