import React, { Component } from 'react';
import Link from 'next/link';
import moment from '../lib/moment.min';

class PostTitle extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let { createTime, id  , title , labels }  = this.props;
        let iNow = moment(createTime).format('MMM Do');
        return (
            <div className="archive-post">
                <span className="archive-post-time">{ iNow }</span>
                <span className="archive-post-title">
                    <Link as={`/article/${id}`} href={ `/article?id=${id}`} >
                        <a className="archive-post-link">{ title }</a>
                    </Link>
                </span>
            </div>
        );
    }
}

export default PostTitle;

