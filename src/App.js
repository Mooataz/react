
import './App.css';
import React from 'react';
import Fullename from './Fullename'
import Address from './Address'
import Profilephoto from './Profilephoto';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      
    
    


      <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header><Fullename /></Accordion.Header>
    <Accordion.Body>
    <Address />
    <Profilephoto />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Testing</Accordion.Header>
    <Accordion.Body>
      testing react bootstrap
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  );
}

export default App;
