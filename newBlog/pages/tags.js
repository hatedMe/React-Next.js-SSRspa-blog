



import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import { initializeStore } from '../store/index';
import * as ActionCreactres from '../actions/index2'
import { fetchPosts } from '../actions/index'

import Page from '../components/page';
import AddCount from '../components/AddCount'
import Item from '../components/article/item'




class Tags extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }
    static async getInitialProps ({store, isServer }) {
        return { isServer }
    }
    async componentWillMount(){
        await this.props.fetchPostsIfNeeded();
        let { posts } = this.props.IndexPosts;
        this.setState({
            list : posts
        })
    }
    render() {
        return (
            <Page>
                <div className="content">
                    <ul>
                        {
                            this.state.list.map((e,i) => {
                                return <Item key={i} {...e} />
                            })
                        }
                    </ul>
                </div>
            </Page>
        );
    }
}




export default withRedux(
    initializeStore, 
    state => state, 
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(Tags)



