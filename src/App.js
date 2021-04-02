import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Admin from './Components/Admin/Admin'
import Deals from './Components/Deals/Deals'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Orders from './Components/Orders/Orders'
import NotFound from './Components/NotFound/NotFound'


import { createContext, useState } from "react";
import MyAccount from "./Components/MyAccount/MyAccount";
import Checkout from "./Components/Checkout/Checkout";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'




export const UserContext = createContext()


function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
    newUser: false,
    imageURL:"",
    rideName:"" 
  })

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/product/:productKey">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/myaccount">
              <MyAccount></MyAccount>
            </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
