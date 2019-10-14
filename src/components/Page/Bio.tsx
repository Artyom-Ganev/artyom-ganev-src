/**
 * Bio page
 */
import React from 'react';
import bio from '../../resources/bio.json';
import './Bio.scss';
import Container from './Container';

const items = bio.data.map((value: string, key: number) => {
    return (
        <div key={key} className="page-bio__item">{value}</div>
    );
});

const content = (
    <div>
        <div className="page-bio__root"/>
        {items}
    </div>
);

export default () => {
    return <Container title="About me" content={content}/>;
}