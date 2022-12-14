import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Common.css'
import '../assets/styles/Footer.css'
import siteLogo from '../assets/img/companyName.png'
import micrsoftAzureLicense from '../assets/img/MicrosoftAzure-Footer.png'


function Footer() {
    return (

        <div className='FooterContainer'>
            <div className="innerFooterContainer">


                <div className="containerLeft1 containerFoot">
                    <img src={siteLogo} alt="" className="companyLogo" />
                    <img src={micrsoftAzureLicense} alt="" className="micrsoftAzureLicense" />
                </div>
                <div className="containerLeft2 containerFoot">
                    <h4>ABOUT</h4>
                    <p><Link>Who we are</Link> </p>
                    <p> <Link>Work with us</Link> </p>
                </div>
                <div className="containerLeft3 containerFoot">
                    <h4>SUPPORT</h4>
                    <p><Link>support@friskanow.com</Link></p>
                    <p>8983176450</p>
                </div>
                <div className="containerLeft4 containerFoot">
                    <h4>MORE</h4>
                    <p> <Link>Privacy Policy</Link> </p>
                    <p> <Link> Terms & Conditions</Link></p>
                </div>
                <div className="containerLeft5 containerFoot">
                    <h4>CONTACT</h4>
                    <p><Link>www.friskanow.com</Link></p>
                    <span>
                        <Link><ion-icon name="logo-whatsapp"></ion-icon></Link>

                        <Link><ion-icon name="logo-linkedin"></ion-icon></Link>

                    </span>
                </div>
            </div>

        </div>

    )
}

export default Footer   