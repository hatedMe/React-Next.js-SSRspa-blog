import Link from 'next/link'
import React from 'react';

export default class Article extends React.Component {
    static async getInitialProps({query, pathname}) {

        return {
            id : query.id
        }

    }

    render() {
        //const { id } = this.props
        return (
            <div>{ this.props.id }</div>
        )
    }
}