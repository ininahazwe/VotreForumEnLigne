import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from "./pages";
import ContactPage from "./pages/contact";
import OptionsPage from "./pages/options";
import ScrollToTop from "./components/ScroolToTop";

function App() {
    const PageNotFound = () => (
        <div>404 !<Link to="/">Home</Link></div>
    )
  return (
    <Router>
        <ScrollToTop />
       <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/contact" component={ContactPage} exact />
           <Route path="/options" component={OptionsPage} exact />
           <Route component={PageNotFound} />
       </Switch>
    </Router>
  );
}

export default App;
