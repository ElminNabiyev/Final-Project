import React from 'react'

function Card2(props) {

    const percent = {
        backgroundColor: "rgb(0, 116, 228)",
        padding: " 5px",
        fontSize: " 10px",
        borderRadius: " 5px",

    }

    const price = {
        color: "gray",
        textDecoration: "line-through",
        fontSize: "clamp(0.625rem, 0rem + 2vw, 1.125rem)"
    }
    return (
        <div className='games'>
            <div className='gamePhoto'>
                <img src={props.img} alt="Game Photo" />
                <div className="overlay"><span><i className="fa-regular fa-heart"></i></span></div>
            </div>
            <h3>{props.name}</h3>
            <div className='names'>
                <span style={props.discount ? percent:null} className='percent'>{props.discount && props.discountPercent}</span>
                <span style={props.discount ? price:null} className='price'>{props.price}</span>
                <span style={{fontSize: "clamp(0.625rem, 0rem + 2vw, 1.125rem)"}}>{props.discount && props.discountPrice}</span>
            </div>
        </div>
    )
}

export default Card2
