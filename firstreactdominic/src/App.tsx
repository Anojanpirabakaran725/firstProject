import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Carousel fade>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://i.redd.it/ex0t76i89s821.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>Sebastian Vettel</h3>
    <p>Spa</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2013/10/28/1331617815201_2/sebastian-vettel-world-champion-formula-1-salutes-rb9"
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>Sebastian Vettel</h3>
    <p>4th times Champion</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1422x802:1424x800)/origin-imgresizer.eurosport.com/2018/04/14/2313123-48161230-2560-1440.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Sebastian Vettel</h3>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
  </div>
  );
}

export default App;
