import React from 'react'
import { Link } from 'react-router-dom'
// css
import '../../../assets/styles/HeroArea.css'

function HeroArea() {
    return (
        <div className='outerContainerHero'>
            <div className="innerContainerHero">
                <h1 className="heroHeading">Welcome to <br /> <span className='spanheroHeading'>FRISKA</span> </h1>
                <p className="heroPara">
                    Friska makes booking offline doctor appointments easier and more flexible so that you never have to wait for your turn when visiting a doctor.
                </p>
            </div>
            <div className="btnsHeroArea">
                <button className='LoginHeroButton'>
                    <Link>
                        Login
                    </Link>
                </button>
                <button className='LoginHeroButton'>
                    <Link>
                        Sign Up
                    </Link>
                </button>
            </div>

        </div>
    )
}

export default HeroArea
