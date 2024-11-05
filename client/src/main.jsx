import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { Toaster } from './components/ui/toaster.jsx'
import { ToastProvider } from './components/ui/toast.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <Toaster/>
    <App />
    
    </Provider>
    </BrowserRouter>
)
