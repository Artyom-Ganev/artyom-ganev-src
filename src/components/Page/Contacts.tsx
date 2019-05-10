import React from 'react';
import contacts from '../../resources/contacts.json';
import './Contacts.css';

interface IContact {
    key: string;
    value: string;
    link: string;
    title: string;
}

const titles = contacts.data.map((item: IContact) => {
    return <div key={item.key}>{item.value}:&nbsp;</div>;
});

const items = contacts.data.map((item: IContact) => {
    return (
        <div key={item.key}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
        </div>
    );
});

/**
 * Contacts page
 */
export default () => {
    return (
        <div className="app-page__root">
            <h2>Contacts and Social</h2>
            <div className="flexBox alignItemsBaseline page-careers__item">
                <div>{titles}</div>
                <div>{items}</div>
            </div>
        </div>
    );
}
