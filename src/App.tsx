import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
