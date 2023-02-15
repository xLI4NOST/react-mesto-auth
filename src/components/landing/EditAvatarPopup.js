import React, { useEffect, useState, useRef } from "react";
import PopupWithForm from "./popupWithForm";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef()

    useEffect (()=>{
        avatarRef.current.value = ""
    }, [props.isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
        props.onClose()
    }

    return (
        <PopupWithForm
            name='avatar'
            title='Сменить Аватар'
            closeAll={props.onClose}
            isOpen={props.isOpen}
            buttonText={'Сохранить'}
            className="menu-avatar__button menu__button menu__submit form__button_active"
            onSubmit={handleSubmit}
        >
            <input
                ref={avatarRef}
                id="avarat-link"
                type="url"
                name="link"
                required=""
                noValidate=""
                minLength={2}
                placeholder="Ссылка на картинку"
                className="form__input form-avatar__input"
            />
            <span
                id="avarat-link-error"
                className="error-span menu-avatar__error-span"
            />
        </PopupWithForm>
    )

}

export default EditAvatarPopup 