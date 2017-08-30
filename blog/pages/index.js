import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import React from 'react';
import fetch from 'isomorphic-unfetch';


//require('../static/app.css') 


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            props:this.props
        }
    }

    
    async componentWillMount() {
        
        this.setState({
            num: 5
        })
    }

    render() {
        return (
            <div>
                <Head title="Home"/>
                <Nav/> 
                <div className="hero">
                    <h1 className="title">Welcome to Next!!!!</h1>
                    <p className="description">To get started, edit
                        <code>pages/index.js</code>
                        and save to reload.</p>
                    <div className="row">
                        <Link href="./post?id=o" as="about/o">
                            <a>o</a>
                        </Link>
                        <Link href="./post?id=p" as="about/p">
                            <a>p</a>
                        </Link>
                        <Link href="./post?id=q" as="about/q">
                            <a>q</a>
                        </Link>
                    </div>
                    <ul>
                        {
                            console.log(this.state.num ,this.state.props.data)
                            
                            // this.state.data.map((e,i)=>{
                            //     return <li key={i}> {e.score} </li>
                            // })
                        }
                    </ul>
                </div>
                <style jsx>
                    {
                        ` .hero {
                            width: 100%;
                            color: #333;
                        }
                        .title {
                            margin: 0;
                            width: 100%;
                            padding-top: 80px;
                            line-height: 1.15;
                            font-size: 48px;
                        }
                        .description,
                        .title {
                            text-align: center;
                        }
                        .row {
                            max-width: 880px;
                            margin: 80px auto 40px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                        }
                        .card {
                            padding: 18px 18px 24px;
                            width: 220px;
                            text-align: left;
                            text-decoration: none;
                            color: #434343;
                            border: 1px solid #9B9B9B;
                        }
                        .card:hover {
                            border-color: #067df7;
                        }
                        .card h3 {
                            margin: 0;
                            color: #067df7;
                            font-size: 18px;
                        }
                        .card p {
                            margin: 0;
                            padding: 12px 0 0;
                            font-size: 13px;
                            color: #333;
                        }`
                    }
</style>
            </div>
        )
    }
}


App.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch('http://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return { id ,data }
}

