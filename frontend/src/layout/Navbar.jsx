import React, { useContext, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangProvider';
import img from '../imgs/Screenshot_2024-05-23_152828-removebg-preview.png';
import "./CSS/Navbar.scss";


const flex = {
    display: "flex",
    alignItems: "center"
}

function Navbar() {
    const { messages, locale, changeLanguage } = useContext(LangContext)
    const [isClicked, setIsClikcked] = useState(true)
    const [isClicked2, setIsClikcked2] = useState(false)
    const [isClicked3, setIsClikcked3] = useState(false)

    const handleClick = () => {
        setIsClikcked(!isClicked)
    }
    const handleClick2 = () => {
        setIsClikcked2(!isClicked2)
    }
    const handleClick3 = () => {
        setIsClikcked3(!isClicked3)
    }
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <header>
                <nav>
                    <div className='nav-all'>
                        <div style={flex} className='nav-div'>
                            <div onClick={handleClick2} style={flex} className="epic-logo">
                                <Link to={""}><img width={70} height={50} src={img} alt="Logo" /></Link>
                                <span style={{ transform: isClicked2 && "rotate(180deg)" }} className='symbol'>⮟</span>
                                <ul style={{ display: isClicked2 || "none" }} className="dropdown2">
                                    <div style={{ paddingRight: "30px" }} className="services">
                                        <div className="play">
                                            <h2><FormattedMessage id='play'></FormattedMessage></h2>
                                            <Link to={"https://www.fortnite.com/?lang=en-US"}><li><div style={{ maskImage: "url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)" }} className="logo"></div><span>Fortnite</span></li></Link>
                                            <Link to={"https://www.rocketleague.com/en"}><li><div style={{ maskImage: "url(https://media.graphassets.com/nvjfw8LwTbyiETLiJEeE)" }} className="logo"></div><span>Rocket League</span></li></Link>
                                            <Link to={"https://fallguys.com/en-US?lang=en-US"}><li><div style={{ maskImage: "url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)" }} className="logo"></div><span>Fall Guys</span></li></Link>
                                        </div>
                                        <div style={{ marginTop: "40px" }} className="play">
                                            <h2><FormattedMessage id='discover'></FormattedMessage></h2>
                                            <Link to={""}><li><img width={20} height={20} src="https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM" alt="" /><span>Legendary Games Store</span></li></Link>
                                            <Link to={"https://www.fab.com/"}><li><div style={{ maskImage: "url(https://media.graphassets.com/VYHbV8mMQhCzjH0TIGVO)" }} className="logo"></div><span>Fab</span></li></Link>
                                            <Link to={"https://sketchfab.com/"}><li><div style={{ maskImage: "url(https://media.graphassets.com/SueHxUd6SFy59VZItanD)" }} className="logo"></div><span>Sketchfab</span></li></Link>
                                            <Link to={"https://www.artstation.com/"}><li><div style={{ maskImage: "url(https://media.graphassets.com/GnVa6hUTtSLOfMZrWNxe)" }} className="logo"></div><span>ArtStation</span></li></Link>
                                        </div>
                                    </div>
                                    <div className="create">
                                        <h2><FormattedMessage id='create'></FormattedMessage></h2>
                                        <Link to={"https://www.unrealengine.com/en-US?lang=en-US"}><li><div style={{ maskImage: "url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)" }} className="logo"></div><span>Unreal Engine</span></li></Link>
                                        <Link to={"https://create.fortnite.com/welcome?team=personal&lang=en-US"}><li><div style={{ maskImage: "url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)" }} className="logo"></div><span>Create in Fortnite</span></li></Link>
                                        <Link to={"https://www.unrealengine.com/en-US/metahuman"}><li><div style={{ maskImage: "url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)" }} className="logo"></div><span>MetaHuman</span></li></Link>
                                        <Link to={"https://www.twinmotion.com/en-US?lang=en-US"}><li><div style={{ maskImage: "url(https://media.graphassets.com/bx1K2n3URsKKIismuqzF)" }} className="logo"></div><span>Twinmotion</span></li></Link>
                                        <Link to={"https://www.unrealengine.com/en-US/realityscan"}><li><div style={{ maskImage: "url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)" }} className="logo"></div><span>RealityScan</span></li></Link>
                                        <Link to={"https://www.capturingreality.com/realitycapture"}><li><div style={{ maskImage: "url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)" }} className="logo"></div><span>RealityCapture</span></li></Link>
                                        <Link to={"https://dev.epicgames.com/en-US/services"}><li><img width={20} height={20} src="https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM" alt="" /><span>Legendary Games Online Services</span></li></Link>
                                        <Link to={""}><li><img width={20} height={20} src="https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM" alt="" /><span>Publish on  Legendary Games Store</span></li></Link>
                                        <Link to={"https://www.kidswebservices.com/"}><li><div style={{ maskImage: "url(https://media.graphassets.com/ijWMz82OStqcWRGDawM9)" }} className="logo"></div> <span>Kids Web Services</span></li></Link>
                                        <Link to={"https://dev.epicgames.com/community/?locale=en-us"}><li><img width={20} height={20} src="https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM" alt="" /><span>Developer Community</span></li></Link>
                                    </div>
                                </ul>
                            </div>
                            <div className="line"></div>
                            <div className="lists">
                                <ul style={flex}>
                                    <Link to={"/"}>
                                        <img style={{ cursor: "pointer", marginRight: "8px " }} width={54} height={32} src="https://media.graphassets.com/qAiDvosPSFGqJxTVuY7h" alt="" />
                                    </Link>
                                    <Link><li><FormattedMessage id='support'></FormattedMessage></li></Link>
                                    <Link><li><FormattedMessage id='distribute'></FormattedMessage></li></Link>
                                </ul>
                            </div>
                        </div>
                        <div style={flex} className="profile-download">
                            <i onClick={handleClick} className="fa-solid fa-globe">
                                <ul style={{ display: isClicked && "none" }} className='dropdown'>
                                    <li onClick={() => changeLanguage("en")}>English</li>
                                    <li onClick={() => changeLanguage("de")}>Deutsch</li>
                                    <li onClick={() => changeLanguage("it")}>Italiano</li>
                                    <li onClick={() => changeLanguage("sp")}>Espanol</li>
                                    <li onClick={() => changeLanguage("tr")}>Türkçe</li>
                                    <li onClick={() => changeLanguage("az")}>Azərbaycanca</li>
                                </ul>
                            </i>
                            <i className="fa-regular fa-user"></i>
                            <button className='download'><FormattedMessage id='download'></FormattedMessage></button>
                        </div>
                        <button onClick={handleClick3} className='menu'>{!isClicked3?<i className="fa-solid fa-bars"></i>:<i class="fa-solid fa-x"></i>}</button>
                    </div>
                    <div style={{ display: isClicked3 || "none" }} className="all-menu">
                        <div className='menu-profile'>
                            <i onClick={handleClick} className="fa-solid fa-globe">
                                <ul style={{ display: isClicked && "none" }} className='dropdown'>
                                    <li onClick={() => changeLanguage("en")}>English</li>
                                    <li onClick={() => changeLanguage("de")}>Deutsch</li>
                                    <li onClick={() => changeLanguage("it")}>Italiano</li>
                                    <li onClick={() => changeLanguage("sp")}>Espanol</li>
                                    <li onClick={() => changeLanguage("tr")}>Türkçe</li>
                                    <li onClick={() => changeLanguage("az")}>Azərbaycanca</li>
                                </ul>
                            </i>
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="support">
                            <ul>
                                <Link><li><FormattedMessage id='support'></FormattedMessage></li></Link>
                                <Link><li><FormattedMessage id='distribute'></FormattedMessage></li></Link>
                            </ul>
                        </div>
                        <button className='download'><FormattedMessage id='download'></FormattedMessage></button>
                    </div>
                </nav>
            </header>
        </IntlProvider>
    )
}

export default Navbar
