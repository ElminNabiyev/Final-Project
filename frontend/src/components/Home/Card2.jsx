import React from 'react'
import { useNavigate } from "react-router-dom";
function Card2(props) {

    const percent = {
        backgroundColor: "rgb(0, 116, 228)",
        padding: " 5px",
        fontSize: " 10px",
        borderRadius: " 5px",

    }
    const navigate=useNavigate()
    const price = {
        color: "gray",
        textDecoration: "line-through",
        fontSize: "clamp(0.625rem, 0rem + 2vw, 1.125rem)"
    }
    function getPercent(y) {
        return (y.price.slice(1)*y.discountPercent.slice(1,3)/100).toFixed(2)
    }
    function getPrice(x) {
        return x.price.slice(1)-getPercent(x)
    }
    return (
        <div className='games'>
            <div onClick={()=>navigate(`/${props.id}`)} className='gamePhoto'>
                <img src={props.img} alt="Game Photo" />
                <div className="overlay"></div>
            </div>
            <h3>{props.name}</h3>
            <div className='names'>
                <span style={props.discount ? percent:null} className='percent'>{props.discount && props.discountPercent}</span>
                <span style={props.discount ? price:null} className='price'>{props.price}</span>
                <span style={{fontSize: "clamp(0.625rem, 0rem + 2vw, 1.125rem)"}}>{props.discount && `$${getPrice(props)}`}</span>
            </div>
        </div>
    )
}

export default Card2
