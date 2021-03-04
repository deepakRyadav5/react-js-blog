import React from 'react'
// class component with life-cycle-methods
class AboutUs extends React.Component{

    constructor(){
        super();
        // console.warn('constructor is called')
        this.state={
            name: "deepak",
            age: '29'
        }
    }

    componentDidMount(){
        console.warn('component is mounted')
    }

    componentDidUpdate(){
        console.warn('component updated')
    }
    
    render(){
        let data = 'about us component'
        return (
            <div>
                {/* <h1>About Us Component</h1> */}
                <h1>{data}</h1>
                <h1>Hello {this.state.name}, your age is {this.state.age}</h1>

                 {/* updating state  */}
                <input type="text" placeholder={this.state.name}></input>
                <button onClick= { () => {this.setState({name:'Deepak Yadav'})}}> Update state</button>

            </div>
        )
    }
}

export default AboutUs;

// constructor(){
//     // before creation of component
// }

// componentDidMount(){
//     // at creation component
// }

// componentWillunmount(){
//     // at destruction component
// }

// componentDidUpdate(){
//     // at update component
// }