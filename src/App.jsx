
import './App.scss';
import MainNavBar from './Components/MainNavBar/MainNavBar';
import ImageSection from './Components/ImageSection/ImageSection';
import HomePage from 'Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App container" dir="rtl">
       <MainNavBar />
       <ImageSection />
      <HomePage />
    </div>
  );
}

export default App;
