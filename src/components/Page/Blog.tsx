import React from 'react';
import blog from '../../resources/blog.json';
import {DateUtil} from '../Utils';
import './Blog.css';
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
        <div key={item.key}>
            <div className="page-blog__title">{item.date}</div>
            <div className="page-blog__item">{item.value}</div>
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