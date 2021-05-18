import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css"
import "materialize-css"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import Orders from "./scenes/Orders"
import Products from "./scenes/Products"
import Users from "./scenes/Users"
import Login from "./scenes/Login"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/" component={Login} /> {/* Needs to be last its the catch all */}
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
