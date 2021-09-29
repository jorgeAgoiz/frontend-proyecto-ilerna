import Header from '../Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import MainCover from '../MainCover/MainCover'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={MainCover} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App
