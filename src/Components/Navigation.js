import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import SearchBar from './MainPage/SearchBar'
import Favorite from "./CapitalPage/Favorite";

const routes = [
    {
        path: "/",
        component: SearchBar
    },
    {
        path: "/Capitales",
        component: Favorite
    }
]

const Navigation = () => {
    return (
        <div>
            <Router>
                <Tabs value={false}>
                    <Tab to="/" label="Météo" component={Link}/>
                    <Tab to="/Capitales" label="Capitales" component={Link}/> 
                </Tabs>
                <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} exact path={route.path} element={<route.component/>}/>
                    ))}
                </Routes>
            </Router>
        </div>
    )
}

export default Navigation;