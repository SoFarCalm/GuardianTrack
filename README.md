# GuardianTrack
Destiny 2 app

## To run development server
    $ npm install
    $ DEBUG=guardiantrack:* npm run devstart

load http://localhost:3000/ in your browser to access the app

# API

External docs can be found here: https://bungie-net.github.io/multi/index.html

Destiny 2 API Endpoints follow API docs. Function names will match API endpoint with parameters matching those in docs.

For example [Destiny2.SearchDestinyPlayer](https://bungie-net.github.io/multi/operation_get_Destiny2-SearchDestinyPlayer.html#operation_get_Destiny2-SearchDestinyPlayer)
would be used by calling `api.searchDestinyPlayer(1, 'lazy9669')` or by hitting endpoint `/api/v1/getprofile?membershipType=1&displayName=lazy9669`

## Endpoints

## Search Player
Returns a list of Destiny memberships given a full Gamertag or PSN ID.

`GET /api/v1/searchplayer`

```
params: {
  membershipType: int
  displayName: string
}
```
## Get Profile
Returns Destiny Profile information for the supplied membership.

`GET /api/v1/getprofile`

```
params: {
  membershipType: int
  destinyMembershipId: string
}
```
