import React from 'react';
import contacts from '../../resources/contacts.json';
import './Contacts.scss';
import Container from './Container';

/**
 * Contact options interface
 */
interface IContact {
    key: string;
    value: string;
    link: string;
    title: string;
}

/**
 * Contacts titles markup
 */
const titles = contacts.data.map((item: IContact) => {
    return <div key={item.key}>{item.value}:&nbsp;</div>;
});

/**
 * Contacts items markup
 */
const items = contacts.data.map((item: IContact) => {
    return (
        <div key={item.key}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
        </div>
    );
});

/**
 * Page content
 */
const content = (
    <div className="flexBox alignItemsBaseline page-careers__item">
        <div>{titles}</div>
        <div>{items}</div>
    </div>
);

/**
 * Contacts page
 */
export default () => {
    return <Container title="Contacts and Social" content={content}/>;
}
