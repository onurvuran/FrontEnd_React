
import './App.css';
import './pages/LoginPage';
import LoginPage from './pages/LoginPage';
import './pages/UserSinupPage';
import UserSingupPageWithTranslation from './pages/UserSinupPage';
import Languageselector  from './components/Languageselector';
function App() {
  return (
    <div>
      <div className="container">
    <div class="row">
    <div className="col-md-6"> 
      <LoginPage></LoginPage>
      </div>
      <div className="col-md-6">
       <UserSingupPageWithTranslation/>
      <Languageselector/></div>
      </div>
      </div>
    </div>
  );
}

export default App;
