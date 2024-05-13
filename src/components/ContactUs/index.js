import {FaWhatsappSquare, FaTelegram} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
// import UserForm from '../UserForm'
import './index.css'

const ContactUs = () => {

    return (
      <>
      <Header />
        <div className="contact-us-bg-container">
          <div className="contact-us-card">
          <div className="contact-us-image-container">
            <img src="https://res.cloudinary.com/sree4441/image/upload/v1715538033/_5f37c3e9-0b37-4d55-98c9-8288bb255e5b-removebg-preview_yxvqdo.png" alt="contact us" className='contact-us-img'/>
          </div>
          <div className="contact-us-content-container">
            <h1 className="contact-us-company-name-heading">
              {' '}
              Infinity Computer Services{' '}
            </h1>
            <h1 className="maintained-by-heading">
              {' '}
              Maintained By: <span className="owner-name"> Kongala Srikanth </span>{' '}
            </h1>
            <h1 className="reach-us-heading"> Reach Us on..! </h1>
            <h1 className="mobile-number-heading">
              {' '}Mobile Number:
              <span className="mobile-number"> 7075960802 </span>{' '}
            </h1>
            <h1 className="email-heading">
              {' '}Email:
              <span className="email"> @gmail.com </span>{' '}
            </h1>

            <div className="social-media-icons-container">

              <div className="whatsapp-icon-container">
                <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer" >
                  <FaWhatsappSquare className="whatsapp-icon" />
                </a>
              </div>

              <div className="telegram-icon-container">
                <a href="https://www.telegram.com" target="_blank" rel="noreferrer">
                  <FaTelegram className="telegram-icon" />
                </a>
              </div>
              </div>

              <div>
                <h3> For Service Registration, Please Click on the Below Button  </h3>
                <Link to='/user-form' className='Link'>
                <button class="button">
                  <span>Booking</span>
                </button>
                </Link>
              </div>
          </div>
          </div>

          <div className="map-container">
            <h1 className="our-location-heading"> Our Location </h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1902.3676949608055!2d78.31092454377851!3d17.520140485728888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d5c85ca6931%3A0x73ade426b2bd96b1!2s7-117%2F14B%2F1%2C%20KSR%20Housing%20Colony%2C%20Golden%20Palms%2C%20Raghavendra%20Colony%2C%20Hyderabad%2C%20Telangana%20502032!5e0!3m2!1sen!2sin!4v1715502943910!5m2!1sen!2sin" width="300" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
              </div>
              
        </div>
        <Footer/>
        
        </>
)}

export default ContactUs