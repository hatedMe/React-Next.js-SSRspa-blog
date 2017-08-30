import Link from 'next/link'
import Head from '../../components/head'
import Nav from '../../components/nav'


import React from 'react';


// const PostLink = (props) => (
//   <li>
//     <Link as={`/${props.id}`} href={`?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );


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
