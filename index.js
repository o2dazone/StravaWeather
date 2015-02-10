(function(d, w){
  var forecastKey = localStorage.getItem('strava-weather-forecast-key') || null,
      stravaKey = localStorage.getItem('strava-weather-strava-key') || null;

  var effortNum = 5; // number of leaders on a segment should we fetch weather data for

  /* jank getJSON helper method */
  function getJSON(url, callback, opts){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
      if(ajax.readyState === 4 && ajax.status === 200){
        var r = ajax.response;

        // parse to json if "string" json
        if (r.match(/^(\[|\{)/)) {
          r = JSON.parse(r);
        }

        callback(r, opts);
      }
    };

    ajax.open('GET', url, !0);
    ajax.send();
  }



  /* gather data from localStorage or API for individual activity */
  function fetchActivityWeather(data, activityId) {
    var lsWeather = localStorage['activity-' + activityId] || null;

    if (lsWeather) {
      // render arrow on activity page
      renderActivityWeather(JSON.parse(lsWeather));
    } else {
      getJSON(getForecastUrl(data.start_latlng, data.start_date), function(weatherData, activityId) {
        localStorage.setItem('activity-' + activityId, JSON.stringify(weatherData));
        renderActivityWeather(weatherData);
      }, activityId);
    }
  }

  /* gather data from localStorage or API for segments */
  function fetchEffortWeather(data, coords) {
    // adjust number of efforts to get wind data on here
    var i, atheleteInfo, date, effortId, lsWeather;
    for (i = 0; i < effortNum; i++) {
      athleteInfo = data[i];
      date = athleteInfo.start_date;
      effortId = athleteInfo.effort_id;
      lsWeather = localStorage['effort-' + effortId] || null;

      // if local storage weather is already set
      if (lsWeather) {
        renderEffortWeather(effortId, JSON.parse(lsWeather), coords);
      } else { // if its not set, call forecast.io api
        getJSON(getForecastUrl(coords, date), function(weatherData, effortId) {
          localStorage.setItem('effort-' + effortId, JSON.stringify(weatherData));
          renderEffortWeather(effortId, weatherData, coords);
        }, effortId);
      }
    }
  }




  /* create and inject activity wind data */
  function renderActivityWeather(weather) {
    var activityDom = d.querySelector('.inline-stats'),
        date        = d.querySelector('.details time').innerText.match(/,.*/)[0].split(' '),
        month       = date[1],
        day         = date[2].match(/\d+/),
        year        = date[3],
        coords      = [weather.latitude, weather.longitude];

    activityDom.innerHTML += ('<li><strong>' + getWind(weather.currently) +
                              '</strong><div class="label">Wind Speed <a href=' + getWundergroundUrl(coords, month, day, year) + ' target="_blank">(WG)</a></div></li>');
  }

  /* create and inject segment leaderboard wind data */
  function renderEffortWeather(effortId, weather) {
    var effortDom = d.querySelector('#results a[href="/segment_efforts/' + effortId + '"'),
        date      = effortDom.innerText.split(' '),
        month     = date[0],
        day       = date[1].match(/\d/),
        year      = date[2],
        coords    = [weather.latitude, weather.longitude];

    effortDom.parentNode.innerHTML += (getWind(weather.currently) +
                                      ' <a href=' + getWundergroundUrl(coords, month, day, year) + ' target="_blank">(WG)</a>');
  }



  /* return wind speed and direction */
  function getWind(wind) {
    return Math.round(wind.windSpeed) + ' mph' + getWindDirectionArrow(wind.windBearing);
  }

  /* get forecast.io endpoint url */
  function getForecastUrl(coords, date) {
    return 'https://api.forecast.io/forecast/' + forecastKey + '/' + coords.join(',') + ',' + date;
  }

  /* render wind direction */
  function getWindDirectionArrow(angle) {
    angle = angle - 270 //- 90 - 180, wind bearing is direction in which the wind comes from, 180 is direction the wind is blowing. 90 degree because the arrow graphic normally faces right
    return '<arrow style="margin:3px;-webkit-text-fill-color:white;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:#1AF;display:inline-block;transform:rotate(' + angle + 'deg);">&#10148;</arrow>'
  }

  /* get month day year WG url based on dom elements (super sloppy) */
  function getWundergroundUrl(coords, month, day, year) {
    // ugh...
    switch (month) {
      case 'Jan':
      case 'January':
        month = 1; break;
      case 'Feb':
      case 'February':
        month = 2; break;
      case 'Mar':
      case 'March':
        month = 3; break;
      case 'Apr':
      case 'April':
        month = 4; break;
      case 'May':
        month = 5; break;
      case 'Jun':
      case 'June':
        month = 6; break;
      case 'Jul':
      case 'July':
        month = 7; break;
      case 'Aug':
      case 'August':
        month = 8; break;
      case 'Sep':
      case 'September':
        month = 9; break;
      case 'Oct':
      case 'October':
        month = 10; break;
      case 'Nov':
      case 'November':
        month = 11; break;
      case 'Dec':
      case 'December':
        month = 12; break;
      default:
    }

    return 'http://www.wunderground.com/cgi-bin/findweather/getForecast?airportorwmo=query&historytype=DailyHistory&backurl=%2Fhistory%2Findex.html&code=' + coords.join(',')+'&month=' + month + '&day=' + day + '&year=' + year;
  }

  /* publish help for setting up forecast.io API key */
  function areKeysSet() {
    if (!forecastKey) {
      console.warn('It looks as though you don\'t have a Forecast.io API key set on your browser. Please navigate to https://developer.forecast.io/ and register an account. Don\'t worry, it\'s free. Once you\'ve done this, run this command in your browser:');
      console.log("localStorage.setItem('strava-weather-forecast-key','<your forecast.io key>');");
      console.warn('Once you\'ve done this, refresh the browser.');
    }

    if (!stravaKey) {
      console.warn('You need to set up your own Strava API key (sorry, not publishing mine for now...). You can get your strava API key here https://www.strava.com/settings/api Once youve got a key, set it by running');
      console.log("localStorage.setItem('strava-weather-strava-key','<your strava API key>');");
      console.warn('Once you\'ve done this, refresh the browser.');
    }


    return (!forecastKey || !stravaKey) ? false : true;

  }



  /* get wind data for a segment's leaderboard */
  function getSegmentWind() {
    var segmentId = w.location.href.match(/\d+/g)[0];

    // if no segment data exists in localStorage
    if (!localStorage['weatherdata-'+segmentId]) {
      // get segment data via API
      getJSON('/api/v3/segments/' + segmentId + '/leaderboard?access_token=' + stravaKey, function(data){
        localStorage.setItem('weatherdata-' + segmentId, JSON.stringify(data.entries));
        getJSON('/stream/segments/' + segmentId, function(coords){
          localStorage.setItem('coords-' + segmentId, JSON.stringify(coords.latlng[0]));
          fetchEffortWeather(data.entries,coords.latlng[0]);
        });

      });

    } else {
      // fire looping logic based on localStorage
      fetchEffortWeather(JSON.parse(localStorage['weatherdata-' + segmentId]), JSON.parse(localStorage['coords-' + segmentId]));
    }
  }

  /* get wind data for a single activity */
  function getActivityWind() {
    var activityId = w.location.href.match(/\d+/g)[0];
    var weatherData = localStorage['weatherdata-' + activityId] || null;

    if (!weatherData) {
      // get activity data via API
      getJSON('/api/v3/activities/' + activityId + '?access_token=' + stravaKey, function(data){
        localStorage.setItem('weatherdata-' + activityId, JSON.stringify(data));
        fetchActivityWeather(data, activityId);
      });
    } else {
      // fire looping logic based on localStorage
      fetchActivityWeather(JSON.parse(weatherData), activityId);
    }
  }





  function init() {
    if (areKeysSet()) {
      // you're on an activities page (sloppy)
      if (w.location.href.indexOf('activities') + 1) {
        getActivityWind(); return;
      }

      // you're on a segment page. (sloppy)
      if (w.location.href.indexOf('segments') + 1) {
        getSegmentWind(); return;
      }
    }
  }

  init();

}(document,window));