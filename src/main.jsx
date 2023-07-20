import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SearchScreen from "./components/SearchScreen.jsx";
import Error from "./components/Error.jsx";
import '../src/css/index.css'

//konfiguracja routera
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
            path: 'search',
            element: <SearchScreen/>
            },
            {
                path: 'error',
                element: <Error/>
            }
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)