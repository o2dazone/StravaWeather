module.exports = {
  wundergroundKey: localStorage.getItem('strava-weather-wunderground-key') || null, // set by user
  stravaKey: localStorage.getItem('strava-weather-strava-key') || null, // set by user
  effortNum: 3, // number of efforts to get data for per leaderobard
  apiUrl: '//api.wunderground.com/api/', // api url
  apiref: '29a88f63f2af2eab' // ref code for raindrops
}