import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header';
import Footer from './components/footer';

import About from './components/About';
import Contact from './components/contact';
import Portfolio from "./components/portfolio";


function App() {
  return (
    <div>
       {/* <ToastContainer
        position="top-center"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        /> */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/portfolio" component={Portfolio} />
                {/* <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile/:username?" component={Profile} />
                <Route exact path="/thought/:id" component={SingleThought} />
                <Route exact path="/launch/:launchId" component={LaunchDetail} /> */}

              </Switch>
            </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
