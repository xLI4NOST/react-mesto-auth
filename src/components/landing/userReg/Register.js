import React from "react";
import AuthApi, { authApi } from "../../../utils/AuthApi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import InfoToolTip from "./InfoToolTip";
import Header from "../header";
function Register(props) {
    const [email, setIsEmail] = useState('')
    const [password, setIsPassword] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isRight, setIsright] = useState(false)
    const [isReg, setIsReg]= useState(true)

    let navigate = useNavigate()
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
    // let navigate = useNavigate()
    // function signIn(){
    //     localStorage.removeItem('token');
    //     navigate('/sign-in');
    //   }

    return (
        <>
        <Header onText={'Войти'} onReg={isReg} />
            <section className="register">
                <h2 className="register__text">Регистрация</h2>
                <form className="form form-register" onSubmit={handleSubmit}>
                    <input value={email || ''} onChange={handleSetEmail} type="email" placeholder="Email" className="form__ input form-register__input  form-register__input_type_email" />
                    <input value={password || ''} onChange={handleSetPassword} type="Password" placeholder="Пароль" className="form__ input form-register__input form-register_input_type_pass" />
                    <button type="submit" className="form__button form-register__button">Зарегистрироваться</button>
                </form>
                <button type="button" className="register__button-login">Уже зарегистрированы? Войти</button>
                <InfoToolTip onClose={onClose} onOpen={isOpen} onRight={isRight} />
            </section>
        </>
    )
}

export default Register