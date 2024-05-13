import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import FAQ from '../FAQ'

import './index.css'

const AboutUs = () => (
    <>
    <Header />
    <div className='about-main-container'>
        <div className='main-container'>
            <div className="about-container">
                <div className="about-card">
                    <div className="about-image">
                        <img src="https://th.bing.com/th/id/OIG1.RyREbrtwH3uyFU.A_m1S?pid=ImgGn" alt="About Img" classNameName='about-img'/>
                    </div>
                    <div className="about-content">
                        <h2>Welcome to Our Infinity Computer Services</h2>
                        <p>Welcome to Infinity Computer Services, your one-stop destination for all your software and hardware needs. Whether you're facing issues with your computer's performance, dealing with software glitches, or looking to upgrade your system's hardware, we've got you covered.</p>
                        <p>At Infinity Computer Services, we specialize in diagnosing and resolving a wide range of computer problems. Our expert technicians are skilled in troubleshooting software issues such as operating system errors, software crashes, and virus infections. We also offer comprehensive hardware services, including diagnosing faulty components, repairing hardware failures, and upgrading computer parts to enhance performance.</p>
                        
                        <h3 className='our-services-heading'>Our services include:</h3>
                        <ul>
                            <li>Software troubleshooting and repair</li>
                            <li>Virus and malware removal</li>
                            <li>Operating system installation and upgrades</li>
                            <li>Data recovery and backup solutions</li>
                            <li>Hardware diagnosis and repair</li>
                            <li>Memory and storage upgrades</li>
                            <li>Graphics card and processor upgrades</li>
                            <li>Custom-built computer systems</li>
                        </ul>
                        <Link to='user-form' className='link'>
                            <button type='button' className='booking-button'>Book Now</button>
                        </Link>
                        
                        
                        <div className="social-icons">
                            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FAQ />
    </div>
    <Footer />
    </>
)

export default AboutUs