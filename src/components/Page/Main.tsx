import React from 'react';
import img from '../../resources/artyom.jpg';
import './Main.scss';

const BLANK = '_blank';
const LINKS = {
    Back: 'https://github.com/Artyom-Ganev/artyom-ganev-server',
    Front: 'https://github.com/Artyom-Ganev/artyom-ganev-src',
    Rybinsk: 'https://en.wikipedia.org/wiki/Rybinsk'
};
const REL = 'noopener noreferrer';

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
                    <div>
                        I'm a programmer, based in&nbsp;
                        <a href={LINKS.Rybinsk} target={BLANK} rel={REL}>Rybinsk</a>,&nbsp;Russia.
                    </div>
                    <div>There are some facts about me on this site.</div>
                    <div>You can contact me if you have some ideas for it's improvement or have found bugs, typos etc.
                    </div>
                    <div>I'm still working on it.</div>
                    <div>
                        Frontend of this site is based on React, TypeScript and Sass, the sources of this part are
                        located on GitHub&nbsp;
                        <a href={LINKS.Front} target={BLANK} rel={REL}>here</a>.
                    </div>
                    <div>
                        Backend uses Spring Boot, Maven, Heroku and PostgreSQL and is located&nbsp;
                        <a href={LINKS.Back} target={BLANK} rel={REL}>here</a>.
                    </div>
                </div>
            </div>
        </div>
    );
};
