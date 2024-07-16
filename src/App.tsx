import React from 'react';
import './App.css';
import {MoviesPage} from "./pages/MoviePages/MoviesPage";
import {Redirect, Route, Switch} from "react-router";
import {NavigationBar} from "./pages/Layouts/NavigationBar";
import {Footer} from "./pages/Layouts/Footer";
import {HomePage} from "./pages/HomePage/HomePage";
import {MoviesDetailsPage} from "./pages/MoviePages/MovieDetailsPage";

function App() {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <NavigationBar />
            <div className='flex-grow-1'>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/home' />
                    </Route>
                    <Route path='/home'>
                        <HomePage />
                    </Route>
                    <Route path='/movies'>
                        <MoviesPage />
                    </Route>
                    <Route path='/details/:id'>
                        <MoviesDetailsPage/>
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
