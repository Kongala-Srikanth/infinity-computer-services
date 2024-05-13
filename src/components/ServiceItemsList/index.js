import { IoCallSharp } from "react-icons/io5";
import './index.css'


const ServiceItemsList = props => {
    const {serviceData} = props
    const {imgUrl, title, description, price, discount, msg} = serviceData

    return (
        <li className='service-card'>
            <img src={imgUrl} alt={title} className='service-img'/>
            <h1 className='title-heading'>
                {title}
                </h1>
            <p className='description'>
                {description}
            </p>
            <div className='price-container'>
                <button className="hide-btn">
                <a href={`https://wa.me/7075960802?text=${msg}`} target="_blank">
                    <IoCallSharp className="call-icon"/>
                </a>
                </button>
                <div>
                <p className='price'>Price: <span>{price}/-</span></p>
                <p className='discount'>Discount: <span>{discount}%</span></p>
                </div>
            </div>
        </li>
    )
}

export default ServiceItemsList