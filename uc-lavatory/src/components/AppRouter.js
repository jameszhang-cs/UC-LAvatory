import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from '../pages/Homepage'
import Map from '../pages/Map'
import Reviews from '../pages/Reviews'
import SchoenbergHall from '../pages/maps/SchoenbergHall'
import BoelterHall from '../pages/maps/BoelterHall'
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
                <Route path = "/schoenberghall" element = {
                    <SchoenbergHall />
                } />
                <Route path = "/boelterhall" element = {
                    <BoelterHall />
                } />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter