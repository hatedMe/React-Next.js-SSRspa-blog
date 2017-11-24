

import React from 'react';
import { bindActionCreators } from 'redux'
import Layout from '../components/layout2'
import Link from 'next/link';
import withRedux from 'next-redux-wrapper'
import { initStore, startClock, addCount, serverRenderClock } from '../store/index';
import { connect } from 'react-redux';


class Links extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log(this.props ,'books');
    }
    async add_todo(){
        await this.props.fetchPostsIfNeeded();
        console.log( this.props );
    }
    render() {
       
        return (
            
            <h1>
                <button onClick={ this.add_todo.bind(this)}>请求</button>
                <Link href='/books'><a>books</a></Link>
                <ul>
                    { 
                        
                    }
                </ul>
            </h1>
            
        );
    }
}

let setProps = {
    id : 456
}


export default Layout(Links,setProps)