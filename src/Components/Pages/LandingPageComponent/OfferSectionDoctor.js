import React from 'react'
import OrganisingRecods from '../../../assets/img/LandingPage/OrganisingRecods.png'
import EasyAccess from '../../../assets/img/LandingPage/EasyAccess.png'
import CostEffective from '../../../assets/img/LandingPage/CostEffective.png'
import EasyCommunication from '../../../assets/img/LandingPage/EasyCommunication.png'
import BrandPositioning from '../../../assets/img/LandingPage/BrandPositioning.png'

function OfferSectionDoctor() {
    return (
        <div className="offerPatientsSection DoctorSection">

            <div className="cardsOfferContainer">
                <div className="rightContainerTop1">
                    <div className="cardsOffer cardsOffer1 ">
                        <img src={CostEffective} alt="" className="cardOfferImg" />
                        <h2 className="cardsOfferHead">Increased <br />Earnings</h2>
                    </div>
                    <div className="lineOffer"></div>
                    <div className="cardsOffer">
                        <img src={BrandPositioning} alt="" className="cardOfferImg" />
                        <h2 className="cardsOfferHead">Cost Effective</h2>
                    </div>
                </div>
                <div className="lineOffer"></div>
                <div className="rightContainerTop2">
                    <div className="cardsOffer">
                        <img src={EasyCommunication} alt="" className="cardOfferImg" />
                        <h2 className="cardsOfferHead">Easy <br /> Communication</h2>
                    </div>
                    <div className="lineOffer"></div>
                    <div className="cardsOffer cardsOffer2">
                        <img src={OrganisingRecods} alt="" className="cardOfferImg" />
                        <h2 className="cardsOfferHead">Organizing <br /> Records</h2>
                    </div>
                </div>
            </div>
            <div className="headingPart DoctorSection">
                <p className="topmostHead">FRISKA</p>
                <h1 className="offerHeading">
                    What we have to offer to <br /> <span>Doctors ?</span>
                </h1>
                <br /><br />
                <p className="paraOffer">
                    We support our doctors with the simplicity of our technology so as to operate with ease, multiply their earnings and establish their digital presence.

                </p>
            </div>
        </div>

    )
}

export default OfferSectionDoctor
