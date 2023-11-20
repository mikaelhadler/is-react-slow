import './style.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactApp from './frameworks/ReactApp.jsx'
import VueApp from './frameworks/VueApp.vue'
import { createApp } from 'vue';
import LitApp from './frameworks/LitApp.js';

const loadClient = {
  'react': () => createRoot(document.getElementById('react')).render(ReactApp()),
  'vue': () => createApp(VueApp).mount(document.getElementById('vue')),
  'lit': () => new LitApp()
}

document.addEventListener('DOMContentLoaded', () => {
  loadClient.react();
  loadClient.vue();
  loadClient.lit();
});