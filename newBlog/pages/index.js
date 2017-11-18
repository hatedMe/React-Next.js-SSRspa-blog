import React from 'react';
import Link from 'next/link';


import axios from '../fetch/http';
import moment from 'moment';
import Highlight from 'react-highlight'
import Layout from '../components/layout'
import Article from '../components/article'




class Index extends React.Component {
    static async getInitialProps({query, pathname}) {
        let res = await axios.get(`/api/startarticle`);
        return {id: query.id, data: res.data.data}
    }
    render() {
        return (
            <Layout>
                <div className="content">
                { console.log( this.props.data) }
                    {
                        this.props.data.map((e, i) => {
                            return <Article key={i} {...e}/>
                        })
                    }
                </div>
            </Layout>
        )
    }
}

export default Index;










