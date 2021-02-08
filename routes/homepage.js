const SpotifyWebApi = require("spotify-web-api-node");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("homepage");
})

router.get('/artist-search', (req, res, next) => {
    let artist = req.query.myArtist

    spotifyApi
  .searchArtists(/*'HERE GOES THE QUERY ARTIST'*/)
  .then(data => {
    console.log('The received data from the API: ', data.body);
    // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    res.render('artist-search-results.hbs', {artist})
  })
  .catch(err => console.log('The error while searching artists occurred: ', err));

})

module.exports = router;