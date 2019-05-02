import React from 'react';

const FACEBOOK = 'https://www.facebook.com/artyom.ganev';
const MAIL = 'a.a.ganev@gmail.com';
/**
 * Contacts page
 */
export default class Contacts extends React.Component {
    public render() {
        return (
            <div className="app-page__root">
                <h2>Contacts</h2>
                <div className="flexBox">
                    <div>
                        <div>E-mail:&nbsp;</div>
                        <div>Facebook:&nbsp;</div>
                    </div>
                    <div>
                        <div>
                            <a href={`mailto:${MAIL}`} target="_blank" rel="noopener noreferrer">{MAIL}</a>
                        </div>
                        <div>
                            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">artyom.ganev</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}