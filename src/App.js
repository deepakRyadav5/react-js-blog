import logo from './logo.svg';
import './App.css';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Career from './Career'
import { useEffect, useState } from 'react';
import Users from './Users'
import CreateUsers from './CreateUsers'
import Home from './Home'
import { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [address, setAddress] = useState('Mumbai')

  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand ><Link to="/">BLOG</Link></Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                <Nav.Link ><Link to="/about-us">About Us</Link></Nav.Link>
                <Nav.Link ><Link to="/contact-us">Contact Us</Link></Nav.Link>
                <Nav.Link ><Link to="/contact-us"><Link to="/career">Work with us</Link></Link></Nav.Link>
                <Nav.Link ><Link to="/contact-us"><Link to="/list-users">Users</Link></Link></Nav.Link>
                <Nav.Link ><Link to="/contact-us"><Link to="/create-user">Create User</Link></Link></Nav.Link>
              </Nav>
            </Navbar>
            <Switch>
              <Route path="/create-user">
                <CreateUsers />
              </Route>
              <Route path="/list-users">
                <Users />
              </Route>
              <Route path="/about-us">
                <AboutUs />
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
              <Route path="/career">
                <Career />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
