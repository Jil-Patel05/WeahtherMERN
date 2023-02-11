import React, { createContext, useReducer } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Weather from './component/Weather'
import Signin from './component/Signin'
import Signup from './component/Signup'
import Logout from './component/Logout'
import Error1 from './component/Error1'
import "./App.css"
import Footer from './component/Footer'
import { initialstate, reducer } from './reducer/reducer'

export const Usercontext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <>
            <Usercontext.Provider value={{ state, dispatch }}>
                <Navbar />
                <Routes>
                    <Route exact="true" path='/' element={<Home />} />
                    <Route exact="true" path='/about' element={<About />} />
                    <Route exact="true" path='/weather' element={<Weather />} />
                    <Route exact="true" path='/signin' element={<Signin />} />
                    <Route exact="true" path='/signup' element={<Signup />} />
                    <Route exact="true" path='/logout' element={<Logout />} />
                    <Route exact="true" path='*' element={<Error1 />} />
                </Routes>
                {/* <Footer /> */}
            </Usercontext.Provider>

        </>
    );
}

export default App