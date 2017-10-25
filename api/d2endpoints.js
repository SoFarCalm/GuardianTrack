var rp = require('request-promise');

function getHeaders() {
  return {
    'X-API-Key': process.env.API_KEY
  }
}

exports.searchDestinyPlayer = function(membershipType, displayName, cb) {

  var options = {
    uri: `${process.env.API_HOST}/searchDestinyPlayer/${membershipType}/${displayName}/`,
    headers: getHeaders(),
    json: true
  };

  rp(options)
    .then(function(res) { cb(res) })
    .catch(function(err) { console.log(err) });
}

exports.getProfile = function(membershipType, destinyMembershipId, cb) {
  var options = {
    uri: `${process.env.API_HOST}/${membershipType}/Profile/${destinyMembershipId}?components=100,200`,
    headers: getHeaders(),
    json: true
  };

  rp(options)
    .then(function(res) { cb(res) })
    .catch(function(err) { console.log('err', err) });
}
