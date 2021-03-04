import React from 'react'
import {Form,Col,Button} from 'react-bootstrap'
import { useState } from 'react';


function CreateUsers(){

    const [name,setName]= useState("")
    const [age,setAge]= useState("")
    const [address,setAddress]= useState("")

    function makeUser(e){

        let name,age,address;
        
        setName(e.target.value)
    }

    return(
        <>
            <h1>Make a New User</h1>
            <Form>
  <Form.Group>
    <Form.Label>Enter Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    <Form.Label>Email Age</Form.Label>
    <Form.Control type="text" placeholder="Enter Age" onChange={(e)=>{SVGAnimatedAngle(e.target.value)}}/>
  </Form.Group>

  <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Address" onChange={(e)=>{setAddress(e.target.value)}} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={makeUser}>
    Submit
  </Button>
</Form>
        </>
    )

}

export default CreateUsers;