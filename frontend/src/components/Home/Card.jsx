import React, { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import { LangContext } from '../../context/LangProvider';
import "./Card.scss";
import { useNavigate } from 'react-router-dom';


function Card(props) {
    const navigate = useNavigate()

    const { messages, locale } = useContext(LangContext)
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <div className='card'>
                <img onClick={()=>navigate(`/${props.id}`)} src={props.img} alt="Game Photo" />
                <div className="features">
                    <h1>{props.name}</h1>
                    <br />
                    <p className='des'>{props.heading}</p>
                </div>
            </div>
        </IntlProvider>
    )
}

export default Card
