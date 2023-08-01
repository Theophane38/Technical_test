import * as axios from 'axios'
export const Methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
}

export const makeRequest = (url, type) => {
    return new Promise((resolve, reject) => {
        let headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
        let options = {
            method: type,
            headers,
        }
        axios
            .request(url, options)
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                if (error.response) {
                    reject(error.response.data)
                    return
                }
                reject(error)
            })
    })
}
