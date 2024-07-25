import React from 'react'
import img from './assets/pic/photo-1510519138101-570d1dca3d66.png'
import gameImg from './assets/pic/scary-1920X1200-wallpaper-o7c9n1g2izoywv94.jpeg'
import { useState } from 'react'
import './LandingPage.css'

export default function LandingPage({ landingToggleFun }) {


    const startGame = () => {
        landingToggleFun();
    }

    const [manualToggle, setManualToggle] = useState(false)
    const manualShow = () => {
        if (!manualToggle) {
            setManualToggle(true)
        }
        else{
            setManualToggle(false)
        }
    }

   
    return (
        <>
            <div className='landing'>
                <img src={img} alt="" className='gameImg' />
                <div className='blur'>
                    {
                        !manualToggle ?
                            <>
                                <nav>
                                    <h1><img src={gameImg} alt="" className='img' /> Creepy Desk</h1>
                                    <div className='underline'></div>
                                </nav>

                                <div className='buttons'>
                                    <button className='start' onClick={startGame}>START</button>
                                    <button className='manual' onClick={manualShow}>MANUAL</button>
                                </div>

                                <div className='suggestion'><span>Rotate for Best Experience or Open in PC</span></div>
                            </>
                            :
                            <div className='manualPage'>
                                <nav>
                                    <h1><img src={gameImg} className='img'/> Creepy Desk </h1>
                                    <div className='underline'></div>
                                    <div className="back"><button onClick={manualShow}>Back</button></div>
                                </nav>

                                <div className='keypoints'>
                                    <p className='manualTitle'>
                                        Manual :
                                    </p>
                                    <section>
                                        Clickable Entities-
                                        <ul>
                                        <li>Bushes- The big bushes at the most left side</li>
                                        <li>Watch</li>
                                        <li>Keyboard</li>
                                        <li>Light- Click on the stand of light to toggle the Light-Switch</li>
                                        <li>Mouse</li>
                                        <li>Iphone</li>
                                        <li>PC</li>
                                        </ul>
                                    </section>
                                </div>
                                
                                <div className='suggestion'>Rotate for Best Experience</div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
