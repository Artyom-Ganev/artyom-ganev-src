import * as React from 'react';
import './Main.css';

/**
 * Main page
 */
export default class Main extends React.Component {
    public render() {
        return (
            <div className='page-main__root'>
                <div>Hi! My name is Artem. I'm a programmer, based in Rybinsk, Russia.</div>
                <div>You can learn some more facts about me on this site later.</div>
                <div>I'm still working on it.</div>
            </div>
        );
    }
}