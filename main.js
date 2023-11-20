import './style.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactApp from './frameworks/ReactApp.jsx'
import VueApp from './frameworks/VueApp.vue'
import { createApp } from 'vue';
import LitApp from './frameworks/LitApp.js';
customElements.define('lit-app', LitApp);

document.addEventListener('DOMContentLoaded', () => {
  const reactElement = document.getElementById('react');
  const reactRoot = createRoot(reactElement); // createRoot(container!) if you use TypeScript
  reactRoot.render(ReactApp());
  
  const vueElement = document.getElementById('vue');
  const vueApp = createApp(VueApp);
  vueApp.mount(vueElement);

  // Render Svelte component
  // const svelteElement = document.getElementById('svelte');
  // new SvelteApp({ target: '#svelte' });
  
  // // Render Lit component
  const litElement = document.createElement('div', { is: 'lit' })
  // const litElement = document.getElementsById('lit')
  customElements.whenDefined('lit-app').then(() => {
    litElement.appendChild(LitApp);
  });
});

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
