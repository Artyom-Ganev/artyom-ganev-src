import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Menu from './Navigation/Menu';
import Ajax from './Page/Ajax';
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
                <Route path="/blog" component={Blog}/>
                <Route path="/careers" component={Careers}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/ajax" component={Ajax}/>
            </div>
        </HashRouter>
    );
}
