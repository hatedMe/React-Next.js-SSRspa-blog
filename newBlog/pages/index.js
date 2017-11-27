import React from 'react';
import Link from 'next/link';
import { initializeStore , increment ,decrement }  from '../store/index';
import { initStore }  from '../store/index2';
import { fetchPosts } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect , Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'

import axios from '../fetch/http';
import moment from 'moment';

import Highlight from 'react-highlight'
import Layout from '../components/layout'
import Article from '../components/article'
import { EINPROGRESS } from 'constants';





class Index extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data : []
        }
    }
    async componentWillMount(){
        // let res = await axios.get(`/api/startarticle`);
        // console.log('index',res);
        // this.setState({
        //     data : res.data.data
        // })
        // console.log( this.state);
        

        //this.props.dispatch(fetchPosts('hi'))
        //const { dispatch } = this.props;
        //const res =  dispatch( fetchPosts('hi') )
        console.log( this.props );
        

    }
    
    render() {
        return (
            <div className="content">
                {
                    this.state.data.map((e, i) => {
                        return <Article key={i} {...e}/>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        "item" :state.item,
        "receivedAt":state.receivedAt
    }
  }



export default (Layout(Index));









