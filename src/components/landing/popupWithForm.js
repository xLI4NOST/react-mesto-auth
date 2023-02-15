import React, { useEffect, useState } from "react";
import { Transition } from 'react-transition-group';
const transitionStyles = {
    entering: 'popup_active',
    entered:  'popup_active',
    exiting:  'animation-close',
    exited:  '',
};

function PopupWithForm(props) {
    return (
<Transition in={props.isOpen} timeout ={700}>
       {state=> <div onClick={props.closeAll} className={`popup ${transitionStyles[state]}`}  >
            <div className="menu" onClick={e => e.stopPropagation()}>
                <button className="menu__close-icon close-icon" type="button" onClick={props.closeAll} />
                <h2 className="menu__title">{props.title}</h2>
                <form className="form" onSubmit={props.onSubmit} name={`${props.name}`}>
                    {props.children}
                    <button type="submit" className={props.className}>
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
}
        </Transition>

    )
}

export default PopupWithForm

// function closeAllPopups() {
//     const allPopup = document.querySelectorAll('.popup')
//     allPopup.forEach((elem) => {
//       elem.classList.add('animation-close')
//       setTimeout(() => elem.classList.remove('popup_active')
//         , 500);
//         setTimeout(() => elem.classList.remove('animation-close')
//         , 500); 
//     })
//   }