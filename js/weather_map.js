(function() {
    "use strict";

    console.log("hello");

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: "564d2b6aa6acb71fd8eba66aca7aff6a",
        q:     "San Antonio, TX"
    }).done(function(data) {
        console.log(data);
        var icon = data.weather[0].icon;
            var url = "http://openweathermap.org/img/w/" + icon + ".png"
            var img = "<img src='" + url + "'>"
            var p = '<p>' + "Weather " + data.weather[0].description + '</p>';
            $('body').append(img+p);

            //console.log(url); //send back URL

    });

    // $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    //     APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
    //     lat:    29.423017,
    //     lon:   -98.48527,
    //     units: "imperial",
    //     cnt: 3
    // }).done(function(weather) {
    //     var icon = weather.list[0].weather[0].icon;
    //     var url = "http://openweathermap.org/img/w/" + icon + ".png"
    //     var img = "<img src='" + url + "'>"
    //     $('body').append(img);
    //     console.log(url);
    //     console.log(weather)
    // });

})();