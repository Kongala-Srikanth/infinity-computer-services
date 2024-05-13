import { IoLogoWhatsapp } from "react-icons/io";
import Header from '../Header'
import ServiceItemsList from '../ServiceItemsList'
import Footer from '../Footer'
import './index.css'

const serviceData = [
    {
        id: 1,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715452090/software-error-laptop-repair-icon-cartoon-style-vector-removebg-preview_smy4vu.png',
        title: 'Software Glitch Repair',
        price: '300',
        discount: '10',
        msg:'Hello, I have a software Glitching Problem',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 2,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715448941/os_install_2_uwhzwr.png',
        title: 'Operating System Installation',
        price: '500',
        discount: '10',
        msg:'Hello, I want windows installation',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 3,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715451149/anti_virus-removebg-preview_mhezpq.png',
        title: 'Virus and Malware Removal',
        price: '500',
        discount: '25',
        msg:'Hello, My laptop/pc have virus',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 4,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715451284/icon-of-memory-chip-ram-hardware-rom-power-vector-5264832-removebg-preview_auh6jc.png',
        title: 'Hardware Repair and Upgrades',
        price: '300',
        discount: '35',
        msg:'Hello, I want to upgrade my pc',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 5,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715448936/12238094_j8w6zn.png',
        title: 'Data Recovery Services',
        price: '600',
        discount: '20',
        msg:'Hello, I lose my data',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 6,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715452337/img_wisegamebg03_jxvxow.webp',
        title: 'Performance Optimization',
        price: '300',
        discount: '10',
        msg:'Hello, I want to speedup my pc/laptop',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 7,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715448941/trobuleshoot_rubl8n.png',
        title: 'Network Troubleshooting and Repair',
        price: '200',
        discount: '10',
        msg:'Hello, My pc/laptop have some issues',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 8,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715448936/4045a-Cpu-Cabinet-87-removebg-preview_lalmhz.png',
        title: 'Custom Built Computers',
        price: '650',
        discount: '35',
        msg:'Hello, I want to bulid own pc',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 9,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715451400/cleaning-icon-logo-vector-design-template_827767-1504_sv7ztt.jpg',
        title: 'CPU Clean Service',
        price: '300',
        discount: '50',
        msg:'Hello, I have to clean my pc',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 10,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715451564/10382399_sf5uwv.png',
        title: 'Softwares Installation',
        price: '200',
        discount: '10',
        msg:'Hello, I want necessary software installation',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 11,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715451645/9321345_brx7vf.png',
        title: 'Checking Charges',
        price: '150',
        discount: '30',
        msg:'Hello, My pc/laptop is not working properly',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    {
        id: 12,
        imgUrl: 'https://res.cloudinary.com/sree4441/image/upload/v1715450982/png-transparent-macintosh-hard-drives-macos-high-sierra-computer-icons-ntfs-driving-driving-text-computer-program-thumbnail-removebg-preview_gj2pou.png',
        title: 'System Formatting',
        price: '150',
        discount: '30',
        msg:'Hello, My pc/laptop is not working properly',
        description: 'Welcome to Infinity Computer Services! We specialize in fixing software glitches that slow down your computer or disrupt its performance. Our expert technicians are dedicated to resolving all your software issues and ensuring your computer runs smoothly.'
    },
    
]

const Services = () => (
    <>
    <Header />
    <div className='service-main-container'>
    
    <h1 className='services-main-heading'>OUR SERVICES</h1>
    <ul className='service-card-container'>
        {
            serviceData.map(each => (
                <ServiceItemsList key={each.id} serviceData={each} />
            ))
        }
        
    </ul>
    <div className="chat-icon-conatiner-service">
                <button type='button' className='hide-btn'>
                    <a href="https://wa.me/7075960802" target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className="chat-icon"/>
                    </a>
                    
                </button>
            </div>
    </div>
    <Footer />
    </>
)

export default Services