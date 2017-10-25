var express = require('express');
var router = express.Router();
var api = require('../api/d2endpoints');

/* searchPlayer */
router.get('/v1/searchplayer', function(req, res, next) {
  api.searchDestinyPlayer(req.query.membershipType, req.query.displayName, function(json) {
    res.json(json);
  })
});

/* getProfile */
router.get('/v1/getprofile', function(req, res, next) {
  api.getProfile(req.query.membershipType, req.query.destinyMembershipId, function(json) {
    res.json(json);
  })
});

module.exports = router;
