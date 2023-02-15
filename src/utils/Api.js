export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl
    this._headers = headers
  }
  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    }
    )
      .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  }
  changeUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
      })
    })
    .then(this._checkResponse)
      
  }
  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: 
       this._headers,
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
    }
    )
      .then(this._checkResponse)
  }

  getLikeInfo() {
    return fetch(`${this._baseUrl}cohort-54/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  }
  deleteMyCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9'
      }
    })
      .then(this._checkResponse);
  }

  setLikeCard(id, like) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: !like ? 'DELETE' : 'PUT',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  // delteLikeCard(id) {
  //   return fetch(`${this._baseUrl}/cards/${id}/likes`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   })
  //     .then(this._checkResponse);
  // }
  changeUserAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${link}`
      })
    })
      .then(this._checkResponse);
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка:${res.status} ${res.statusText}`);
    }
  }

}

 const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
      authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9',
      'Content-Type': 'application/json'
  }
})

export {api}

