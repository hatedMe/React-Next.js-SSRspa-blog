import React from 'react';
import Link from 'next/link';


import axios from '../fetch/http';
import Layout from '../components/layout'




class Index extends React.Component {
    static async getInitialProps({query, pathname}) {
        return {id: query, list:[1,2,3]}
    }
    render() {
        return (
            <Layout>
                <div className="content article-list">
                    about
                </div>
            </Layout>
        )
    }
}

export default Index;










