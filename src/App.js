// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdventureDetails from './components/AdventureDetails/AdventureDetails';
import Advenntures from './components/Adventures/Advenntures';
import Flights from './components/Flights/Flights';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/adventures' element={<Advenntures />} />
            <Route path='/order'
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            />
            <Route path='/flights' element={<Flights />} />
            <Route path='/adventures/:advId' element={<AdventureDetails />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
