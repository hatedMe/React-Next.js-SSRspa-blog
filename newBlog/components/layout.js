


import React, { Component } from 'react';
import { connect } from 'react-redux';





class Loyout extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log( this.props , 'layout' );
    }
    render() {
        return (
            <div className="main-center">
                { this.props.children }
                
            </div>
        );
    }
}

export default connect(state => state)(Loyout);

