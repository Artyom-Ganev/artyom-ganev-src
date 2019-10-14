import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Menu from './Navigation/Menu';
import Bio from './Page/Bio';
import Blog from './Page/Blog';
import Careers from './Page/Careers';
import Contacts from './Page/Contacts';
import Main from './Page/Main';

/**
 * Main application
 */
export default () => {
    return (
        <HashRouter>
            <div className="flexBox flexColumn">
                <Menu/>
                <Route exact={true} path="/" component={Main}/>
                <Route path="/bio" component={Bio}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/careers" component={Careers}/>
                <Route path="/contacts" component={Contacts}/>
            </div>
        </HashRouter>
    );
}
