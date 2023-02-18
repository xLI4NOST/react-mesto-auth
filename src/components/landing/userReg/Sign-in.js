import React, { useEffect } from "react";
import { useState } from "react";
import AuthApi, { authApi } from "../../../utils/AuthApi";
import { Navigate, useNavigate } from "react-router";
import InfoToolTip from "./InfoToolTip";
import Header from "../header";
import MobileMenu from "../mobileMenu";
function SignIn(props) {
    const [email, setIsEmail] = useState('')
    const [password, setIsPassword] = useState('')
    const [isOpen, setIsOpen] = useState('')
    const [isRight, setIsright] = useState(false)
    function onClose() {
        setIsOpen(false)
    }
    useEffect(() => {
        props.onToken()
    })
    function handleSetEmail(e) {
        setIsEmail(e.target.value)
    }

    function handleSetPassword(e) {
        setIsPassword(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        props.onAuthorize(email, password, (success, err) => {
            if (!success) {
                setIsOpen(true);
            }
        })

    }

    return (
        <>
            <Header isBurger={props.isBurger} setIsBurger={props.setIsBurger} />
            <section className="register">
                <h2 className="register__text">Вход</h2>
                <form onSubmit={handleSubmit} className="form form-register">
                    <input type="email" value={email || ''} onChange={handleSetEmail} placeholder="Email" className=" form__ input form-register__input  form-register__input_type_email" />
                    <input type="Password" value={password || ''} onChange={handleSetPassword} placeholder="Пароль" className="form__ input form-register__input form-register_input_type_pass" />
                    <button type="submit" className="form__button form-register__button">Войти</button>
                </form>
                <InfoToolTip onClose={onClose} onOpen={isOpen} onRight={isRight} />
            </section>
        </>
    )
}

export default SignIn