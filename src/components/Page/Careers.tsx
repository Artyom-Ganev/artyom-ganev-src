import React from 'react';
import careers from '../../resources/careers.json';
import DateUtil from '../../util/Date';
import './Careers.css';
import Container from './Container';

const DATE_FORMAT = {
    month: 'long',
    year: 'numeric'
};

const formatDates = (dateStr: string[]): string => {
    const date1 = DateUtil.parseDateFromString(dateStr[0]);
    const date2 = DateUtil.parseDateFromString(dateStr[1]);
    if (date1) {
        const string1 = date1.toLocaleDateString('en-US', DATE_FORMAT);
        if (date2) {
            return `${string1} - ${date2.toLocaleDateString('en-US', DATE_FORMAT)}`;
        }
        return `Since ${string1}`;
    }
    return '';
};

const items = careers.data.map((item) => {
    return (
        <div key={item.key} className="page-careers__item">
            <h3 className="page-careers__title">
                <a href={item.site} target="_blank" rel="noopener noreferrer">{item.title}</a>
            </h3>
            <div className="page-careers__dates">{formatDates(item.dates)}</div>
            <div className="">{item.post}</div>
            <div className="">{item.description}</div>
            <div className="flexBox flexColumn">
                <div className="">{item.tools}</div>
            </div>
        </div>
    );
});

const content = <div className="flexBox flexColumn">{items}</div>;

/**
 * Careers page
 */
export default () => {
    return <Container title="Careers" content={content}/>;

}
