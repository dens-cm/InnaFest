import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import theme from './theme/Index'
import Router from './routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider theme={theme}>
      <Router />
    </Provider>
  </StrictMode>
)