var constant = require('./constants.js'),
    activity = require('./activity.js'),
    effort = require('./effort.js');

module.exports = {
  /* render the logo for Wunderground */
  logo: function(selector) {
    var imgUrl = chrome.extension.getURL("images/wu.svg");
    var logo = '<img src="' + imgUrl + '" style="width:180px"/ >';
    selector.innerHTML += 'Weather data by <a href="http://www.wunderground.com/?apiref=' + constant.apiref + '" target="_blank">' + logo + '</a>';
  },

  /* publish help for setting up wunderground API key */
  keys: function() {
    if (!constant.wundergroundKey()) {
      console.warn('It looks as though you don\'t have a Wunderground API key set on your browser. Please navigate to http://www.wunderground.com/weather/api/ and register an account and application. Don\'t worry, it\'s free. Once you\'ve done this, run this command in your browser:');
      console.log("localStorage.setItem('strava-weather-wunderground-key','<your wunderground key>');");
      console.warn('Once you\'ve done this, refresh the browser.');
    }

    if (!constant.stravaKey) {
      console.warn('You need to set up your own Strava API key (sorry, not publishing mine for now...). You can get your strava API key here https://www.strava.com/settings/api Once youve got a key, set it by running');
      console.log("localStorage.setItem('strava-weather-strava-key','<your strava API key>');");
      console.warn('Once you\'ve done this, refresh the browser.');
    }


    return (!constant.wundergroundKey() || !constant.stravaKey) ? false : true;
  },

  /* sometimes people put their sponsors instead of their names "Michael Jackson PRO TEAM CYLCERY VELO RAPHA CHAMOIS", fixes that */
  fixTables: function() {
    var style = '<style type="text/css">.ldrboard td.athlete a {white-space:nowrap; text-overflow:ellipsis; overflow:hidden; width:200px; display:inline-block}</style>'
    document.head.innerHTML += style;
  },

  /* start the chrome extension */
  start: function () {
    var self = this;

    if (self.keys()) {
      // you're on an activities page (sloppy)
      if (window.location.href.indexOf('activities') + 1) {
        self.logo(document.querySelector('.activity-stats .inset'));
        activity.get(); return;
      }

      // you're on a segment page. (sloppy)
      if (window.location.href.indexOf('segments') + 1) {
        this.fixTables();
        self.logo(document.querySelector('.ldrboard .filters'));
        effort.get(); return;
      }
    }
  }
};