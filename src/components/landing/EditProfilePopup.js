import React, { useEffect, useState } from "react";
import PopupWithForm from "./popupWithForm";
import { userContext } from "../../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const apiUserContext = React.useContext(userContext)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    React.useEffect(() => {
        setName(apiUserContext.name);
        setDescription(apiUserContext.about);
      }, [apiUserContext, props.isOpen]); 

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeAbout(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          about: description
        });
        props.onClose()
      }

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            closeAll={props.onClose}
            isOpen={props.isOpen}
            buttonText={'Сохранить'}
            className="menu__button menu__submit form__button_active"
            onSubmit ={handleSubmit}
        >
            <input
                onChange={handleChangeName}
                value={name || ''}
                id="user-name"
                type="text"
                name="name"
                required=""
                minLength={2}
                maxLength={40}
                placeholder="Имя"
                className="form__input form__input_type_name"
            />
            <span id="user-name-error" className="error-span" />
            <input
                onChange={handleChangeAbout}
                value={description || ''}
                id="about"
                type="text"
                name="about"
                required=""
                minLength={2}
                maxLength={200}
                placeholder="Вид деятельности"
                className="form__input form__input_type_job"
            />
            <span id="about-error" className="error-span" />
        </PopupWithForm>
    )
}

export default EditProfilePopup