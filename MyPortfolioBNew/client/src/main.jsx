/* 
  File Name: main.jsx 
  Student Name: Fatima Mawaj 
  Student ID: 301315534 
  Date: [Insert Date Here]
  Description: This is the entry point for the React application. 
               It renders the App component within the root DOM element.
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
