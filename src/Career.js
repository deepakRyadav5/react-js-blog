import React from 'react'

class Career extends React.Component{

    constructor(){
        super();
        this.state= {

        }
        console.warn('Career constructor called')
    }

    componentDidMount(){
        console.warn('Career component mounted')
    }

    render(){
        return(
            <div>
                <h1>Career page</h1>
                <h3>{this.props.address}</h3>
            </div>
        )
    }

    

}

export default Career;