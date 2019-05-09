import React from 'react';
import contacts from '../../resources/contacts.json';
import './Contacts.css';

interface IContact {
    key: string;
    value: string;
    link: string;
    title: string;
}

/**
 * Contacts page
 */
export default class Contacts extends React.Component {

    private titles = contacts.data.map((item: IContact) => {
        return <div key={item.key}>{item.value}:&nbsp;</div>;
    });

    private items = contacts.data.map((item: IContact) => {
        return (
            <div key={item.key}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
            </div>
        );
    });

    public render() {
        return (
            <div className="app-page__root">
                <h2>Contacts and Social</h2>
                <div className="flexBox alignItemsBaseline page-careers__item">
                    <div>{this.titles}</div>
                    <div>{this.items}</div>
                </div>
            </div>
        );
    }
}