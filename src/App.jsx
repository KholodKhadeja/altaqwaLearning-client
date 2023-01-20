
import './App.scss';
import MainNavBar from './Components/MainNavBar/MainNavBar';
import ImageSection from './Components/ImageSection/ImageSection';
import MainCenteredContain from './Components/MainContainer/MainCenteredContain';

function App() {
  return (
    <div className="App container" dir="rtl">
       <MainNavBar />
       <ImageSection />
       <MainCenteredContain />
    </div>
  );
}

export default App;
