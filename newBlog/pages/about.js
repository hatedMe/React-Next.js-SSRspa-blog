import React from 'react';
import Link from 'next/link';


import axios from '../fetch/http';
import Layout from '../components/layout'
import { initializeStore }  from '../store/index';
import withRedux from 'next-redux-wrapper'



class About extends React.Component {
    constructor(props){
        super(props)
    }
    static async getInitialProps({query, pathname}) {
        
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
                        
                        /*this.props.data.data.map((e, i) => {
                            return <Article key={i} {...e}/>
                        })*/
                    }
                </div>
            </Layout>
        )
    }
}

export default Layout(About);










