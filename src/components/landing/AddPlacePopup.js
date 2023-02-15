import React, { useEffect, useState } from "react";
import PopupWithForm from "./popupWithForm";

function AddPlacePopup(props) {
    const [place, setPlace] = useState('')
    const [link, setLink] = useState('')

    useEffect(() => {
        setPlace('')
        setLink('')
    }, [props.isOpen])

    function handleSetPlace(e) {
        setPlace(e.target.value)
    }

    function handleSetLink(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddCard({
            place: place,
            link: link
        })
        props.onClose()
    }

    return (
        <PopupWithForm
            name='cards'
            title='Новое место'
            closeAll={props.onClose}
            isOpen={props.isOpen}
            buttonText={'Создать'}
            className="menu__button menu-cards__buttonCreate menu__submit form__button_active"
            onSubmit={handleSubmit}
        >
            <input
                onChange={handleSetPlace}
                value={place || ''}
                id="cardName"
                type="text"
                name="name"
                placeholder="Название"
                minLength={2}
                maxLength={30}
                required=""
                noValidate=""
                className="form__input form-cards__input form-cards__input_type_text"
            />
            <span id="cardName-error" className="error-span" />
            <input
                onChange={handleSetLink}
                value={link || ''}
                id="link"
                type="url"
                name="link"
                required=""
                noValidate=""
                minLength={2}
                placeholder="Ссылка на картинку"
                className="form__input form-cards__input form-cards__input_type_link"
            />
            <span id="link-error" className="error-span" />

        </PopupWithForm>
    )
}

export default AddPlacePopup