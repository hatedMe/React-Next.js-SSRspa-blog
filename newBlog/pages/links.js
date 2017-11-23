

import React from 'react';
import Layout from '../components/layout2'
import Link from 'next/link';



// const Books = props =>{
//     console.log(props ,'books');
//     return (
//         <h1>
//             <Link route='post'></Link>
//         </h1>
//     )
// }

class Links extends React.Component {
    componentWillMount(){
        console.log(this.props ,'links');
    }
    add_todo(){
        const { dispatch } = this.props;
        dispatch({ type : 'INCREMENT'});
    }
    render() {
        return (
            <h1>
                <button onClick={ this.add_todo.bind(this)}>增加</button>
                <Link href='/books'><a>Links</a></Link>
            </h1>
        );
    }
}

export default Layout(Links)