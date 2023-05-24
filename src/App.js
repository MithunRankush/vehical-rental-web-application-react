import { BrowserRouter,Switch,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './components/Login';
import Mdeshbord from './components/Mdeshbord';
import Register from './components/Register';
import Resetpwd from './components/Resetpwd'
function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        
        <Route  path="/register">
          <Register/>
        </Route>
       
        <Route  path="/resetpwd">
          <Resetpwd/>
          
        </Route>
        <Route path="/Mdashboard">
        <Mdeshbord/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
