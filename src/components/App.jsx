import '../css/app.css'
import {Route, Routes, Navigate} from "react-router-dom";
import MainScreen from "./MainScreen.jsx";
import SearchScreen from "./SearchScreen.jsx"
import Nav from "./Nav.jsx";
import Error from "./Error.jsx";

function App() {

  return (
      <div className={'main'}>
          <div className="main_container">
              <Routes>
                  <Route path='/' element={<MainScreen/>}/>
                  <Route path='/search' element={<SearchScreen/>}/>
                  <Route path='*' element={<Error/>}/>
              </Routes>
          </div>
        <Nav/>
      </div>
  )
}

export default App
