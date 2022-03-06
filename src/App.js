import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header';
import Footer from './components/footer';

import About from './components/About';
import Contact from './components/contact';
import Portfolio from "./components/portfolio";
import Resume from './components/resume';

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
        <div >
          <Header />
            <div className="container">
              <Switch>
                <div>
                  <Route exact path="/" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/resume" component={Resume} />
                  {/* <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/profile/:username?" component={Profile} />
                  <Route exact path="/thought/:id" component={SingleThought} />
                  <Route exact path="/launch/:launchId" component={LaunchDetail} /> */}
                </div>

              </Switch>
            </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
