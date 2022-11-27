import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from '../pages/Homepage'
import Map from '../pages/Map'
import Reviews from '../pages/Reviews'
import SchoenbergHall from '../pages/maps/SchoenbergHall'
import BoelterHall from '../pages/maps/BoelterHall'
import Premium from '../pages/Premium'
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
                <Route path = "/premium" element = {
                    <Premium />
                } />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter