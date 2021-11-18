import { Route } from 'react-router-dom';
import './App.css';

// Home
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';

// Item detalle
import CardDetails from './components/CardDetails/CardDetails';

// Usuarios
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import ProfilePrincipal from './components/Profile/ProfilePrincipal';

import Forgot from "./components/Forgot/Forgot";
 import NewPassword from './components/NewPassword/NewPassword';

// Carrito y Pago
import Cart from './components/Cart/Cart';
import Checkout from "./components/Checkout/Checkout";

// Admin
import Admin from "./components/Admin/Admin";
import AdminUsers from './components/Admin/AdminUsers/AdminUsers';
import AdminStock from './components/Admin/AdminStock/AdminStock';
import Create from "./components/Admin/AdminStock/Create/Create";
import AdminTickets from './components/Admin/AdminTickets/AdminTickets';


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
      {/* Profile */}
      <Route exact path ="/profile" component={ProfilePrincipal} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/forgot" component={Forgot} /> 
      <Route path="/newPassword" component={NewPassword} /> 
      
    
      {/* Admin */}
      <Route path="/admin" component={Admin} />
      <Route path="/admin/users" component={AdminUsers} />
      <Route path="/admin/stock" component={AdminStock} />
      <Route path="/admin/create" component={Create} />
      <Route path="/admin/tickets" component={AdminTickets} />
      
    </div>
  );
}

export default App;
