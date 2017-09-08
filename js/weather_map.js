(function() {
    "use strict";

    var DropPin = {
        lat: 29.4284,
        lng: -98.4870
    };
    console.log(DropPin);
    // lat, lon, pin
    function weatherInfo(lat, lng) {

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "564d2b6aa6acb71fd8eba66aca7aff6a",
            // q:     "San Antonio, TX",
            lat:  DropPin.lat,
            lon: DropPin.lng,
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

            }
            $('.city').html(data.city.name);
        });
    }

    weatherInfo();

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
    // var Downtown = { lat: 29.424122, lng: -98.493629};

    $("#lat-long").click(function () {
        DropPin.lat = Number($("#lat").val());
        DropPin.lng = Number($("#long").val());

        $('#weatherInfo').html("");

        //Add the marker to our existing map
        var marker = new google.maps.Marker({
            position: DropPin,
            map: map
        });

        map.setCenter(DropPin);
        weatherInfo(DropPin);
    })


})();