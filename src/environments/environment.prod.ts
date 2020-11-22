export let SHOW_VEHICLES_WITHIN = 20;
export let POSITION_INTERVAL = 10 * 1000;
export let VEHICLE_LAST_ACTIVE_LIMIT = 2 * 60 * 1000; // 2 mins

export let DEAL_STATUS_PENDING = 'pending';
export let DEAL_STATUS_ACCEPTED = 'accepted';
export let TRIP_STATUS_GOING = 'going';
export let TRIP_STATUS_FINISHED = 'finished';
export let TRIP_STATUS_CANCELED = 'canceled';
export let DEAL_TIMEOUT = 20 * 1000; // 20s

export let ENABLE_SIGNUP = true;
export let SOS = "100";
export let DEFAULT_AVATAR = "http://placehold.it/150x150";

export const environment = {
  production: true,
  appName: 'Kugihan',
  firebase: {
    apiKey: "AIzaSyCXJaLVkEy81tB9pRqRlfSmuFyw54YFBqo",
    authDomain: "kugihan-express.firebaseapp.com",
    databaseURL: "https://kugihan-express.firebaseio.com",
    projectId: "kugihan-express",
    storageBucket: "kugihan-express.appspot.com",
    messagingSenderId: "434881853637",
    appId: "1:434881853637:web:3c636be1f31a23d42298ac",
    measurementId: "G-HHNE5SJPJ9"
  },
  langArr: [
    { name: 'English', code: 'en' },
    { name: 'española', code: 'es' },
    { name: 'عربى', code: 'ar' },
    { name: '中文', code: 'cn' }
  ], mapOptions: {
    zoom: 16,
    mapTypeControl: false,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  }
};
