import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './partials/footer.jsx';
import Header from './partials/header.jsx';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Team from './pages/team.jsx';
import Fleet from './pages/fleet.jsx';
import Contact from './pages/contact.jsx';
import PageNotFound from './pages/page-not-found.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="app-main">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/fleet" component={Fleet}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={PageNotFound}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}
