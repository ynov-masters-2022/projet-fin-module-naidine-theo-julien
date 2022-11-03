import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Recherche from './Recherche'
import Favorite from './Capital'
import Capital from "./Capital";

const routes = [
    {
        path: "/",
        component: Recherche
    },
    {
        path: "/Capital",
        component: Capital
    }
]

const Navigation = () => {
    return (
        <div>
            <Router>
                <Tabs>
                    <Tab label="Météo" to="/" component={Link}/>
                    <Tab label="Favoris" to="/favorite" component={Link}/>
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