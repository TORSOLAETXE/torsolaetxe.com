import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const button = document.getElementsByClassName('side--menu-button');

// for (let i=0; i<button.length; i++) {
//     button[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     })
// }

ReactDOM.render(<App />, document.getElementById('root'));