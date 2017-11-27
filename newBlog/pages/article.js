import Link from 'next/link'
import React from 'react';
import Highlight from 'react-highlight'
import fetch from '../fetch/http';
import moment from 'moment';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Page from '../components/page';

import { initializeStore } from '../store/index';
import * as ActionCreactres from '../actions/index2'
import { fetchPosts } from '../actions/index'


class Article extends React.Component {
    static async getInitialProps({query, pathname}) {
        let rusllut = await fetch(`/api/article?id=${query.id}`);
        let res = await rusllut.data
        console.log(res);
        return {id: query.id, data: res.data}
    }

    render() {
        const {id, data} = this.props
        let iNow = data.createTime
        //iNow = new Date(iNow).toLocaleString();
        iNow = moment(iNow).format('YYYY-MM-DD HH:mm:ss');
        return (
            <Page>
                <div className="content">
                    {/*<Highlight className='language-name-of-snippet markdown-body' innerHTML={true}>
                        
        </Highlight>*/}
                    {
                        <Highlight className='language-name-of-snippet markdown-body' innerHTML={true}>
                        { data.content }
        </Highlight>
                        
                    }
                </div>
            </Page>
        )
    }
}


export default withRedux(
    initializeStore, 
    state => state, 
    dispatch => bindActionCreators( ActionCreactres ,dispatch )
)(Article)