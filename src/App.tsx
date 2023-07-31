import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './AppRoutes'
import { useLoader } from './componets/loader';

function App() {

  const Loader = useLoader();

  return (
    <BrowserRouter>
      <Loader.Component />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App