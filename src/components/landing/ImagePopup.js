import React from "react";
function ImagePopup (props){
    return (
        <div onClick={props.closeAll} className={`popup ${props.card ? 'popup_active' : ''}`}>
        <div className="image-container" onClick={e=>e.stopPropagation()}>
          <button
            className="image-container__close-icon close-icon"
            id="close-icon"
            type="button"
            onClick={props.closeAll}
          />
          <img className="image-container__open-image" src={props.card?.link} alt={props.card?.name} />
          <figcaption className="image-container__title">{props.card?.name}</figcaption>
        </div>
      </div>
    )
}
export default ImagePopup