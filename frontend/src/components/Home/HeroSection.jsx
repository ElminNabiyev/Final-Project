import React, { useContext } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { Link, NavLink } from 'react-router-dom';
import { LangContext } from '../../context/LangProvider';

const flex = {
    display: "flex",
    alignItems: "center"
}

function HeroSection() {
    const { messages, locale } = useContext(LangContext)

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <section style={flex} className='hero'>
                <div style={flex} className="hero_div">
                    <div className='search-div'>
                        <input id='seahrc' type="text" />
                        <label className='deyis' htmlFor="seahrc"><FormattedMessage id='search'></FormattedMessage></label>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"></path><path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"></path><path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z" transform="rotate(-45.001 38.24 38.24)"></path><path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"></path><path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"></path>
                        </svg>
                    </div>
                    <ul style={flex} className='search-lists'>
                        <li><NavLink to={""}><FormattedMessage id='discover'></FormattedMessage></NavLink></li>
                        <li><Link to={""}><FormattedMessage id='browse'></FormattedMessage></Link></li>
                        <li><Link to={""}><FormattedMessage id='news'></FormattedMessage></Link></li>
                    </ul>
                </div>
                <div className="wislist">
                    <ul style={flex} className='search-lists'>
                        <li>
                            <Link><FormattedMessage id='wishlist'></FormattedMessage></Link>
                        </li>
                        <li>
                            <Link><FormattedMessage id='cart'></FormattedMessage></Link>
                        </li>
                    </ul>
                </div>
            </section>
        </IntlProvider>
    )
}

export default HeroSection
