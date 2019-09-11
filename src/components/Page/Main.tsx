import React from 'react';
import img from '../../resources/artyom.jpg';
import './Main.scss';

/**
 * Main page
 */
export default () => {
    return (
        <div className='page-main__root'>
            <div className="flexBox alignItemsCenter">
                <img className="page-main__image" src={img} alt="Artyom" title="artyom.jpg"/>
                <div className="page-main--lineHeight">
                    <h2>Hi! My name is Artyom.</h2>
                    <div>I'm a programmer, based in Rybinsk, Russia.</div>
                    <div>You can learn some more facts about me on this site later.</div>
                    <div>I'm still working on it.</div>
                    <div>The sources of this site are located on GitHub&nbsp;
                        <h3>
                            <a href="https://github.com/Artyom-Ganev/artyom-ganev-src" target="_blank"
                               rel="noopener noreferrer">here</a>.
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    );
};
