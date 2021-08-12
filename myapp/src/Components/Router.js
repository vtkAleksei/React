import React from 'react';
import { BrowserRouter, Link, Route, Switch, useParams } from 'react-router-dom';
import { Profile } from './Profile';
import { Home } from './Home';
import { NoChat } from './NoChat';

export const Router = () => {
    return (
        <BrowserRouter>
            <header>
                <ul>
                    <li>
                        <Link to="/profile">profile</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
            </header>

            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/home/:chatId?">
                    <Home />
                </Route>
                <Route exact path="/">
                    <h1>Welcome MAIN PAGE</h1>
                </Route>
                <Route path="/nochat">
                    <NoChat />
                </Route>
                <Route>
                    <h3>Page not found.</h3>
                    <h1>Error 404</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}