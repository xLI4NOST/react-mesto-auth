export default class AuthApi {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl
      this._headers = headers
    }
    postUser(email, password) {
        return fetch(`${this._baseUrl}/signup`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            "password": `${password}`,
            "email": `${email}` 
          })
        }
        )
        .then(this._checkResponse);
      }

      autorizeUser(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            "password": `${password}`,
            "email": `${email}` 
          })
        }
        )
        .then(this._checkResponse)
         
          .catch((err)=>{
            console.log(err);
          })
      }

      checkTokenUser(token) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
          },
        }
        )
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



const authApi = new AuthApi({
    baseUrl: 'https://auth.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json'
    }
  })
  export {authApi}