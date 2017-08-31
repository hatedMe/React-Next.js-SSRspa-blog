import Link from 'next/link'
import Head from '../../components/head'
import Nav from '../../components/nav'


import React from 'react';


export default class extends React.Component {
  static async getInitialProps ({query ,pathname}) {

    return {
      id : query.id,
      pathname : pathname
    }
    
  }

  render() {
    return (
      <div className="main">
        <div className="hello">
            { this.props.id}
        </div>
      </div>
    )
  }
}
