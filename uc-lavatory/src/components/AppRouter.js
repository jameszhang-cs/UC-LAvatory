import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from '../pages/Homepage'
import Map from '../pages/Map'
import Reviews from '../pages/Reviews'
import SchoenbergHall from '../pages/maps/SchoenbergHall'
import BoelterHall from '../pages/maps/BoelterHall'
import MathematicalSciences from '../pages/maps/MathematicalSciences'
import PritzkerHall from '../pages/maps/PritzkerHall'
import Geology from '../pages/maps/Geology'
import YoungHall from '../pages/maps/YoungHall'
import EngineeringIV from '../pages/maps/EngineeringIV'
import EngineeringV from '../pages/maps/EngineeringV'
import EngineeringVI from '../pages/maps/EngineeringVI'

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
                <Route path = "/mathematicalsciences" element = {
                    <MathematicalSciences />
                } />
                <Route path = "/pritzkerhall" element = {
                    <PritzkerHall />
                } />
                <Route path = "/geology" element = {
                    <Geology />
                } />
                <Route path = "/younghall" element = {
                    <YoungHall />
                } />
                <Route path = "/engineeringiv" element = {
                    <EngineeringIV />
                } />
                <Route path = "/engineeringv" element = {
                    <EngineeringV />
                } />
                <Route path = "/engineeringvi" element = {
                    <EngineeringVI />
                } />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter