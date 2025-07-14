import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>ZoomX - Video Connect</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join Meeting</p>
                    <p onClick={() => {
                        router("/auth")
                    }}>Create Account</p>
                    <div onClick={() => {
                        router("/auth")
                    }} role='button'>
                        <p>Sign In</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "rgba(255, 0, 0, 0.68)" }}>Meet</span> Seamlessly Anywhere</h1>
                    <p>Bridge distances and stay connected with ZoomX</p>
                    <div role='button'>
                        <Link to={"/auth"}>Launch Now</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}
