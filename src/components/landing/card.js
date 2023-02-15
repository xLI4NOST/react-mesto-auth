import React, { useState } from "react"
import { userContext } from '../../contexts/CurrentUserContext.js'
function Card(props) {
    function handleClick() {
        props.click(props.card);
      } 
      function hadleLikeClick (){
          props.onCardLike(props.card)
       
      }

     function handleDeleteClick (){
          props.onCardDelete (props.card)
      }

      const apiUserContext = React.useContext(userContext)
      const isOwn = props.card.owner._id === apiUserContext._id;
      const isLiked = props.card.likes.some(i => i._id === apiUserContext._id);
      const cardLikeButtonClassName = ( 
        `card__button-like ${isLiked && 'card__button-like_active'}` 
      );; 
    return (
        <div className="card">
            {isOwn&&<button className="card__button-delete" onClick={handleDeleteClick} type="button" />}
            <img src={props.card.link} onClick={handleClick} alt={props.card.name} className="card__image" />
            <div className="card__description">
                <h2 className="card__title">{props.card.name}</h2>
                <button  type="button" onClick={hadleLikeClick}  className={cardLikeButtonClassName } />
                <span id="like-info" className="like-info">{props.likes}</span>
            </div>
        </div>
    )
}

export default Card