import {SyntheticEvent} from 'react';
import * as React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
    public render() {
        return (
            <div className="flexBox nav-menu__root" id="menu">
                <div className="nav-menu__item" id="main" onClick={onClick}>Main</div>
                {/*<div className="nav-menu__item" id="bio" onClick={onClick}>Bio</div>*/}
                {/*<div className="nav-menu__item" id="careers" onClick={onClick}>Careers</div>*/}
                <div className="nav-menu__item" id="contacts" onClick={onClick}>Contacts</div>
            </div>
        );
    }
}

function onClick(event: SyntheticEvent): void {
    const root = document.getElementById('menu');
    const key = event.currentTarget.getAttribute('id');
    if (root) {
        root.dispatchEvent(new CustomEvent('menuItemClick', {detail: key}));
    }
}