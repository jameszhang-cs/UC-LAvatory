import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from '../pages/Homepage.js'
import Map from '../pages/Map'
import Reviews from '../pages/Reviews'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {
                    <HomePage />
                } />
                <Route path = "/map" element = {
                    <Map />
                } />
                <Route path = "/reviews" element = {
                    <Reviews />
                } />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter