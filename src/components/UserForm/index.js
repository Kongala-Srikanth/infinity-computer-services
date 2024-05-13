import { Component } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class UserForm extends Component{
    state = {formSubmit: false}

    onFormSubmit = () => this.setState({formSubmit: true})

    onHomePage = () => {
        const {history} = this.props
        console.log(history)
        setTimeout(() => {
            history.replace('/')
        }, 3000)
        
    }

    formContainer = () => (
        <>
        <Header />
        
        <div className="form-bg-container">
        
            <FormfacadeEmbed 
                formFacadeURL="https://formfacade.com/include/102358517732792175377/form/1FAIpQLSdzvhkT8gco6MsUNivwrjA8YUyBDsMcUbuc7JKMTJrG2YEU0w/classic.js/?div=ff-compose"
                onSubmitForm={this.onFormSubmit}
            />
            
        </div>
        <Footer />
        </>
    )

    submitContainer = () => (
        <div className="form-bg-container">
            <div className="submit-container">
                <img src='https://res.cloudinary.com/sree4441/image/upload/v1715525028/download-1002802_1280-removebg-preview_tkgahw.png' alt="tick img" className="tick-img"/>
                <h1 className="submit-heading">Successfully Submitted</h1>
            </div>
            {this.onHomePage()}
        </div>
    )

    render(){
        const {formSubmit} = this.state
        return (
            <>
            {formSubmit? this.submitContainer() : this.formContainer()}
            
        </>
        )
    }
} 

export default withRouter(UserForm)