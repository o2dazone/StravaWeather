var $ = require('./libs/zepto.js'),
        constant = require('./constants.js'),
        weather = require('./weather.js');

module.exports = {
  getWeather: function(data, coords) {
    var self = this;
    $.each(data, function(i, athleteInfo){
      var date = athleteInfo.start_date_local_raw || athleteInfo.start_date_local;
      var id = athleteInfo.effort_id;
      var localWeather = localStorage['weatherdata-' + id] || null;
      // if local storage weather is already set

      if (i < constant.effortNum) {
        if (localWeather) {
          self.render(JSON.parse(localWeather), id, date, coords);
        } else { // if its not set, call wunderground api
          $.getJSON(weather.getWeatherAPIUrl(coords, date), function(weatherData) {
            localStorage.setItem('weatherdata-' + id, JSON.stringify(weatherData));
            self.render(weatherData, id, date, coords);
          });
        }
      }
    });

  },

  get: function() {
    var self = this;
    var segmentId = window.location.href.match(/\d+/g)[0];

    // if no segment data exists in localStorage
    if (!localStorage['effortdata-'+segmentId]) {
      // get segment data via API
      $.getJSON('/api/v3/segments/' + segmentId + '/leaderboard?access_token=' + constant.stravaKey, function(data){
        localStorage.setItem('effortdata-' + segmentId, JSON.stringify(data.entries));
        $.getJSON('/stream/segments/' + segmentId, function(coords){
          localStorage.setItem('coords-' + segmentId, JSON.stringify(coords.latlng[0]));
          self.getWeather(data.entries,coords.latlng[0]);
        });

      });

    } else {
      // fire looping logic based on localStorage
      self.getWeather(JSON.parse(localStorage['effortdata-' + segmentId]), JSON.parse(localStorage['coords-' + segmentId]));
    }
  },

  render: function(weatherData, id, date, coords) {

    var wind = weather.windAvg(weatherData, date);
    var date = weather.date(date);
    var markup = [' - <a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?airportorwmo=query&historytype=DailyHistory&backurl=%2Fhistory%2Findex.html&code=', coords.join(','), '&month=', date.month, '&day=', date.day, '&year=', date.year, '&apiref=', constant.apiref, '" target="_blank">',
                      weather.wind(wind.speed, wind.direction),
                    '</a>',
                  ].join('');

    var effortDom = document.querySelector('#results a[href="/segment_efforts/' + id + '"');
    effortDom.parentNode.innerHTML += markup;
  }
};