import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import CardAuthenticator from './pages/CardAuthenticator';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <header>
          <NavigationBar/>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/card" exact component={CardAuthenticator} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
