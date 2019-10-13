import React from 'react';
import BlogSource from '../Source/Blog';
import IBlog from '../Source/IBlog';
import DateUtil from '../Utils/Date';
import './Blog.scss';
import Container from './Container';

/**
 * Blog page
 */
export default class Blog extends React.Component {
    public state: { items: IBlog[] } = { items: [] };

    public componentDidMount() {
        BlogSource.getList().then((items: IBlog[]) => {
            this.setState({ items });
        });
    }

    public render() {
        const content = <div className="flexBox flexColumn">{this.getItems()}</div>;
        return <Container title="Blog" content={content}/>;
    }

    /**
     * Blog items markup
     */
    private getItems() {
        // TODO: перейти на нормальный формат даты в базе
        return this.state.items.map((item: IBlog) => {
            return (
                <div key={item.id} className="page-blog__itemContainer">
                    <div className="page-blog__title">{DateUtil.format(`${item.year}-${item.month}-${item.day}`)}</div>
                    <div className="page-blog__item">{item.title}</div>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkCaption}</a>
                </div>
            );
        });
    }
}