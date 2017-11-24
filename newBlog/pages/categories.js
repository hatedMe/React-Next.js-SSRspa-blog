



import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import Page from '../components/page';
import AddCount from '../components/AddCount'


import { initStore, startClock, addCount, serverRenderClock } from '../store/store3'
import withRedux from 'next-redux-wrapper'

class Categories extends Component {
    render() {
        console.log( this.props );
        return (
            <Page>
                <AddCount />
            </Page>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addCount: bindActionCreators(addCount, dispatch),
      startClock: bindActionCreators(startClock, dispatch)
    }
  }
  
export default withRedux(initStore, null, mapDispatchToProps)(Categories)



