import React,{useEffect, useState} from 'react'
// Functional Component with life cycle hooks

function ContactUs(props){

    const[name,setName]= useState('deepak')
    const[age,setAge] = useState(29)

    useEffect(
        ()=>{
            console.warn('hook updated')
        }
        // This second parameter is used to notify on which state this method should be invoked
        // []
        //,[name]

    )

    function populateName(e){
        console.info("populate Name")
        setName(e.target.value)
    }

    let data = 'contact us component'
    return (
        <div>
            <h1>{data}</h1>
            <h1>{name},{age},{props.address}</h1>

            <label>Enter Name: </label>
            <input type="text" value={name} onChange={populateName}></input>
            <button onClick={()=>{setName(name)}}>Update name</button>
            {/* <button onClick={()=>{setAge(30)}}>Update Age</button> */}
        </div>
    )
}

export default ContactUs;