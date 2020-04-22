import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Index from "./components/Index";
import Exapleimages from "./components/Exapleimages";
import Csubmit from "./components/Csubmit";
import Rsubmit from "./components/Rsubmit";
import Commissions from "./components/Commissions";
import About from "./components/About";


function App() {
  return (
    <div>
 <Header/>  
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Exapleimages" component={Exapleimages}/>
      <Route exact path="/Commissions" component={Commissions}/>
    </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;

