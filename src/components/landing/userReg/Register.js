import React from "react";
import AuthApi, { authApi } from "../../../utils/AuthApi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import InfoToolTip from "./InfoToolTip";
import Header from "../Header";
import { Link } from "react-router-dom";
function Register(props) {
    const [email, setIsEmail] = useState('')
    const [password, setIsPassword] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isRight, setIsright] = useState(false)
    const [isReg, setIsReg] = useState(true)

    const navigate = useNavigate()
    function handleSetEmail(e) {
        setIsEmail(e.target.value)
        console.log(email);
    }
    function onClose() {
        setIsOpen(false)
    }

    function handleSetPassword(e) {
        setIsPassword(e.target.value)
        console.log(password);
    }
    function handleRegistr(email, password) {
        authApi.postUser(email, password)
            .then((res) => {
                console.log(res);
                setIsOpen(true)
                setIsright(true)
                setIsReg(false)
                setTimeout(() => {
                    navigate('/sign-in')
                }, 3000);
            })
            .catch((err) => {
                setIsOpen(true)
                console.log(err);

            })
        console.log(email);
        console.log(password);
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleRegistr(email, password)

    }
 

    return (
        <>
            <Header onText={'Войти'} onReg={isReg} isBurger={props.isBurger} setIsBurger={props.setIsBurger} />
            <section className="register">
                <h2 className="register__text">Регистрация</h2>
                <form className="form form-register" onSubmit={handleSubmit}>
                    <input value={email || ''} onChange={handleSetEmail} type="email" placeholder="Email" className="form__ input form-register__input  form-register__input_type_email" />
                    <input value={password || ''} onChange={handleSetPassword} type="Password" placeholder="Пароль" className="form__ input form-register__input form-register_input_type_pass" />
                    <button type="submit" className="form__button form-register__button">Зарегистрироваться</button>
                </form>
                <button type="button" className="register__button-login"><Link  to='/sign-in' className="register__button-login">Уже зарегистрированы? Войти</Link></button>
                <InfoToolTip onClose={onClose} onOpen={isOpen} onRight={isRight} />
            </section>
        </>
    )
}

export default Register