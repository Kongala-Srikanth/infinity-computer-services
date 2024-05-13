import {Link, withRouter} from 'react-router-dom'
import { Component } from 'react';
import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi2";
import { PiInfinityDuotone } from "react-icons/pi";
import './index.css'


const navItems = [
    {
        id: 1,
        navLink: '/',
        title: 'Home'
    },
    {
        id: 2,
        navLink: '/services',
        title: 'Service'
    },
    {
        id: 3,
        navLink: '/about',
        title: 'About'
    },
    {
        id: 4,
        navLink: '/contact',
        title: 'Contact'
    },
   
]

class Header extends Component{
    state = {activeId : navItems[0].id}

    onClickNavButton = (id) => {
        this.setState({activeId: id})
        
    }

    render(){
        const {activeId} = this.state
        

        return (
            <nav className='nav-container'>
                <Link to='/' className='Link'>
                <div className='website-logo-container'>
                        <PiInfinityDuotone className='website-logo'/>
                <h1 className='website-logo-name'>ICS</h1>
                </div>
        
                </Link>
                <div className='nav-btn-container'>
                    {
                        navItems.map(each => (
                            <div key={each.id}>
                                <Link to={each.navLink} className='Link'>
                                    <button type='button' className={activeId === each.id ? 'nav-hide-btn active-nav': 'nav-hide-btn'} onClick={() => this.onClickNavButton(each.id)}>{each.title}</button>
                                </Link>
                            </div>
                        ))
                    }
                    
                    <a href='https://kongala-srikanth.github.io/portfolio/' target='_blank' className='Link'>
                    <button type='button' className='nav-hide-btn'>Protfolio</button>
                    </a>
                </div>
        
        
        
                <div className='website-logo-container-sm'>
                        <PiInfinityDuotone className='website-logo'/>
                </div>
                <div className='nav-icons-container'>
                <Link to='/' className='Link'>
                    <button type='button' className='hide-btn'>
                        <FaHome className='nav-icons'/>
                    </button>
                </Link>
                <Link to='/services' className='Link'>
                <button type='button' className='hide-btn'>
                <MdMiscellaneousServices className='nav-icons'/>
                </button>
                </Link>
                <Link to='/about' className='Link'>
                <button type='button' className='hide-btn'>
                <RiCustomerService2Fill className='nav-icons'/>
                </button>
                </Link>
                <Link to='/contact' className='Link'>
                <button type='button' className='hide-btn'>
                <HiInformationCircle className='nav-icons'/>
                </button>
                </Link>
                
                </div>
            </nav>
        )
    }
} 

export default withRouter(Header)

/*

<div className='nav-btn-container'>
            <Link to='/' className='Link'>
                <button type='button' className='nav-hide-btn'>Home</button>
            </Link>
            <Link to='/services' className='Link'>
            <button type='button' className='nav-hide-btn'>Service</button>
            </Link>
            <Link to='/about' className='Link'>
            <button type='button' className='nav-hide-btn'>About</button>
            </Link>
            <Link to='/contact' className='Link'>
            <button type='button' className='nav-hide-btn'>Contact</button>
            </Link>
            <a href='https://kongala-srikanth.github.io/portfolio/' target='_blank' className='Link'>
            <button type='button' className='nav-hide-btn'>Protfolio</button>
            </a>
        </div>

            */