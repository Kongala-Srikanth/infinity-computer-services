import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from 'framer-motion';
import Header from '../Header'

import './index.css'
import { Link } from "react-router-dom";

const Home = () => {



   return (
    <div>
        
        <div>
            <Header />

            {/* Main Content Container with Animations */}
            <motion.div
                className='bg-img-container'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Main Content Section */}
                <motion.div
                    className="home-content-container"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                >
                    <h1 className="heading">COMPUTER</h1>
                    <p className="home-description">We fix software glitches, hardware issues, and offer upgrades to enhance performance.</p>
                    <Link to='/services' className='link'>
                        <button className="super-button">Our Services</button>
                    </Link>
                </motion.div>

                {/* Banner Section */}
                <motion.div
                    className="home-banner-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                >
                    <h1 className="main-heading-sm">COMPUTER</h1>
                    <img src='https://th.bing.com/th/id/OIG3.SaOSj.gezvVMGW08j49d?pid=ImgGn' alt="home banner" className="home-banner-img"/>
                </motion.div>
                <div className="chat-icon-conatiner">
                <button type='button' className='hide-btn'>
                    <a href="https://wa.me/7075960802" target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className="chat-icon"/>
                    </a>
                    
                </button>
            </div>
            </motion.div>
        </div>
        
    </div>
)}

export default Home

/*
<div className="chat-icon-conatiner">
                <button type='button' className='hide-btn'>
                    <a href="https://wa.me/7075960802" target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className="chat-icon"/>
                    </a>
                    
                </button>
            </div>





            <Header />
        <div className='bg-img-container'>
            <div className="home-content-container">
                <h1 className="heading">COMPUTER</h1>
                <p className="home-description">We fix software glitches, hardware issues, and offer upgrades to enhance performance.</p>
                <Link to='/services' className='link'>
                
                <button class="super-button">Our Services</button>
                
                </Link>
            </div>
            <div className="home-banner-container">
                <h1 className="main-heading-sm">COMPUTER</h1>
                <img src='https://th.bing.com/th/id/OIG3.SaOSj.gezvVMGW08j49d?pid=ImgGn' alt="home banner" className="home-banner-img"/>
            </div>
            
        </div>
            */