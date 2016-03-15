var $ = require('./libs/zepto.js'),
    constant = require('./constants.js'),
    weather = require('./weather.js');

function init() {
  get();
}

function reload() {
  $('#sw-activity').remove();
  get(1);
}

/* gets activity data */
function get(fetchNewData) {
  var activityId = window.location.href.match(/\d+/g)[0];
  var weatherData = (!fetchNewData) ? localStorage['activitydata-' + activityId] : null;

  if (!weatherData) {
    $.getJSON('/api/v3/activities/' + activityId + '?access_token=' + constant.stravaKey, function(data){
      localStorage.setItem('activitydata-' + activityId, JSON.stringify(data));
      getWeather(data, activityId, fetchNewData);
    });
  } else {
    getWeather(JSON.parse(weatherData), activityId);
  }
}

/* get weather data for an activity */
function getWeather(data, id, fetchNewData) {
  var date = data.start_date_local_raw || data.start_date_local,
      day = date.split('T')[0];
      coords = data.start_latlng,
      localWeather = localStorage['weatherdata-' + day] || null;

  if (localWeather && !fetchNewData) {
    render(JSON.parse(localWeather), date, coords);
  } else {
    $.getJSON(weather.getWeatherAPIUrl(coords, date), function(weatherData) {

      var newData = [];
      for (var i = 0; i < weatherData.history.observations.length; i++) {
        newData.push(weather.filter(weatherData.history.observations[i], ['date','wdird','wspdi'] ))
      }

      localStorage.setItem('weatherdata-' + day, JSON.stringify(newData));
      render(newData, date, coords);
    });
  }
}

/* return the html payload for the activity page */
function render(weatherData, date, coords) {
  var wind = weather.windAvg(weatherData, date);
  var date = weather.date(date);
  var markup = ['<li id="sw-activity">',
                  '<strong>',
                    '<a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?airportorwmo=query&historytype=DailyHistory&backurl=%2Fhistory%2Findex.html&code=', coords.join(','), '&month=', date.month, '&day=', date.day, '&year=', date.year, '&apiref=', constant.apiref, '" target="_blank">',
                      weather.wind(wind.speed, wind.direction),
                    '</a>',
                  '</strong>',
                  '<div class="label">Wind Speed <a href="#" sw="activity.reload">Reload Weather</a></div>',
                '</li>'
                ].join('');

  var activityDom = document.querySelector('.secondary-stats');
  activityDom.innerHTML += markup
}

module.exports = {
  init: init,
  reload: reload
};