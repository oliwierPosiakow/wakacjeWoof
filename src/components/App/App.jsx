import './App.css'
import {Routes, Route, Router} from "react-router-dom";
import MainScreen from "../MainScreen/MainScreen.jsx";
import SearchScreen from "../SearchSreen/SearchScreen"
import Nav from "../Navigation/Nav.jsx";
function App() {

  return (
      <>
        <Routes>
          <Route exact path='/' element={<MainScreen/>}/>
          <Route path='/search' element={<SearchScreen/>}/>
        </Routes>
        <Nav/>
      </>
  )
}

export default App
