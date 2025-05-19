import React, { Component } from 'react'

export default class classcomponent extends Component {
    constructor(){
        super();


    }

    render(){
        // this.props.name = "xyz";
        // this.props.user.name = "xyz";
        console.log(this.props)
        return{
        <>
            <h1>Class component</h1>
            
        </>
        }
    }
}