var constant = require('./constants.js');

module.exports = {
  /* return the markup for the wind arrow */
  renderArrow: function(dir) {
    dir = dir - 180; // flip arrow around direction the wind is blowing, not coming from
    return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAMAAAB8FU7dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTlGOUZBNjVBQTVCMTFFNDkzQkM4RkEzNzYwQTJCMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTlGOUZBNjZBQTVCMTFFNDkzQkM4RkEzNzYwQTJCMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OUY5RkE2M0FBNUIxMUU0OTNCQzhGQTM3NjBBMkIwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OUY5RkE2NEFBNUIxMUU0OTNCQzhGQTM3NjBBMkIwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtjKhBAAAAB7UExURQOWx////+b1+hygzPn9/gmYyMjo81+824283KTZ6+Hq84HL42aq0lel0Hax1jqt06rL5HjH4bjh73DD30612JrC3/f8/aHY6mOp0rzV6Selz97x+Beey43Q5gWXx4y73P3+/8Xa7IHK42C93ILL46Xa66nK5KPZ6////xgnzSAAAAApdFJOU/////////////////////////////////////////////////////8AUvQghwAAAKtJREFUeNpc0EUShEAQRNEs3N2d0b7/CaeNGCA3NH/1osD0HOd44Xg83XsybNu4pRcQXpNlAqZ1SW9EEfxLSvHJkJ6Tg5gohnNKLjwiD+4/GTYCogDKIVOIhPgS5YAS7CLtyiGSj4jklANSkKmkHNACNemAFvTr2msHpKDuwNfV0gH2QMJ/h3ke+Ec4IG6wVMXG2FZUi7gHvpjy8TjomE/wUbYNO61py58AAwDvFCNPWj/szAAAAABJRU5ErkJggg=="/ style="transform:rotate(' + dir + 'deg)scale(.7);">';
  },

  /* return wind in mph */
  wind: function(speed, dir) {
    var self = this;
    if (speed) {
      return [
        Math.round(speed),
        'mph',
        self.renderArrow(dir),
      ].join('');
    } else {
      return 'No Data';
    }
  },

  /* formula for averaging the wind over a few data points */
  windAvg: function(weather, date) {
    var observations = weather.history.observations, i, len;

    var hour = date.split('T')[1].split(':')[0];
    var avgSpeed = 0, avgDir = 0, match = 0;

    for (i = 0, len = observations.length; i < len; i++) {
      var hourWeather = observations[i];
      if (+hourWeather.date.hour === +hour && hourWeather.wspdi != '-9999') {

        avgSpeed += +hourWeather.wspdi;
        if (+hourWeather.wdird > 179) {
          hourWeather.wdird = +hourWeather.wdird - 360;
        }
        avgDir += +hourWeather.wdird;
        match++;
      }
    }

    if (match) {
      avgSpeed = (avgSpeed/match);
      avgDir = (avgDir/match);
    }

    return {
      speed: avgSpeed,
      direction: avgDir
    };
  },

  /* doesnt really belong here... */
  /* given a string format date, return an array with month day and year split up */
  date: function(date) {
    date = date.split('T')[0].split('-');
    month = new Date(Date.parse(date[1] +" 1, 2012")).getMonth()+1;

    return {
      year: date[0],
      month: month,
      day: date[2]
    };
  },

  /* return weather API url based on lat/lon and time*/
  getWeatherAPIUrl: function(coords, date) {
    date = date.split('T')[0].split('-').join('');
    return [
      constant.apiUrl, constant.wundergroundKey,
      '/history_',
      date,
      '/q/',
      coords.join(','), '.json?apiref=', constant.apiref
    ].join('');
  }
};