import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";


import './index.css'

const Footer = () => {
    return (
        <footer>
        <div class="footer-content">
            <div class="footer-section about">
                <h2>About Us</h2>
                <p className="about-description">
                Welcome to Infinity Computer Services! We fix software glitches, hardware issues, and offer upgrades to enhance performance. Expert troubleshooting and repairs for all your computer needs.
                </p>
            </div>
            <div class="footer-section links">
                <h2 className="quick-heading">Quick Links</h2>
                <ul className="section-links">
                    <li className="list-footer">
                        <FaHome className="footer-icons"/>
                        <a href="">Home</a>
                    </li>
                    <li className="list-footer">
                        <MdMiscellaneousServices className="footer-icons"/>
                        <a href="">Services</a>
                    </li>
                    <li className="list-footer">
                        <HiInformationCircle className="footer-icons"/>
                        <a href="">About Us</a>
                    </li>
                    <li className="list-footer">
                        <RiCustomerService2Fill className="footer-icons"/>
                        <a href="">Contact</a>
                    </li>
                    
                </ul>
            </div>
            <div class="footer-section contact">
                <h2>Contact Us</h2>
                <p className="list-footer contact">
                    <MdEmail className="footer-icons"/>
                    Email: ksrikanthyadav789@gmail.com</p>
                <p className="list-footer contact">
                <FaPhone className="footer-icons"/>
                    Phone: 707-596-0802</p>

                    <p className="list-footer contact">
                <FaAddressCard className="footer-icons"/>
                    Plot No: 186, KSR Colony, Ameenpur, Hyderabad, 502032
                    </p>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2024 infinity Computer Services
        </div>
    </footer>
    )
}

export default Footer