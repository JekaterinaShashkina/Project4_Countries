import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import CountryDetail from "./pages/CountryDetail"
import MainPage from './pages/MainPage';

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
