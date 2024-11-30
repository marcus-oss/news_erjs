import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Views/Home.view';
import NotFound404 from './Views/NotFound404.view';
import Contact from './Views/Contact.view';
import UserView from './Views/Home.view';
import CalcView from './Views/CalcView';


  ReactDOM.render(
    
    <React.StrictMode>
      <div>
      <nav>
        <ul>
          <li><a href="/Home">Home</a></li>
        </ul>
        <ul>
          <li><a href="/Contato">Contato</a></li>
        </ul>
      </nav>
      </div>
      <BrowserRouter>
        <Switch>
          <Route path={'/home'} exact component={Home}/>
          
  
          <Route path={'/Contato'} exact component={Contact}/>
          

          <Route path={'/Usuario/:userId'}  component={UserView}/>
          <Route path={'/Calc/:a/:b'} component={CalcView} />
  
          <Route  exact component={NotFound404}/>
  
        </Switch>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  

