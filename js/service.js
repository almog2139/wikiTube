'use strict'
function getVideo(url) {
    console.log('Getting with Axios...');
    return axios.get(url)
            .then(res => {
                console.log('Axios res:', res.data);
                return res.data
            })
}