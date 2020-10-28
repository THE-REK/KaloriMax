import React from "react"
import Signup from "../../pages/auth/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../../contexts/AuthContexts"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from './DashBoard'
import Profile from "../../pages/auth/Profile"
import Login from "../../pages/auth/Login"
import PrivateRoute from "../../pages/auth/PrivateRoute"
import ForgotPassword from "../../pages/auth/ForgotPassword"
import UpdateProfile from "../../pages/auth/UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
