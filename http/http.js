let axios = require('axios')
let qs = require('qs')

let post = (url, postData) => {
    postData = {
        '': JSON.stringify(postData)
    }
    return axios({
        method: 'post',
        url,
        data: qs.stringify(postData),
        timeout: 60000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports.post = post
