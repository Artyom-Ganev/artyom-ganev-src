import React from 'react';
import blog from '../../resources/blog.json';
import DateUtil from '../../util/Date';
import './Blog.css';

/**
 * Blog page
 */
export default class Blog extends React.Component {
    public render() {
        const data = blog.data;
        const items = data.sort((o1, o2) => {
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

        return (
            <div className="app-page__root">
                <h2>Blog</h2>
                <div className="flexBox flexColumn">{items}</div>
            </div>
        );
    }
}