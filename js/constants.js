module.exports = {
  wundergroundKey: localStorage.getItem('strava-weather-wunderground-key') || null,
  stravaKey: localStorage.getItem('strava-weather-strava-key') || null,
  effortNum: 3,
  apiUrl: '//api.wunderground.com/api/',
  apiref: '29a88f63f2af2eab'
}