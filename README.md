# StravaWeather
Displays historical weather data on segment efforts and activities
![StravaWeather screenshot](https://raw.githubusercontent.com/o2dazone/StravaWeather/master/images/screenshot.png "StravaWeather screenshot")

# Install
## Keys
First you need your own Wunderground API (http://www.wunderground.com/weather/api) and Strava API (https://www.strava.com/settings/api) keys. Once these are set up, write them to your local storage by visiting Strava's website and running this in the console
```
localStorage.setItem('strava-weather-wunderground-key','<your wunderground api key>'); localStorage.setItem('strava-weather-strava-key','<your strava api key>');
```
Once this is done, you should have the API data necessary to make calls.

## Install as Chrome Extension
Clone this repo down. Open up Chrome, and go to your Extensions. Check the box "Developer Mode" and click the button "Load unpacked extension...". Navigate to this directory, and enjoy!

# Why
I got tired of seeing people putting one another on blast for a KOM. This demystifies a lot of what went down.

# I GOT A LEGIT KOM, THE WEATHER DATA IS WRONG!!!!
This might be true, which is why I also include a link to Wunderground's historical weather page on the mph/arrow.