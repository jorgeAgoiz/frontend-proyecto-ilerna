import Header from '../Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import MainCover from '../MainCover/MainCover'
import Signup from '../Signup/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={MainCover} />
          <Route path='/signup' exact component={Signup} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App
