import React from 'react';
import headerLogo from '../../images/vector/header__logo.svg'
import { Link, useNavigate, useLocation, } from 'react-router-dom';



function Header(props) {
    let navigate = useNavigate()
    let {pathname} = useLocation()
    const isReg = pathname === "/sign-up";
    const isAuth = pathname === "/sign-in"

    function signOut() {
        localStorage.removeItem('token');
        navigate('/sign-in');
        props.setLogin(false)
    }
    function signUp(){
        navigate('/sign-up')
    }


    return (
        <div className='header'>
            <img className='header__logo' alt='logo' src={headerLogo} />
            <div className='header__login-box'>
                <h2 className='header__email'>{props.onLogin ? props.onEmail : ""}</h2>
                {isReg && <button onClick={signOut} className='header__button'><Link className='header__button' to='/sign-up'>Войти</Link></button>}
                {isAuth && <button onClick={signUp} className='header__button'><Link className='header__button' to='/sign-up'>Регистрация</Link></button>}
                {props.onLogin && <button onClick={signOut} className='header__button'>Выйти</button>}
            </div>
        </div>
    )
}
export default Header