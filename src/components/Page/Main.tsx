import React from 'react';
import img from '../../resources/artyom.jpg';
import './Main.css';

/**
 * Main page
 */
export default class Main extends React.Component {
    public render() {
        return (
            <div className='app-page__root'>
                <div className="flexBox alignItemsCenter">
                    <img className="page-main__image" src={img} alt="Artyom" title="artyom.jpg"/>
                    <div>
                        <h2>Hi! My name is Artyom.</h2>
                        <div>I'm a programmer, based in Rybinsk, Russia.</div>
                        <div>You can learn some more facts about me on this site later.</div>
                        <div>I'm still working on it.</div>
                    </div>
                </div>
            </div>
        );
    }
}