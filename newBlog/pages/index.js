import React from 'react';
import Link from 'next/link';
import { initializeStore }  from '../store/index';
import {bindActionCreators} from 'redux'
import { connect , Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'

import axios from '../fetch/http';
import moment from 'moment';

import Highlight from 'react-highlight'
import Layout from '../components/layout'
import Article from '../components/article'









class Index extends React.Component {
    constructor(props){
        super(props)
    }
    static async getInitialProps({query, pathname}) {
        //let res = await axios.get(`/api/startarticle`);
        console.log( query, pathname );
        return { id: query.id }
    }
    add_todo(){
        
        const { dispatch } = this.props;
        dispatch({ type : 'INCREMENT'});
        //this.props.addTodo()
    }
    inc_todo(){
        const { dispatch } = this.props;
        dispatch({ type : 'DECREMENT'});
    }
    render() {
        return (
            <Layout>
                <div className="content">
                    <button onClick={ this.add_todo.bind(this)}>增加</button>
                    <button onClick={ this.inc_todo.bind(this)}>减少</button>
                    {
                        console.log( this.props )
                        
                        /*this.props.data.data.map((e, i) => {
                            return <Article key={i} {...e}/>
                        })*/
                    }
                </div>
            </Layout>
        )
    }
}



export default withRedux(initializeStore)(Index);










