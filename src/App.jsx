import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import CountryDetail from './pages/CountyDetail'
import MainPage from './components/MainPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/country/:name' element={<CountryDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
