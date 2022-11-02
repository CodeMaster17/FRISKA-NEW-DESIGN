import React from 'react'
import OrganisingRecods from '../../../assets/img/LandingPage/OrganisingRecods.png'
import TimeSaving from '../../../assets/img/LandingPage/timeSaving.png'
import EasyAccess from '../../../assets/img/LandingPage/EasyAccess.png'
function OfferSection() {
    return (
        <div className="offerPatientsSection">
            <div className="headingPart">
                <p className="topmostHead">FRISKA</p>
                <h1 className="offerHeading">
                    What we have to offer to <br /> <span>Patients ?</span>
                </h1>
                <br /><br />
                <p className="paraOffer">
                    Friska means friendly and super caring for people around it. We deliver happiness to our customers by making their visit to a doctor quick, comfortable and cost-effective.
                </p>
            </div>
            <div className="cardsOfferContainer">
                <div className="rightContainerTop1">
                    <div className="cardsOffer cardsOffer1 ">
                        <img src={TimeSaving} alt="" className="cardOfferImg" />
                        <h2 className="cardsOfferHead">Time Saving</h2>
                    </div>
                    <div className="lineOffer"></div>
                    <div className="cardsOffer">
                        <img src={OrganisingRecods} alt="" className="cardOfferImg" />
                        <h2 className="cardsOfferHead">Cost Effective</h2>
                    </div>
                </div>
                <div className="lineOffer"></div>
                <div className="rightContainerTop2">
                    <div className="cardsOffer">
                        <img src={EasyAccess} alt="" className="cardOfferImg" />
                        <h2 className="cardsOfferHead">Easy access to Doctors</h2>
                    </div>
                    <div className="lineOffer"></div>
                    <div className="cardsOffer cardsOffer2">
                        <img src={OrganisingRecods} alt="" className="cardOfferImg" />
                        <h2 className="cardsOfferHead">Organizing Records</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferSection
