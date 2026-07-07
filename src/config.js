// When running locally, we use Vite's proxy ('').
// When deployed on GitHub Pages, replace the URL below with your active public tunnel URL (e.g. from localtunnel or ngrok).
export const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? ''
  : 'https://0366511c38b72d.lhr.life'; // <-- Replace with your active tunnel URL

