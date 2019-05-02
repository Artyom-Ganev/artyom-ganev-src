import React from 'react';
import blog from '../../resources/blog.json';
import './Blog.css';

/**
 * Blog page
 */
export default class Blog extends React.Component {
    public render() {
        const data = blog.data;
        const items = data.map((item) => {
            return (
                <div key={item.key}>
                    <div className="page-blog__title">{item.key}</div>
                    <div className="page-blog__item">{item.value}</div>
                </div>
            );
        });

        return (
            <div className="app-page__root">
                <h2>Blog</h2>
                <div className="flexBox flexColumn">
                    {items}
                </div>
            </div>
        );
    }
}