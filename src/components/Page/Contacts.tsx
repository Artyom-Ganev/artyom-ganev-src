import React from 'react';

const FACEBOOK = 'https://www.facebook.com/artyom.ganev';
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
                        <div>a.a.ganev@gmail.com</div>
                        <div>
                            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">{FACEBOOK}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}