
function testGeoloc() {
    var div = document.getElementById("demoGeoloc");
    if (!navigator.geolocation) {
        div.innerHTML = 'Erreur : votre navigateur ne supporte pas l\'API de Géolocalisation HTML 5';
        return;
    }
    div.innerHTML = 'Demande en cours...';
    navigator.geolocation.watchPosition(
        // Succès
        function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            div.innerHTML = 'Lat: '+lat+'  Lng: '+lng;
            div.style.height = '500px';
            var options = {
                zoom: 13,
                center: new google.maps.LatLng(lat, lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(div, options);
            var marker = new google.maps.Marker({ position: options.center });
            marker.setMap(map);
        },
        // Erreur
        function (error) {
            div.innerHTML = 'Erreur : ' + error.message;
        },
        // Configuration
        {
            //maximumAge: 60000,
            //timeout: 2000
        }
    );
}
