// Dependencias
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useContext } from 'react'
// Estilo
import './App.css'
// Contextos
import { SelectedBookContextProvider } from '../../context/SelectedBookContext'
import { AuthContext } from '../../context/AuthContext'
import { BooksContextProvider } from '../../context/BooksContext'
// Componentes
import Header from '../Header/Header'
import MainCover from '../MainCover/MainCover'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import SearchList from '../SearchList/SearchList'
import BookCard from '../BookCard/BookCard'
import EditReviewForm from '../EditReviewForm/EditReviewForm'
import EditBookForm from '../EditBookForm/EditBookForm'
import AddBookForm from '../AddBookForm/AddBookForm'
import MyActivity from '../MyActivity/MyActivity'

const App = () => {
  const { userLog } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <div className='App'>
        <BooksContextProvider>
          <Header />
          <Switch>
            <SelectedBookContextProvider>
              <Route path='/' exact component={!userLog.logged ? MainCover : SearchList} />
              <Route path='/signup' exact component={Signup} />
              <Route path='/signin' exact component={Signin} />
              <Route path='/edit-review/:reviewId' exact component={!userLog.logged ? MainCover : EditReviewForm} />
              <Route path='/book/:bookId' exact component={!userLog.logged ? MainCover : BookCard} />
              <Route path='/edit-book/:bookId' exact component={!userLog.logged ? MainCover : EditBookForm} />
              <Route path='/add-book' exact component={!userLog.logged ? MainCover : AddBookForm} />
              <Route path='/my-activity' exact component={!userLog.logged ? MainCover : MyActivity} />
            </SelectedBookContextProvider>
          </Switch>
        </BooksContextProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
