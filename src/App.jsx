
import './App.scss';
import MainNavBar from './Components/MainNavBar/MainNavBar';
import ImageSection from './Components/ImageSection/ImageSection';
import HomePage from 'Pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginPage from 'Pages/LoginPage/LoginPage';
import ExamsPage from 'Pages/Exams/ExamsPage';


function App() {
  return (
    <div className="App container" dir="rtl">
       <MainNavBar />
       <ImageSection />
       <Switch>
      <Route path="/home" component={HomePage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/exams" component={ExamsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
