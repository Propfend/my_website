import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './resources/index.css'
import App from './components/App.jsx'

let root = document.getElementById('root');
let app = createRoot(root);

app.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
