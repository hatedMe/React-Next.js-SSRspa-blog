



import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import Page from '../components/page';
import AddCount from '../components/AddCount'


import { initStore, startClock, addCount, serverRenderClock } from '../store/store3'
import withRedux from 'next-redux-wrapper'

class Tags extends Component {
    static async getInitialProps ({store, isServer }) {
        console.log( store.dispatch( startClock() ) );
        return { isServer, id:456 }
    }
    render() {
        console.log( this.props );
        return (
            <Page>
                456
            </Page>
        );
    }
}

//     initializeStore,
//     state => state,
//     dispatch => bindActionCreators( ActionCreactres ,dispatch

const mapDispatchToProps = (dispatch) => {
    return {
        addCount: bindActionCreators(addCount, dispatch),
        startClock: bindActionCreators(startClock, dispatch)
    }
}
  
export default withRedux(initStore, state => state, mapDispatchToProps)(Tags)



