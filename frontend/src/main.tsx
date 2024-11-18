import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Provider } from 'react-redux';
import App from './App.tsx'
import { store } from './context/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
