import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Login from './Components/Authentication/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            Welcome User
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
