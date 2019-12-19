import config from '../config';
import TokenService from '../services/token-service';

const ThingApiService = {
  getThings() {
    console.log(TokenService.getAuthToken());
    return fetch(`${config.API_ENDPOINT}/things`, {
      headers: {
        'authorization' : `basic ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getThing(thingId) {
    console.log(TokenService.getAuthToken());
    return fetch(`${config.API_ENDPOINT}/things/${thingId}`, {
      headers: {
        'authorization' : `basic ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getThingReviews(thingId) {
    console.log(TokenService.getAuthToken());
    return fetch(`${config.API_ENDPOINT}/things/${thingId}/reviews`, {
      headers: {
        'authorization' : `basic ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postReview(thingId, text, rating) {
    console.log(TokenService.getAuthToken());
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization' : `basic ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        thing_id: thingId,
        rating,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ThingApiService
