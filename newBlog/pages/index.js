import React from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import moment from '../lib/moment.min';

import Loyout from '../components/page';
import Item from '../components/article/item'

import { initializeStore } from '../store/index';
import * as ActionCreactres from '../actions/index'



class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }
    async componentWillMount(){
        await this.props.fetchPostsIfNeeded();
        console.log( this.props ,'.....');
        let { posts } = this.props.reducers;
        this.setState({
            list : posts
        })
    }
    
    render() {
        return (
            <Loyout>
                <div className="content article-list">
                    <ul>
                        {
                            this.state.list.map((e,i) => {
                                return <Item key={i} {...e} />
                            })
                        }
                    </ul>
                </div>
            </Loyout>
        )
    }
}


export default withRedux(
    initializeStore, 
    state => state, 
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(Index)









