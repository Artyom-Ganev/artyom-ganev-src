import React from 'react';
import blog from '../../resources/blog.json';
import DateUtil from '../Utils/Date';
import './Blog.scss';
import Container from './Container';

/**
 * Blog items markup
 */
const items = blog.data.sort((o1, o2) => {
    const date1 = DateUtil.parseDateFromString(o1.date) || new Date();
    const date2 = DateUtil.parseDateFromString(o2.date) || new Date();
    return date1 < date2 ? 1 : -1;
}).map((item) => {
    return (
        <div key={item.key} className="page-blog__itemContainer">
            <div className="page-blog__title">{DateUtil.format(item.date)}</div>
            <div className="page-blog__item">{item.value}</div>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkCaption}</a>
        </div>
    );
});

/**
 * Page content
 */
const content = <div className="flexBox flexColumn">{items}</div>;

/**
 * Blog page
 */
export default () => {
    return <Container title="Blog" content={content}/>;
}