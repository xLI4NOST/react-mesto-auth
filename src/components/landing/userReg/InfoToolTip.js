import React from "react";
import noRight from '../../../images/vector/Unionnoright.svg'
import right from '../../../images/vector/Unionright.svg'

function InfoToolTip (props){
return (
    <div className={`popup infoToolTipOverlay ${props.onOpen ? 'popup_active' : ""}`}>
        <div className=" menu infoToolTipOverlay__menu">
        <button className="menu__close-icon" onClick={props.onClose}/>
        <img className="infoToolTipOverlay__image" src={`${props. onRight ? right : noRight }`}/>
        <h2 className="infoToolTipOverlay__text">{props.onRight? 'Вы успешно зарегистрировались' :'Что то пошло не так! Попробуйте еще раз'  }</h2>
        </div>
    </div>
)
}

export default InfoToolTip