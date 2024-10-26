import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './components/app/App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

reportWebVitals()
