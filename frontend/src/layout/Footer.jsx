import React, { useContext } from 'react'
import "./CSS/Footer.scss"
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangProvider';
import { FormattedMessage, IntlProvider } from 'react-intl';

function Footer() {
  const { messages, locale } = useContext(LangContext)

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <footer>
        <div className="container">
          <div className="logos">
            <Link to={"https://www.instagram.com/nabielmin.99/"}><i className="fa-brands fa-instagram"></i></Link>
            <Link to={"https://github.com/ElminNabiyev"}><i className="fa-brands fa-github"></i></Link>
            <Link to={"https://web.whatsapp.com/"}><i class="fa-brands fa-whatsapp"><span>(051)909-32-92</span></i></Link>
          </div>
          <h5><FormattedMessage id='res'></FormattedMessage></h5>
          <div className='all_lists'>
            <div className='footer-lists'>
              <ul>
                <li>
                  <Link><FormattedMessage id='support2'></FormattedMessage></Link>
                </li>
                <li>
                  <Link><FormattedMessage id='distribute2'></FormattedMessage></Link>
                </li>
                <li>
                  <Link><FormattedMessage id='career'></FormattedMessage></Link>
                </li>
                <li>
                  <Link><FormattedMessage id='company'></FormattedMessage></Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link><FormattedMessage id='fan'></FormattedMessage></Link>
                </li>
                <li>
                  <Link><FormattedMessage id='ux'></FormattedMessage></Link>
                </li>
                <li>
                  <Link><FormattedMessage id='store'></FormattedMessage></Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link><FormattedMessage id='online'></FormattedMessage></Link>
                </li>
                <li>
                  <Link><FormattedMessage id='community'></FormattedMessage></Link>
                </li>
                <li>
                  <Link><FormattedMessage id='newsroom'></FormattedMessage></Link>
                </li>
              </ul>
            </div>
            <h5><FormattedMessage id='made'></FormattedMessage></h5>
            <div className="second-list">
              <ul>
                <li>
                  <Link>Battle Breakers</Link>
                </li>
                <li>
                  <Link>Fortnite</Link>
                </li>
                <li>
                  <Link>Infinity Blade</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link>Robo Recall</Link>
                </li>
                <li>
                  <Link>Shadow Complex</Link>
                </li>
                <li>
                  <Link>Unreal Tournament</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='line'></div>
          <p className='privacy'><FormattedMessage id='privacy'></FormattedMessage></p>
          <ul className="last-list">
            <li>
              <Link><FormattedMessage id='terms'></FormattedMessage></Link>
            </li>
            <li>
              <Link><FormattedMessage id='privacy2'></FormattedMessage></Link>
            </li>
            <li>
              <Link><FormattedMessage id='store2'></FormattedMessage></Link>
            </li>
          </ul>
        </div>
      </footer>
    </IntlProvider>
  )
}

export default Footer
