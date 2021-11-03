//vendors
import './App.css';
//router
import { Switch, Route } from 'react-router-dom';
//screen
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import JSLevelScreen from './screens/JSlevel';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import MainModal from './components/modals/mainModal';
//import Slatee from './screens/auth/Slate';
//Protected
import Protected from "./protected/Protected";

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomeScreen}/>
        <Route exact path='/Quiz' component={QuizScreen}/>
        <Route exact path='/JSLevels' component={JSLevelScreen}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Register' component={Register}/>
        {/* test routes*/}
        <Route exact path='/Modal' component={MainModal}/>
        {/*<Route exact path="/Slate" component={Slatee}/>*/}
        <Protected exact path='/auth/Quiz' component={QuizScreen}/>
        <Protected exact path='/auth/JSLevels' component={JSLevelScreen}/>
      </Switch>
    </div>
  );
}

export default App;
