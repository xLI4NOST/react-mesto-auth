import React, { useContext, useEffect, useState } from "react";
import { api } from "../../utils/Api";
import Card from "./card";
import { userContext} from '../../contexts/CurrentUserContext.js'
function Main(props) {

    const apiUserContext = React.useContext(userContext)
    
    return (
        <div className="main">
            <section className="profile">
                <div className="profile__avatar-block">
                    <button type="button" onClick={props.changeAvatar} className="profile__avatar-edit-button" />
                    <img className="profile__avatar" src={apiUserContext.avatar} alt="Кусто" />
                </div>
                <article className="profile__info">
                    <div className="profile__heading">
                        <h1 className="profile__name">{apiUserContext.name}</h1>
                        <button type="button" onClick={props.onEditProfile} className="profile__edit-button" />
                    </div>
                    <p className="profile__subtitle">{apiUserContext.about}</p>
                </article>
                <button type="button" onClick={props.addNewCard} className="profile__add-button" />
            </section>
            <section className="elements">
                {props.cards.map((card) =>
                    <Card
                        onCardLike = {props.onCardLike}
                        key={card._id}
                        card={card}
                        likes={card.likes.length}
                        click={props.onCardClick}
                        onCardDelete ={props.onCardDelete}
                    />
                )}
            </section>
        </div>
    )
}
export default Main
