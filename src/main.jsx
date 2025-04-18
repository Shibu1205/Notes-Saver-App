
import { createRoot } from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
  <Toaster />
  </Provider>   
)
