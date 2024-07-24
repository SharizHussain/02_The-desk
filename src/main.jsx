import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Router from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)


// .warning{
//   height: 14.3vw;
//   width: 23vw;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   background: url('/src/assets/pic/cursed-hd-wallpaper-wallpaper-preview.jpg');
//   margin: -16.7vw 0 0 67.5vw;
//   transform: rotate(15deg) rotateX(0deg) rotateY(0deg) skew(-18deg) skewY(0deg) skewX(25deg);
//   /* transform-origin: center; */
// }

// .warning{
//   height: 13vw;
//   width: 24.8vw;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   background: url('/src/assets/pic/cursed-hd-wallpaper-wallpaper-preview.jpg');
//   margin: -16.4vw 0 0 66.5vw;
//   transform: rotate(-2deg) skew(-25deg) skewY(15.5deg) skewX(18deg);
//   /* transform-origin: center; */
// }