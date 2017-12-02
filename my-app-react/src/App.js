import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {

    componentDidMount() {
        
        axios.get(`/api/startarticle`).then(res=>{
           console.log( res );
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div className="App">
                hello word
            </div>
        );
    }
}

export default App;
