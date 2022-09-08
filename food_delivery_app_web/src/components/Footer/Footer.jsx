import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import '../../styles/Footer.css'

import logo from '../../assets/images/res-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='logo footer__logo text-start'>
              <img src={logo} alt="logo"/>
              <h5>Tasty Treat</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolorem non minus repellendus veniam, adipisci esse? 
              </p>

              <ul className='social_links align-items-center'>
                <li>
                  <Link to="https://www.facebook.com/" className='social_link-item'><i class="ri-facebook-fill social__icon"></i></Link>
                  <Link to="https://www.instagram.com/" className='social_link-item'><i class="ri-instagram-line social__icon"></i></Link>
                  <Link to="https://www.youtube.com/" className='social_link-item'><i class="ri-youtube-fill social__icon"></i></Link>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00AM - 11:00PM</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
              <ListGroup className='delivery__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                    <p>
                      <i className="ri-map-2-line contact__icon"></i>
                      Location: Ho Chi Minh City, Viet Nam.
                    </p>
                  </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>
                    <i className="ri-phone-line contact__icon"></i>
                    Phone: +8499999999
                    </span>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>
                    <i className="ri-mail-line contact__icon"></i>
                    Email: example@email.com</span>
                </ListGroupItem>
              </ListGroup>
          </Col>
          
          <Col lg='3' md='4' sm='6'>
           <h5 className='footer__title'>Newsletter</h5>
           <p>Subscribe our newsletter</p>
           <div className='newsletter'>
              <input type="email" placeholder='Enter your email!' />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
           </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer