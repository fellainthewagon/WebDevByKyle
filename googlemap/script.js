const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZmVsbGFpbnRoZXdhZ29uIiwiYSI6ImNrbjdscno5cDAxaDMycHBkdngwaDVleDUifQ.dw2zvTegTsGImv0GDFwt4w";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });
  map.addControl(directionControls, "top-left");
}

function successLocation(position) {
  //   console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([-2.24, 53.48]);
}
