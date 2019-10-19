import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//import Badge from './components/Badge/Badge'
import Home from "./pages/Home";
import BadgeNew from './pages/BadgeNew'
import Badges from "./pages/Badges";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Layout>
                <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/badges' component={Badges}/>
                        <Route exact path='/badges/new' component={BadgeNew}/>
                        <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
