var $ = require('./libs/zepto.js'),
    constant = require('./constants.js'),
    weather = require('./weather.js');

module.exports = {
  /* get weather data for an activity */
  getWeather: function(data, id) {
    var self = this;
    var date = data.start_date_local_raw || data.start_date_local,
        day = date.split('T')[0];
        coords = data.start_latlng,
        localWeather = localStorage['weatherdata-' + day] || null;

    if (localWeather) {
      self.render(JSON.parse(localWeather), date, coords);
    } else {

      $.getJSON(weather.getWeatherAPIUrl(coords, date), function(weatherData) {
        localStorage.setItem('weatherdata-' + day, JSON.stringify(weatherData));
        self.render(weatherData, date, coords);
      });
    }
  },

  /* gets activity data */
  get: function() {
    var self = this;
    var activityId = window.location.href.match(/\d+/g)[0];
    var weatherData = localStorage['activitydata-' + activityId] || null;

    if (!weatherData) {
      $.getJSON('/api/v3/activities/' + activityId + '?access_token=' + constant.stravaKey, function(data){
        localStorage.setItem('activitydata-' + activityId, JSON.stringify(data));
        self.getWeather(data, activityId);
      });
    } else {
      self.getWeather(JSON.parse(weatherData), activityId);
    }
  },

  /* return the html payload for the activity page */
  render: function(weatherData, date, coords) {
    var wind = weather.windAvg(weatherData, date);
    var date = weather.date(date);
    var markup = ['<li>',
                    '<strong>',
                      '<a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?airportorwmo=query&historytype=DailyHistory&backurl=%2Fhistory%2Findex.html&code=', coords.join(','), '&month=', date.month, '&day=', date.day, '&year=', date.year, '&apiref=', constant.apiref, '" target="_blank">',
                        weather.wind(wind.speed, wind.direction),
                      '</a>',
                    '</strong>',
                    '<div class="label">Wind Speed</div>',
                  '</li>'
                  ].join('');

    var activityDom = document.querySelector('.inline-stats');
    activityDom.innerHTML += markup
  }
};