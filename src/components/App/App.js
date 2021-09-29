import Header from '../Header/Header'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
      </div>
    </BrowserRouter>
  )
}

export default App
