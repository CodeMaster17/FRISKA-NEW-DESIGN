import React from 'react'

// importing components
import Navabar from '../Navabar'
import Footer from '../../Footer'
import BrowseClinicCard from '../BrowseClinicCard'
import HospitalCardsData from '../HospitalCardsData'

// importing css
import '../../../assets/styles/BookAppointmentsPage.css'
import '../../../assets/styles/Common.css'

// importing image
import heroAreaImg from '../../../assets/img/Book Appointments/heroImg.jpg'
import hosImg1 from '../../../assets/img/Browse Clients/image1.png'
import cost from '../../../assets/img/Book Appointments/cards img/cost.png'
import fast from '../../../assets/img/Book Appointments/cards img/fast.png'
import flexible from '../../../assets/img/Book Appointments/cards img/flexible.png'
import time from '../../../assets/img/Book Appointments/cards img/time.png'


function BookApoointmentsPage() {
    return (
        <>
            <Navabar />
            <div className='AppointmentsContainer'>
                <div className="heroArea">

                    <img src={heroAreaImg} alt="" className="imgHero" />
                    <div className="contentHeroArea">
                        <div className="heroPara">
                            <h1>Book Offline <br />Appointments</h1>
                            <p>
                                No more standing in queues, sitting in the waiting area. Skip the hassle and get your health checked up quickly with our system
                            </p>
                        </div>
                        <button className="heroBtn">Book An Appointment</button>
                    </div>
                </div>
            </div>
            <div className="cardsAboutBooking">
                <div className="cardsBrowseClinic">
                    <div className="Cards">
                        <img src={cost} alt="" className="featuresImg" />
                        <p>Saves Time</p>
                    </div>
                    <div className="Cards">
                        <img src={fast} alt="" className="featuresImg" />
                        <p>Fast and Simple</p>
                    </div>
                    <div className="Cards">
                        <img src={flexible} alt="" className="featuresImg" />
                        <p>Cost Effective</p>
                    </div>
                    <div className="Cards">
                        <img src={time} alt="" className="featuresImg" />
                        <p>Flexible</p>
                    </div>
                </div>
            </div>
            <div className="offerReedem">
                <h1 className="offerHead">Redeem These Now</h1>
                <div className="offerBoxes">
                    <div className="leftboxOffer">
                        <p className="p1">50% OFF ON YOUR FIRST</p><br />
                        <p className="p2">APPOINTMENT CODE : <span>FIRSTAPPOINT</span></p>
                        <br />
                        <br />
                        <p className="p3"><a href="">Terms and Conditions</a></p>
                    </div>
                    <div className="rightboxOffer">
                        <p className="p1">15% OFF ON XXX BANK CARDS</p>
                        <br /><br /><br /><br />
                        <p className="p3"><a href="">Terms and Conditions</a></p>
                    </div>
                </div>
            </div>
            {/* <div className="bookingProcess">
                <h1 className="bookingProcessHead">Booking Offline Appointments Made Simpler</h1>
                <div className="stepsBoxes">
                    <div className="box1">
                        <p className="num">1</p>
                        <p></p>
                    </div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                </div>
            </div> */}
            <Footer />
        </>
    )
}

export default BookApoointmentsPage