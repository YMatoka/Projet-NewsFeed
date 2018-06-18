const express = require('express')
const axios = require('axios')
const router = express.Router()

router.route('/news').get(function(request, response) {

   axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=75f7085e1f8147c8908257f1bdf92439')
   .then((httpResponse) => response.send(httpResponse.data))

})
router.route('/comment').get(function(request, response) {

  })

module.exports = router



