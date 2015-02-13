module.exports = {
  getWuKeys: function() {
    this.keys = localStorage.getItem('strava-weather-wunderground-key').split(',');
  },

  wundergroundKey: function() {
    if (!localStorage.getItem('strava-weather-wunderground-key')) return null;

    if (!this.keys) {
      this.getWuKeys();
      this.keyItr = 0;
    }

    if (!this.effortNum) {
      this.effortNum = this.keys.length;
    }

    if (this.keyItr >= this.keys.length) {
      this.keyItr = 0;
    }

    var key = this.keys[this.keyItr];
    this.keyItr++;
    return key;
  },

  stravaKey: localStorage.getItem('strava-weather-strava-key') || null, // set by user
  apiUrl: '//api.wunderground.com/api/', // api url
  apiref: '29a88f63f2af2eab' // ref code for raindrops
}