import React from 'react';
import { useMatch, Route, Link, Routes } from 'react-router-dom';
import Account from './Account';
import Profile from './Profile';

function User() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="account">Account</Link></li>
                    <li><Link to="profile/15/Eugene">Profile</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/account" element={<Account />} />
                    <Route path="/profile/:id/:name" element={<Profile match={useMatch("/profile/:id/:name")} />} />
                    {/* <Route path='/profile/:id' element={<Profile />}/> */}
                </Routes>
            </main>
        </div>
    );
}

export default User;