import React, { useEffect } from "react";
import { useState } from "react";
import AuthApi, { authApi } from "../../../utils/AuthApi";
import { Navigate, useNavigate } from "react-router";
import InfoToolTip from "./InfoToolTip";
import Header from "../header";
function SignIn (props){
    const [email, setIsEmail] = useState('')
    const [password, setIsPassword] = useState('')
    const [isOpen, setIsOpen] = useState('')
    const [isRight, setIsright] = useState(false)
    let nav = useNavigate()
    function onClose(){
        setIsOpen(false)
    }
    useEffect(()=>{
        props.onToken()
    })
    function handleSetEmail(e) {
        setIsEmail(e.target.value)
    }

    function handleSetPassword(e) {
        setIsPassword(e.target.value)
    }
  

    function handleSubmit (e){
        e.preventDefault()
        // handleAutorizUser(email, password)
        props.onAuthorize(email,password, (success, err) => {
            if(!success) {
                setIsOpen(true);
            }
        })
        
    }
    
    return(
        <>
        <Header/>
        <section className="register">
        <h2 className="register__text">Вход</h2>
        <form onSubmit={handleSubmit} className="form form-register">
        <input type="email" onChange={handleSetEmail} placeholder="Email" className=" form__ input form-register__input  form-register__input_type_email"/>
        <input type="Password" onChange={handleSetPassword} placeholder="Пароль" className="form__ input form-register__input form-register_input_type_pass"/>
        <button type="submit" className="form__button form-register__button">Войти</button>
        </form>
        <InfoToolTip onClose={onClose} onOpen={isOpen} onRight={isRight} />
    </section>
    </>
    )
}

export default SignIn