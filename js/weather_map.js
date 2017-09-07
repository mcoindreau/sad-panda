(function() {
    "use strict";

    console.log("hello");



    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "564d2b6aa6acb71fd8eba66aca7aff6a",
        q:     "San Antonio, TX",
        units: "imperial",
        cnt: 3
    }).done(function(data) {
        console.log(data);

        function temperatureConverter(valNum) {
            var valNum = parseFloat(valNum);
            data.main.temp.innerHTML=(valNum-32)/1.8;
            console.log(valNum);

        }
// test
        for (var i = 0; i < data.list.length; i++) {

            var h2 = "<h2>" + Math.round(data.list[i].main.temp) + "º" + "/" + Math.round(data.list[i].main.temp_min) + "º" + "</h2>";
            var icon = data.list[i].weather[0].icon;
            var url = "http://openweathermap.org/img/w/" + icon + ".png"
            var img = "<img src='" + url + "'>"
            var p3 = '<p>' + "Humidity: " + data.list[i].main.humidity + "%" +'</p>';
            var p4 = '<p>' + "Pressure:" + data.list[i].main.pressure + "Pa" +'</p>';
            var p5 = '<p>' + "Wind Speed" + data.list[i].wind.speed + "MPH" + '</p>';
            var p6 = '<p>' + data.list[i].weather[0].main + ": " + data.list[i].weather[0].description + '</p>';

            $('#weatherInfo').append(h2 + img + p3 + p4 + p5 + p6);


            //forecast broke it
            // var h2 = "<h2>" + data.main[i].temp + "</h2>"
            // var icon = data.weather[0].icon;
            // var td = "<td>";
            // var url = "http://openweathermap.org/img/w/" + icon + ".png"
            // var img = "<img src='" + url + "'>"
            // var p = '<p>' + "Description: " + data.weather[0].description + '</p>';
            // var p3 = '<p>' + "Humidity: " + data.main.humidity + '</p>';
            // var p4 = '<p>' + "Wind: " + data.wind.speed + '</p>';
            // var p5 = '<p>' + "Pressure: " + data.main.pressure + '</p>';
            // var tdd = "</td>";
            //
            // $('#weatherInfo').append(h2 + td + img + p + p3 + p4 + p5 + tdd); ---->
        }
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