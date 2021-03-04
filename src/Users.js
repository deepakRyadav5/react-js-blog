import React,{useState, useEffect,Fragment} from 'react'
// import {Button} from 'react-bootstrap'
import {Table} from 'react-bootstrap'

function Users(){

    const [users,setUsers] = useState(
        [
            {name : 'deepak', age:'29', address: 'mumbai'},
            {name:'akhilesh', age:29},
            {name:'amar', age:35},
            {name:'vijay', age:32}
        ]
    )

    // const users =
    //     [
    //         {name : 'deepak', age:'29', address: 'mumbaiii'},
    //         {name:'akhilesh', age:29},
    //         {name:'amar', age:35},
    //         {name:'vijay', age:32}
    //     ]
    

    return(
        
        <Fragment>
            <h3>Users Listing Page</h3>
            {/* {
               
                    users.map( ( user, i ) => 
                    <div key={i}>{user.name},{user.age},{user.address}</div>
                )
                
            } */}

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
      {
    users.map( (user,index)=><tr key={index}>
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.address}</td>
    </tr>)
}
  </tbody>
</Table>

{/* <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button> */}


        </Fragment>
    )
}

export default Users;