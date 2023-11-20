import './style.css'
import { createRoot } from 'react-dom/client';
import ReactApp from './frameworks/ReactApp.jsx'
import VueApp from './frameworks/VueApp.vue'
import { createApp } from 'vue';
import LitApp from './frameworks/LitApp.js';

const getRenderTime = (render, framework) => {
  console.log(`RenderTime -> ${framework}`);
  console.time('renderTime');
  render();
  console.timeEnd('renderTime');
}
const loadClient = {
  'react': () => createRoot(document.getElementById('react')).render(ReactApp()),
  'vue': () => createApp(VueApp).mount(document.getElementById('vue')),
  'lit': () => new LitApp()
}
const initializeApplication = () => {
  Object.keys(loadClient).forEach((client) => getRenderTime(loadClient[client], client))
}

document.addEventListener('DOMContentLoaded', () => {
  initializeApplication();
});