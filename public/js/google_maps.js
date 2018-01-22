function myMap() {

    var mapProp =
    {
        center:new google.maps.LatLng(42.4068137,-71.12236),
        zoom:15,
    };
         
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}