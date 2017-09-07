(function() {
    "use strict";

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "564d2b6aa6acb71fd8eba66aca7aff6a",
        q:     "San Antonio, TX",
        units: "imperial",
        cnt: 3
    }).done(function(data) {
        console.log(data);

        for (var i = 0; i < data.list.length; i++) {
            var td = "<td>";
            var h2 = "<h2>" + Math.round(data.list[i].main.temp) + "º" + "/" + Math.round(data.list[i].main.temp_min) + "º" + "</h2>";
            var icon = data.list[i].weather[0].icon;
            var url = "http://openweathermap.org/img/w/" + icon + ".png"
            var img = "<img src='" + url + "'>"
            var p3 = '<p>' + "Humidity: " + data.list[i].main.humidity + "%" +'</p>';
            var p4 = '<p>' + "Pressure: " + data.list[i].main.pressure + " Pa" +'</p>';
            var p5 = '<p>' + "Wind Speed" + ": " + data.list[i].wind.speed + " MPH" + '</p>';
            var p6 = '<p>' + data.list[i].weather[0].main + ": " + data.list[i].weather[0].description + '</p>';
            var tdd = "</td>";

            $('#weatherInfo').append(td + h2 + img + p3 + p4 + p5 + p6 + tdd);

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

    });


    // Google map
    //set map options
    var mapOptions = {

        // Set zoom level
        zoom: 10,

        // Set center of the map
        center: {
            lat: 29.571011, lng: -98.595009
        }
    };

    // Render map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // Create lat and long for our marker position
    var Downtown = { lat: 29.424122, lng: -98.493629};


    //Add the marker to our existing map
    var marker = new google.maps.Marker({
        position: Downtown,
        map: map
    });



})();