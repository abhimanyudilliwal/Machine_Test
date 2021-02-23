import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Nabvar';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Page from './Component/Page';
import User from './Component/User';
import { Nav, Card } from 'react-bootstrap';
import img from './logo.svg';
import { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([])
  // const data = [1,2,3,4,5,6,7,8,9];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos ")
      .then(res => res.json())
      .then(
        (data) => {

          setData(data);
          console.log(data)

        },

        (error) => {
          setError(error);
          console.log('fail')
        }
      )
  }, [])

  return (
    <>
      <Nav bg="dark" variant="dark" className='nav' >
        <Nav.Item  >
          <Nav.Link href="#" className='item'>Layout</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="link-1" className='item'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item className='item'>
          <Nav.Link eventKey="link-2" className='item' >Services</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="disabled" className='item' >
           Contact
      </Nav.Link>
        </Nav.Item>
      </Nav>

      {data.map((item, index) => {
        if (index < 9) {
          return (

            <Card key={index} style={{ width: '18rem' }} className='card'>
              <Card.Img variant="top" src={item.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.url}
                </Card.Text>

              </Card.Body>
            </Card>
           
          )
        }
      })}
</>
  );
}


export default App;
