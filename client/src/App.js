import { Route } from 'react-router-dom';
import './App.css';
import CardDetails from './components/CardDetails/CardDetails';
import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Pago from "./components/Pago/Pago.js";
import ProfilePrincipal from './components/Profile/ProfilePrincipal';

function App() {
  return (
    <div className="App">
      <Route path='/' component={NavBar} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/carrito' component={Cart} />
      <Route exact path='/category/:category' component={Cards} />
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={CardDetails} />
      <Route path="/pago" component={Pago} />

      {/* Profile */}
      <Route exact path ="/profile" component={ProfilePrincipal} />

    </div>
  );
}

export default App;
