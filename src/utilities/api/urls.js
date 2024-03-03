var API_URL = 'http://localhost:8000/api/';
var hostname = window.location.hostname;
if (hostname === 'localhost') {
  API_URL = `http://${hostname}:8000/api/`;
} else {
  API_URL = `https://${hostname}/api/`;
}
export {API_URL};