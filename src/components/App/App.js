import Header from '../Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import MainCover from '../MainCover/MainCover'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import SearchList from '../SearchList/SearchList'
import { BooksContextProvider } from '../../context/BooksContext'
import BookCard from '../BookCard/BookCard'

const App = () => {
  const { userLog } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <div className='App'>
        <BooksContextProvider>
          <Header />
          <Switch>
            <Route path='/' exact component={!userLog.logged ? MainCover : SearchList} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/signin' exact component={Signin} />
            <Route path='/book/:bookId' exact component={!userLog.logged ? MainCover : BookCard} />
          </Switch>
        </BooksContextProvider>
      </div>
    </BrowserRouter>
  )
}

export default App

/* Dependiendo del estado del loggeo podemos establecer un grid u otro */
