

import React from 'react';
import { bindActionCreators } from 'redux'
import Layout from '../components/layout2'
import Link from 'next/link';
import withRedux from 'next-redux-wrapper'
import { initStore, startClock, addCount, serverRenderClock } from '../store/index2';
import { connect } from 'react-redux';

class Books extends React.Component {
    static getInitialProps ({ isServer }) {
        return { isServer }
      }
    componentWillMount(){
        this.props.addCount()
        console.log(this.props ,'books');
    }
    add_todo(){
        const { dispatch } = this.props;
        dispatch({ type : 'INCREMENT'});
    }
    render() {
        return (
            
            <h1>
                <button onClick={ this.add_todo.bind(this)}>增加</button>
                <Link href='/links'><a>books</a></Link>
            </h1>
            
        );
    }
}




export default Layout(Books)