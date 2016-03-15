var $ = require('./libs/zepto.js'),
        constant = require('./constants.js'),
        weather = require('./weather.js');

function reload() {
  $('.sw-segment-weather').remove();
  get(1);
}

/* return the payload for an effort */
function render(weatherData, id, date, coords) {
  var wind = weather.windAvg(weatherData, date);
  var date = weather.date(date);
  var markup = ['<div style="display:inline;" class="sw-segment-weather"> - <a title="wind in MPH" href="http://www.wunderground.com/cgi-bin/findweather/getForecast?airportorwmo=query&historytype=DailyHistory&backurl=%2Fhistory%2Findex.html&code=', coords.join(','), '&month=', date.month, '&day=', date.day, '&year=', date.year, '&apiref=', constant.apiref, '" target="_blank">',
                    weather.wind(wind.speed, wind.direction),
                  '</a> <a href="#" sw="effort.reload">&#8635;</div>',
                ].join('');

  var effortDom = document.querySelector('#results a[href="/segment_efforts/' + id + '"');
  effortDom.parentNode.innerHTML += markup;
}

/* get data from an individual effort */
function get(fetchNewData) {
  var segmentId = window.location.href.match(/\d+/g)[0];

  if (fetchNewData || !localStorage['effortdata-'+segmentId]) {
    $.getJSON('/api/v3/segments/' + segmentId + '/leaderboard?access_token=' + constant.stravaKey, function(data){

      var newData = [], entry;
      for (var i = 0; i < constant.effortNum; i++) {
        entry = data.entries[i];
        newData.push(weather.filter(entry, ['effort_id', 'start_date_local', 'start_date_local_raw']));
      }

      localStorage.setItem('effortdata-' + segmentId, JSON.stringify(newData));
      $.getJSON('/stream/segments/' + segmentId, function(coords){
        localStorage.setItem('coords-' + segmentId, JSON.stringify(coords.latlng[0]));
        getWeather(newData, coords.latlng[0], fetchNewData);
      });

    });

  } else {
    getWeather(JSON.parse(localStorage['effortdata-' + segmentId]), JSON.parse(localStorage['coords-' + segmentId]));
  }
}

/* get weather data for a particular effort */
function getWeather(data, coords, fetchNewData) {
  $.each(data, function(i, athleteInfo){
    var date = athleteInfo.start_date_local_raw || athleteInfo.start_date_local;
    var day = date.split('T')[0];
    var id = athleteInfo.effort_id;
    var localWeather = localStorage['weatherdata-' + day] || null;
    // if local storage weather is already set


    if (i < constant.effortNum) {
      if (!fetchNewData && localWeather) {
        render(JSON.parse(localWeather), id, date, coords);
      } else { // if its not set, call wunderground api
        $.getJSON(weather.getWeatherAPIUrl(coords, date), function(weatherData) {

          var newData = [];
          for (var i = 0; i < weatherData.history.observations.length; i++) {
            newData.push(weather.filter(weatherData.history.observations[i], ['date','wdird','wspdi'] ))
          }

          localStorage.setItem('weatherdata-' + day, JSON.stringify(newData));
          render(newData, id, date, coords);
        });
      }
    }
  });
}

module.exports = {
  get: get,
  reload: reload
};