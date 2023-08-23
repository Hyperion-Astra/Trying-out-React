import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import Account from './pages/user/Account';
import Profile from './pages/user/Profile';
import {Routes, Route, Link} from "react-router-dom";
import User from './pages/user/User';
import ProtectedRoute from './Utility/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <header className="App-heade"> {/*removed the r */}
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
              {/*  Link components are used for linking to other views */}
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/account">Register</Link>
              </li>
              <li>
                  <Link to="/profile/34">Account</Link>
              </li>
              <li>
                  <Link to="/user">User</Link>
              </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/account" element={<Account />} />
            {/* <Route path='/profile/:id' element={<Profile />}/> */}
            {/* <Route path='/user/*' element={<User />} /> */}
            <Route path="/user/*" element={
                <ProtectedRoute isLoggedIn={true}>   {/*the flag isLoggedIn is simulating a logged in account, if not, when clicked, it will go to the homepage*/}
                    <User />
                </ProtectedRoute>
            } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
