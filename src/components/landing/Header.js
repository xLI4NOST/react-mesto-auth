import React from 'react';
import headerLogo from '../../images/vector/header__logo.svg'
import burgerLine from '../../images/vector/Line\ 43.svg'
import closeIcon from '../../images/vector/Close_Icon.svg'
import { Link, useNavigate, useLocation, } from 'react-router-dom';



function Header(props) {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const isReg = pathname === "/sign-up";
    const isAuth = pathname === "/sign-in"

    function signOut() {
        if (props.onLogin){
            localStorage.removeItem('token');
            navigate('/sign-in');
            props.setLogin(false)
        }
        else{
            navigate('/sign-in');
        }
        
    }
    function signUp(){
        navigate('/sign-up')
    }
    function openBurger(){
        if (props.isBurger){
            props.setIsBurger(false)
        } else{
            props.setIsBurger(true)
        }
    }


    return (
        <header className='header'>
            <img className='header__logo' alt='logo' src={headerLogo} />
            <div className='header__login-box'>
                <h2 className='header__email'>{props.onLogin ? props.onEmail : ""}</h2>
                {isReg && <button  className='header__button'><Link className='header__button' to='/sign-up'>Войти</Link></button>}
                {isAuth && <button  className='header__button'><Link className='header__button' to='/sign-up'>Регистрация</Link></button>}
                {props.onLogin && <button onClick={signOut} className='header__button'>Выйти</button>}
            </div>
            <div onClick={openBurger} className='header__burger'>
                   { !props.isBurger &&<img className='header__burger__line' src={burgerLine}/>} 
                   { !props.isBurger &&<img className='header__burger__line' src={burgerLine}/>} 
                   { !props.isBurger &&<img className='header__burger__line' src={burgerLine}/>} 
                    {props.isBurger && <button className='header__burger__close-icon' src={closeIcon}></button>}
                 </div>
        </header>
    )
}
export default Header