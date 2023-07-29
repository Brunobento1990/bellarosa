import { BrowserRouter } from 'react-router-dom'
import { Layout } from './componets/layout'
import { AppRoutes } from './AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App